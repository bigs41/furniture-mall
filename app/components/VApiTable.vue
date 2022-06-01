<template>
  <div class="v-api-data-table">
    <v-data-table
      v-if="isReady"
      :class="{ 'row-pointer': rowPointer }"
      :disable-pagination="disablePagination"
      :footer-props="footerProps"
      :headers="headers"
      :hide-default-footer="hideDefaultFooter"
      :item-key="itemKey"
      :items.sync="items"
      :loading="loading"
      :multi-sort="multiSort"
      :must-sort="mustSort"
      :options.sync="options"
      :search.sync="search"
      :selectable-key="selectableKey"
      :server-items-length="total"
      :show-select="showSelect"
      :single-select="singleSelect"
      :sort-by="headers[0].value"
      @click:row="onClickRow"
      v-model="value"
      v-bind="attrs"
    >
      <!-- Pass on all named slots -->
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />

      <!-- Pass on all scoped slots -->
      <template
        v-for="slot in Object.keys($scopedSlots)"
        :slot="slot"
        slot-scope="scope"
      >
        <slot :name="slot" v-bind="scope" />
      </template>
    </v-data-table>
    <div class="pt-2 d-flex flex-row" style="border-top:solid #ccc 1px" v-if="paginationNumber && pageCount">
        <v-pagination
            v-model="numPage"
            :total-visible="7"
            :length="pageCount"
        ></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from "~/utils/axios";
import _ from "lodash";


export default {
  props: {
    attrs: {},
    id: { type: String },
    disablePagination: { type: Boolean, default: false },
    paginationNumber: { type: Boolean, default: false },
    headers: { type: Array, default: () => [] },
    hideDefaultFooter: { type: Boolean, default: false },
    itemKey: { type: String, default: "id" },
    items: { type: Array, required: false, default: () => [] },
    loading: { type: Boolean, default: false },
    multiSort: { type: Boolean, default: false },
    mustSort: { type: Boolean, default: false },
    options: { type: Object, default: () => ({}) },
    queryParams: { type: Object, default: () => ({}) },
    rowPointer: { type: Boolean, default: false },
    search: { type: String },
    searchFields: { type: Array },
    selectableKey: { type: String, default: "isSelectable" },
    showSelect: { type: Boolean, default: false },
    singleSelect: { type: Boolean, default: false },
    total: { type: Number, default: -1 },
    url: { type: String, required: true },
    value: { type: Array, required: false, default: [] },
    provider: { type: String },
    footerProps: {
      type: Object,
      default:()=>({
        rowsPerPageOptions: [5, 10, 15, 20],
      })
    },
  },
  data() {
    return {
      isReady: false,
      oldQuery: null,
      pageCount: 0,
      numPage: 1,
    };
  },
  methods: {
    async getData(force = false) {
      if (!this.url) return;
      this.loading = true;
      console.log('limit',_.get(this.options, "perPage", _.get(this.options, "itemsPerPage", this.itemsPerPage)));
      
      let queryParams = [
        this.url,
        {
            params:
            _.merge(
              {
                page: this.options.page,
                limit: _.get(this.options, "perPage", _.get(this.options, "itemsPerPage", this.itemsPerPage)),
                orderBy: (() => {
                  let r = [];
      
                  for (let i in this.options.sortBy) {
                    r.push(
                      (_.get(this, `options.sortDesc.${i}`) ? "-" : "") +
                        this.options.sortBy[i]
                    );
                  }
      
                  return r;
                })(),
                search: this.search,
                searchFields: this.searchFields,
              },
              this.queryParams
            )
        }
      ];

      if (force || this.oldQuery != JSON.stringify(queryParams)) {
        this.oldQuery = JSON.stringify(queryParams);
        console.log("queryParams", queryParams);
        const r = await axios.get(...queryParams);

        this.items = _.get(r, "data.docs", _.get(r, "data.data.docs", []));
        this.total = _.get(r, "data.totalDocs", _.get(r, "data.data.totalDocs", 0));
        this.pageCount = _.get(r, "data.totalPages", _.get(r, "data.data.totalPages", 0));
        // this.$emit("items", this.items);
        // this.$emit("total", this.total);

        _.chain(this.items)
          .intersectionBy(this.value, this.itemKey)
          .each((item) => (item[this.selectableKey] = true));

        this.value = this.items.filter(
          (item) => item[this.selectableKey] == true
        );

        this.items.filter((item) => item.isSelectable);

        if (this.headers.length == 0 && this.items[0]) {
          let headers = [];
          for (let key of Object.keys(this.items[0])) {
            headers.push({
              text: key,
              value: key,
            });
          }
          this.headers = headers;
        }

        for (let key of Object.keys(this.headers)) {
          this.headers[key].class =
            this.headers[key].class || "secondary--text";
        }
      }
      this.loading = false;
      this.$emit("loaded", this.loading);
    },
    async delete(ids) {
      if (!ids) {
        // delete selected items
        ids = this.value.map((item) => item[this.itemKey]);
      }

      
    await axios.delete(this.url, {
        params: { ids },
    });
      

      this.getData(true);
    },
    onClickRow(...args) {
      this.$emit("click:row", ...args);
    },
  },
  watch: {
    queryParams: {
      deep: true,
      handler(v) {
        this.getData();
      },
    },
    value: {
      deep: true,
      handler(v) {
        this.$emit("input", v);
      },
    },
    items: {
      deep: true,
      handler(v) {
        this.$emit("items", v);
      },
    },
    options: {
      handler(options, oldOptions) {
          console.log('options', options);
        if (!_.isEqual(options, oldOptions)) {
          this.getData();
            
        }
      },
    },
    numPage: {
      handler(v) {
        this.options.page = v;
        this.getData();
      },
    },
    search() {
      this.options.page = 1;
      this.getData();
    },
  },
  async mounted() {
    this.$el.reload = this.getData;

    _.isEmpty(this.options);
    this.isReady = true;
    
  },
};
</script>

<style lang="scss" scoped>
.v-api-data-table ::v-deep{
  .theme--light.v-data-table
    .v-data-table-header
    th.sortable.active
    .v-data-table-header__icon {
    color: inherit !important;
  }
  
  .row-pointer tbody tr td :hover {
    cursor: pointer;
  }
}
</style>
