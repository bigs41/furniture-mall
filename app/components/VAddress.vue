<template>
  <v-flex>
    <v-row>
      <v-col cols="12" md="12">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("ค้นหาจากชื่อสถานที่") }}</v-list-item-subtitle
        >
        <v-auto-complete
            ref="autoComplete"
            class="my-0"
            url="https://search.longdo.com/mapsearch/json/suggest"
            searchKey="keyword"
            item-text="w"
            item-value="id"
            :searchFields="[]"
            :limit="5"
            :items="!empty(suggest)?[suggest]:[]"
            outlined
            v-model="suggest"
            not-local
            :option-query="{
                key:keyCode,
                limit:10
            }"
            ></v-auto-complete>

      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("ชื่อที่อยู่") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.name"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("ที่อยู่") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.address"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("ถนน/ซอย") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.road"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("ตำบล/แขวง") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.subdistrict"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("อำเภอ/เขต") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.district"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("จังหวัด") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.province"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("รหัสไปรษณี") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.postcode"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item-subtitle
          class="grey--text text--darken-1 body-1 pr-2 mb-2"
          >{{ $t("ประเทศ") }}</v-list-item-subtitle
        >
        <v-text-field
          class="pa-0"
          v-model="value.country"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- <hr>
    <v-row>
      <v-col>
        <v-autocomplete
          v-model="value"
          :items="items"
          :placeholder="$t('_478e4b3a')"
          :rules="required ? [(v) => !!v || required] : []"
          return-object
          outlined
          dense
          loading="itemLoading"
        >
        </v-autocomplete>
      </v-col>
    </v-row> -->

  </v-flex>
</template>
<script>
import csv from "csvtojson";
import axios from "axios";
import _ from "lodash";
export default {
  props: {
    value: { type: Object, default: {} },
  },
  data() {
    return {
      myform:null,
      itemLoading: true,
      address:{},
      listLocal:[],
      suggest:{},
      keyCode:'fa2027055ac687da46ba26d18eaef53a',
      items: [],
    };
  },
  watch:{
      async suggest(val){
        try {
          let $r = await this.loadAddress(val.w);
          this.value = $r;
        } catch (error) {
          
        }
        
      },
      value:{
        handler:function(val){
          if(_.isPlainObject(val)){
            this.$emit('input',val);
          }else{
            this.$emit('input',_.head(val));
          }
        },
        deep:true
      }
  },
  methods:{
      suggest(r){
        this.listLocal = r.data;
      },
      async loadAddress(keyword){
          const keyCode = 'fa2027055ac687da46ba26d18eaef53a';
          const response = await axios.get(`https://search.longdo.com/mapsearch/json/search?keyword=${keyword}&area=10&span=100km&limit=1&key=${keyCode}`);
          let $r = _.get(response,'data.data[0]');
          const response2 = await axios.get(`https://api.longdo.com/map/services/address?key=${keyCode}&id=${_.get($r,'id')}`);
          return _.merge($r,response2.data)
      }

  },
  async mounted() {
    // let r = await axios.get("/value.csv");

    // csv()
    //   .fromString(r.data)
    //   .then((rows) => {
    //     this.items = rows.map((v) => {
    //       v.text = `${v.TambonThai}  ${v.DistrictThai} ${v.ProvinceThai} ${v.PostCodeAll}`;
    //       return v;
    //     });
    //     this.itemLoading = false;
    //   });
  },
};
</script>
