<template>
  <div class="v-api-data-table table-data">
    <div v-if="!empty(url)">
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
        :header-props="{ sortIcon: 'mdi-triangle-small-up' }"
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


      <template v-if="paginationHeader" v-slot:top="{ pagination, options, updateOptions }">
          <v-app-bar elevate-on-scroll>
            <slot name="pagination-header-btn" v-if="!empty(paginationHeaderBtn)">
              <nuxt-link v-for="phb in paginationHeaderBtn" :key="phb" :to="phb.link" class="btn btn-main"><h5 class="mb-0">{{phb.title}}</h5></nuxt-link>
            </slot>
            <v-spacer></v-spacer>
            <v-btn
                icon
                color="pink"
                :disabled="empty(numPage-1)||total==0"
                @click="numPage=1"
              >
              <i class="fa fa-backward" aria-hidden="true"></i>
            </v-btn>
            <v-btn
                icon
                color="pink"
                :disabled="empty(numPage-1)||total==0"
                @click="numPage=numPage-1"
              >
              <i class="fa fa-play fa-rotate-180" aria-hidden="true"></i>
            </v-btn>
            {{numPage}} to {{numPage*perPage>=total?total:numPage*perPage}} of {{total}}
            <v-btn
                icon
                color="pink"
                :disabled="numPage>=pageCount||total==0"
                @click="numPage=numPage+1"
              >
              <i class="fa fa-play" aria-hidden="true"></i>
            </v-btn>
            <v-btn
                icon
                color="pink"
                :disabled="numPage>=pageCount||total==0"
                @click="numPage=pageCount"
              >
              <i class="fa fa-forward" aria-hidden="true"></i>
            </v-btn>
          </v-app-bar>
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
    <div  v-if="empty(url)">
      <v-data-table
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
        :search.sync="search"
        :selectable-key="selectableKey"
        :show-select="showSelect"
        :single-select="singleSelect"
        :sort-by="headers[0].value"
        :header-props="{ sortIcon: 'mdi-triangle-small-up' }"
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


      <template v-if="paginationHeader" v-slot:top="{ pagination, options, updateOptions }">
          <v-app-bar elevate-on-scroll>
            <slot name="pagination-header-btn" v-if="!empty(paginationHeaderBtn)">
              <nuxt-link v-for="phb in paginationHeaderBtn" :key="phb" :to="phb.link" class="btn btn-main"><h5 class="mb-0">{{phb.title}}</h5></nuxt-link>
            </slot>
            <v-spacer></v-spacer>
            <v-btn
                icon
                color="pink"
                :disabled="pagination.pageStart==0||pagination.itemsLength==0"
                @click="options.page=1"
              >
              <i class="fa fa-backward" aria-hidden="true"></i>
            </v-btn>
            <v-btn
                icon
                color="pink"
                :disabled="pagination.pageStart==0||pagination.itemsLength==0"
                @click="options.page=options.page-1"
              >
              <i class="fa fa-play fa-rotate-180" aria-hidden="true"></i>
            </v-btn>
            
            {{pagination.page}} to {{pagination.page*pagination.itemsPerPage>=pagination.itemsLength?pagination.itemsLength:pagination.page*pagination.itemsPerPage}} of {{pagination.itemsLength}}
            <v-btn
                icon
                color="pink"
                :disabled="pagination.pageStop>=pagination.itemsLength||pagination.itemsLength==0"
                @click="options.page=options.page+1"
              >
              <i class="fa fa-play" aria-hidden="true"></i>
            </v-btn>
            <v-btn
                icon
                color="pink"
                :disabled="pagination.pageStop>=pagination.itemsLength||pagination.itemsLength==0"
                @click="options.page=pagination.itemsLength"
              >
              <i class="fa fa-forward" aria-hidden="true"></i>
            </v-btn>
          </v-app-bar>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import axios from "~/utils/axios";
import _ from "lodash";
import collect from "collect.js";

export default {
  props: {
    attrs: {},
    id: { type: String },
    disablePagination: { type: Boolean, default: false },
    paginationHeader: { type: Boolean, default: false },
    paginationHeaderBtn: { type: Array, default: [] },
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
    url: { type: String, required: true },
    value: { type: Array, required: false, default: [] },
    provider: { type: String },
    returnData: { type: Function, default: (data) => data },
    footerProps: {
      type: Object,
      default:()=>({
        itemsPerPage:5,
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
      perPage: 0,
      total: 0,
    };
  },
  methods: {
    async getData(force = false) {
      
      if (this.empty(this.url)){
        this.total = _.get(this.options, "perPage", _.get(this.options, "itemsPerPage", 2))
        return;
      }
      this.loading = true;
      // console.log('limit',_.get(this.options, "perPage", _.get(this.options, "itemsPerPage", this.itemsPerPage)));
      const search = collect(this.search).filter(r=>{
        return !['null',null].includes(r)
      }).all();
        console.log(search);
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
                search: search,
                searchFields: this.searchFields,
              },
              this.queryParams
            )
        }
      ];

      if (force || this.oldQuery != JSON.stringify(queryParams)) {
        this.oldQuery = JSON.stringify(queryParams);
        const r = await axios.get(...queryParams);
        const $data = _.get(r, "data.data", _.get(r, "data", []))
        this.items = _.get(r, "data.docs", _.get(r, "data.data.docs", []));
        this.total = _.get(r, "data.totalDocs", _.get(r, "data.data.totalDocs", 0));
        this.pageCount = _.get(r, "data.totalPages", _.get(r, "data.data.totalPages", 0));
        this.perPage = _.get(r, "data.limit", _.get(r, "data.data.limit", 0));
        this.perPage =  this.total<=this.perPage?this.total:this.perPage;
        this.returnData($data);
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
.table-data ::v-deep{
  .v-toolbar{
    box-shadow: none !important;
  }
  .v-data-table--has-top{
    background: transparent;
  }
  .theme--light.v-app-bar.v-toolbar.v-sheet{
    background: transparent;
  }
  .v-data-table .v-data-table-header th.sortable .v-data-table-header__icon{
      color: #ffffff !important;
  }
  .v-data-table-header{
    background-color: #0a0a0a;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 10px 10px 0 0;
    padding: 0;
    
    tr{
      border-radius: 10px 10px 0 0;
    }
    th{
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      padding: 0.5rem;
      text-align: center;
      vertical-align: middle;
      background: #0a0a0a;
      span{
        color: #ffffff;
      }
    }
  }
  .v-menu{
      display: block;
  }
  .v-select--is-menu-active{
    .v-menu{
      display: block;
    }
  }
  .v-input--hide-details > .v-input__control > .v-input__slot{
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    .v-chip{
      .v-chip__content{
        color: #0a0a0a !important;
        .v-icon{
          color: #0a0a0a !important;
          opacity: 1;
        }
      }
    }
  }
}

</style>
<style lang="scss">
.row-pointer tbody tr td :hover {
  cursor: pointer;
}
</style>
