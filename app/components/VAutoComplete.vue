<template>
<div>

  <v-autocomplete
    v-model="value"
    :items="listItems"
    :loading="isLoading"
    :search-input.sync="search"
    :placeholder="placeholder"
    :rules="required ? [(v) => !!v || required] : []"
    :outlined="outlined"
    :solo="solo"
    :label="label"
    :class="calss"
    :item-text="itemText"
    :item-value="itemValue"
    :clearable="clearable"
    :disabled="disabled"
    :multiple="multiple"
    :chips="chips"
    return-object
    dense
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
    <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
  </v-autocomplete>
</div>
</template>
<script>
import axios from "~/utils/axios";
import $axios from "axios";
export default {
  props: {
    value: { type: Array },
    itemText: { type: String },
    itemValue: { type: String },
    items: { type: Array, default: () => [] },
    url: { type: String },
    limit: { type: Number, default: 50 },
    prependLabel: { type: String },
    placeholder: { type: String },
    label: { type: String },
    searchKey: { type: String, default: "search" },
    searchFields: { type: Array, default: ["name"] },
    calss: { type: String },
    outlined: { type: Boolean, default: false },
    solo: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false }, 
    chips: { type: Boolean, default: false }, 
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    required: { type: String },
    notLocal: { type: Boolean, default: false },
    optionQuery: { type: Object, default: () => {} },
  },
  data() {
    return {
      search: null,
      isLoading: false,
      inputData: null,
      listItems: this.items
    };
  },
  computed:{
    tmpList(){
      return this.listItems;
    }
  },
  methods: {
    async getData(val) {
      this.isLoading = true;
      let body = [];
      let url = this.url;
      if (!this.empty(this.optionQuery)) {
        for (const key in this.optionQuery) {
          body.push(`${key}=${this.optionQuery[key]}`);
        }
      }
      if(!this.notLocal){
        if (!this.empty(this.limit)) {
          body.push(`limit=${this.limit}`);
        }
        if (!this.empty(this.searchFields)) {
          let searchFields =
            typeof this.searchFields === "string"
              ? this.searchFields.split(",")
              : this.searchFields;

          for (const sf of searchFields) {
            body.push(`searchFields[]=${sf}`);
          }
        }
      }
      if (!this.empty(this.search)) {
        body.push(`${this.searchKey}=${this.search}`);
      }
      if (!this.empty(val)) {
        body.push(`${this.searchKey}=${val}`);
      }
      
      if (!this.empty(this.inputData)) {
        body.push(`where={"${this.itemValue}":"${this.inputData}"}`);
      }

      if (!this.empty(body)) {
        url = `${url}?${body.join("&")}`;
      }
      let res = null;
      try {
        if(this.notLocal){
          res = await $axios.get(url);
        }else{
          res = await axios.get(url);
        }
      } catch (error) {
        console.error(error);
      }

      
      this.listItems = _.concat(this.items, _.get(res, "data.data.docs",_.get(res, "data.docs",_.get(res, "data.data",_.get(res, "data",[])))));

      this.isLoading = false;
    }
  },
  watch: {
    async search(val) {
      await this.getData();
    },
    value: {
      deep: true,
      handler(v) {
        try {
          this.$emit("input", v);
        } catch (error) {}
        try {
          this.$emit("blur", v);
        } catch (error) {}
      }
    }
  },
  async mounted() {
    await this.tmpList;
    this.listItems = this.items;
    await this.getData(this.value);
  }
};
</script>