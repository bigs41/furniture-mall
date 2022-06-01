<template>
    <div class="dashboard">
        <v-row>
            <v-col md="12" lg="12" sm="12" class="pa-5">
              <h1 class="text-h4">Traditional Living Room Style</h1>
              <p class="text--primary body-2">
                Traditional design is a style that is steeped in elegance and sophistication. The look in traditional rooms is built on concepts from back in the 18th and 19th centuries. The furnishings in this style are finely crafted and eloquent finished wood tone pieces. Adornments should be sophisticated and fancy.
              </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" lg="12" sm="12">
              <iframe style="width:100%;" height="640" src="https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FNYB8ME4WJB&kpm=qkWL.75625df9c36df3db.a5467d9.1640845937898&locale=en_US" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-col>
        </v-row>
        <v-row class="ma-0 mt-n5 pa-0">
            <v-col md="12" lg="12" sm="12" class="ma-0 pa-0">
              <v-bottom-navigation background-color="black" dark v-model="navigation">
                <v-btn value="products" @click="$router.push(`/home/products`)">
                  <span class="subtitle-1">Product</span>
                  <img src="/img/menu/icon-manage-user.svg" class="w-custom-icon-menu menu-active" alt="" />
                </v-btn>

                <v-btn value="bundle" @click="$router.push(`/home/bundle`)">
                  <span class="subtitle-1">Collection</span>

                  <img src="/img/menu/icon-manage-user.svg" class="w-custom-icon-menu menu-active" alt="" />
                </v-btn>

                <v-btn value="rooms" @click="$router.push(`/home/rooms`)">
                  <span class="subtitle-1">Design Room</span>
                  <img src="/img/menu/icon-manage-user.svg" class="w-custom-icon-menu menu-active" alt="" />
                </v-btn>

                <v-btn value="projects" @click="$router.push(`/home/projects`)">
                  <span class="subtitle-1">Project</span>
                  <img src="/img/menu/icon-manage-user.svg" class="w-custom-icon-menu menu-active" alt="" />
                </v-btn>
              </v-bottom-navigation>
            </v-col>
        </v-row>
        <div class="pa-5">
          
          <v-row >
              <v-col md="3" lg="2" xl="2" sm="12">
                <v-row>
                  <v-col>
                    <h2>{{tabLabel}}</h2>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      outlined
                      dense
                      placeholder="ค้นหา" 
                      v-model="tmpsearch"
                      @keyup.enter="search=tmpsearch"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                      <v-checkbox
                        v-for="$c in category"
                        :key="$c.id"
                        v-model="selectedCategory"
                        :label="$c.name"
                        :value="$c.id"
                      ></v-checkbox>
                  </v-col>
                </v-row>
              </v-col>
              <v-col md="9" lg="10" xl="10" sm="12" >
                <v-row>
                  <v-col xl="3" lg="4" md="6" sm="6" v-for="cate in listData" :key="cate">


                    <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374"
                      >
                        <template slot="progress">
                          <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                          ></v-progress-linear>
                        </template>

                        <v-avatar
                            tile
                            height="250"
                            width="100%"
                            color="blue"
                            
                          >
                          <img
                            v-if="!empty(cate.image)"
                            :src="cate.image"
                          />
                        </v-avatar>
                        <!-- <v-img
                          height="250"
                          :src="cate.image"
                        ></v-img> -->

                        <v-card-title>
                          <h5 class="h3"  v-snip="{ lines: 1 }">{{cate.name}}</h5>
                        </v-card-title>

                        <v-card-text>
                          <p class="text--primary body-2" v-snip="{ lines: 2 }" style="min-height:40px">{{cate.description}}</p>
                        </v-card-text>

                        <v-card-title>{{cate.stock||0}} {{cate.unit}}</v-card-title>
                        <div class="v-buttom">
                        </div>
                        <v-btn
                          class="ma-2"
                          fab
                          color="white"
                          @click="addCartq(cate)"
                        >
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="12" lg="12" sm="12">
                          <v-pagination
                            v-model="numPage"
                            :total-visible="7"
                            :length="pageCount"
                        ></v-pagination>
                  </v-col>
                </v-row>
              </v-col>
          </v-row>
        </div>
    </div>
</template>
<script>
import axios from '~/utils/axios'
// import $socket from '~/utils/socket'
import _ from 'lodash'
import collect from 'collect.js'
import { GChart } from "vue-google-charts";
// import Dexie from "dexie";
export default {
    component:[GChart],
    layout: 'empty',
    data() {
        return {
            navigation: 'products',
            tabLabel: null,
            tmpsearch: null,
            search: null,
            total: 0,
            pageCount: 0,
            numPage: 1,
            page: 1,
            cart:[],
            listData:[],
            category:[],
            selectedCategory:[],
        }
    },
    methods: {
        async order() {
            const $r = await axios.get(`/api/order/report`);
            const $data = _.get($r, 'data', []);
            this.barChartData = _.concat([['product','quantity']], collect($data).map(r=>[r.name,r.quantity]).all());
        },
        async countUser(){
            const $r = await axios.get(`/api/users/count`);
            this.numUser = _.get($r, 'data.data', _.get($r, 'data', 0));
        },
        async countProduct(){
            const $r = await axios.get(`/api/products/count`);
            this.numProduct = _.get($r, 'data.data', _.get($r, 'data', 0));
        },
        async countProject(){
            const $r = await axios.get(`/api/projects/count`);
            this.numProject = _.get($r, 'data.data', _.get($r, 'data', 0));
        },
        onChartReady (chart, google) {
          this.chartsLib = google
        },
        update(){
          this.$db.tests.toArray().then( tests => {
            console.log(tests)
          })
        },
        async msn(){
          //socket emit
          // $socket.emit('add-cart',{
          //   product_id:1,
          //   quantity:1
          // },)
          // $socket.on('add-cart',(data)=>{
          //   console.log(data)
          // })
        },
        async addCartq(item){
            this.$store.commit('notify', item);

            try {
              const db = await this.$db.orders
              .filter((r)=>{
                return r._id == _.get(item,'_id','') && r.type == this.tabLabel
              })
              .toArray()

              // delete // await this.$db.orders.delete(_.get(db,'0.id',0))
                if(!this.empty(db)){
                  await this.$db.orders.update(_.get(db,'0.id',0),{
                    quantity:_.get(db,'0.quantity',0)+1,
                    updated_at:new Date()
                  })
                }else{
                  const data = {
                      _id:_.get(item,'_id',''),
                      type:this.tabLabel,
                      code:_.get(item,'code',''),
                      json:JSON.stringify(item),
                      quantity:1,
                      created_at:new Date(),
                      updated_at:new Date()
                    }
                    await this.$db.orders.add(data);
                }

            } catch (error) {
              console.log(error);
            }
            
        },
        async syncCategoty(){
          const r = await axios.get(`/api/category`);
          this.category = _.get(r, "data.docs", _.get(r, "data.data.docs", []));
        },
        async syncData(){
          try {
            const tab  = _.get(this.$route,'params.tab',null);
            const categoryid = !this.empty(this.selectedCategory)?
            {
              $in:this.selectedCategory
            }
            :{};
            let queryParams = [
                `/api/${tab}`,
                {
                    params:
                    _.merge(
                      {
                        page: this.page,
                        limit: 10,
                        search: this.search,
                        searchFields: ['name'],
                      },
                      {
                        where:!this.empty(categoryid)?{categoryid}:{}
                      }
                    )
                }
              ];


            await axios.get(...queryParams).then(r=>{
              this.listData = _.get(r, "data.docs", _.get(r, "data.data.docs", []));
              this.listData = _.map(this.listData,(r)=>{
                r.code = _.get(r, "code", _.get(r, "sku", ""));
                r.image = _.get(r, "image", _.get(r, "imagepath", _.get(r, "images.0", null)));
                if(!this.empty(r.image)){
                  r.image = /^http/.test(r.image)?r.image:`http://${r.image}`;
                }
                return r;
              })
              this.total = _.get(r, "data.totalDocs", _.get(r, "data.data.totalDocs", 0));
              this.pageCount = _.get(r, "data.totalPages", _.get(r, "data.data.totalPages", 0));
              this.perPage = _.get(r, "data.limit", _.get(r, "data.data.limit", 0));
              this.perPage =  this.total<=this.perPage?this.total:this.perPage;
            });
          } catch (error) {
            console.log(error);
          }
        }
    },
    watch:{
      numPage(val){
        this.page = val;
      },
      async search(val){
        this.page = 1;
        await this.syncData();
      },
      async page(val){
        await this.syncData();
      },
      async selectedCategory(val){
        await this.syncData();
      }
    },  
    async mounted() {
        if(this.empty(this.$route.params.tab)){
          this.$route.params.tab = 'products';
        }
        this.tabLabel = this.$route.params.tab;
        this.navigation = this.$route.params.tab;
        if (this.tabLabel==='products') {
          await this.syncCategoty();
        }else{
          this.category = [];
        }
        await this.syncData();
        // await this.order()
        // await this.countUser();
        // await this.countProduct();
        // await this.countProject();
        // _.get(this.$store, 'state.permission', [])
    },
    
};

</script>
<style lang="scss" scoped>
.dashboard {
  padding: 0;
  margin: 0;
  overflow: hidden;
  ::v-deep{
    .v-card__title{
      // background-color: #fafafa;
    }
    .v-card{
      .v-buttom{
        right: -5px;
        bottom: -5px;
        position: absolute;
        z-index: 1;
        height: 100px;
        width: 100px;
            background-color: rgb(0 150 136 / 18%);
        clip-path: circle(50% at 25% 25%);
        transform: rotate(180deg);
        box-shadow: inset 0px 20px 20px 20px #f1f5f7;
      }
      .v-btn{
        position: absolute;
        z-index: 99;
        right: -17px;
        bottom: -17px;
      }
    }
    .v-input.v-input--checkbox{
      margin-top: 0;
      .v-messages{
        display: none;
      }
    }
    .v-bottom-navigation{
      height: 100px !important;
      &.theme--dark{
        img{
          filter: brightness(0) invert(1);
        }
      }
      .w-custom-icon-menu {
          width: 50px;
          height: 50px;
      }
      .v-btn{
        margin: 0 50px 0 50px; 
      }
      .v-btn .v-btn__content > *:not(.v-icon) {
          line-height: 2.2;
      }
    }
  }
}

</style>
