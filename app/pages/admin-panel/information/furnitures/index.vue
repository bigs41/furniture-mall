<template>
  <div class="c1-main-list-data">
    <Headtitle title="เฟอร์นิเจอร์"  />
    จำนวน {{_.get(data,'totalDocs',0)}} รายการ
    <v-head-search :form="form"  v-model="search"></v-head-search>

    <v-api-table-v2 

        :headers="headers" 
        url="/api/products" 
        item-key="_id" 
        :search="search"
        :searchFields="['name']"
        ref="apiTable"
        hide-default-footer
        pagination-header
        :return-data="($t)=>{
          data=$t
          total=$t.total
        }"
        @click:row="
            (item) => {
                $router.push(`${$strLast($route.path,'/')}${item._id}`);
            }"
    >
      <template
            v-slot:[`item.name`]="{ item }"
          >
          <v-row>
            <v-col md="2" xl="2" lg="2" sm="2"  cols="12" >
              <v-avatar
                tile
                color="blue"
                
              >
                <img
                  v-if="!empty(item.imagepath)"
                  :src="item.imagepath"
                  alt="John"
                >
              </v-avatar>
            </v-col>
            <v-col  md="10" xl="10" lg="10" sm="10" cols="12" class="v-treeview-node__label">
                {{ item.name }}
            </v-col>
          </v-row>
      </template>
       <template
            v-slot:[`item.category`]="{ item }"
          ><v-col cols="auto" class="v-treeview-node__label">
                {{ item.category }}
            </v-col>
      </template>
      <template
            v-slot:[`item.status`]="{ item }"
          >
          <button type="button" class="btn btn-sm btn-success" :style="{
            opacity:!empty(item.status)?'0.5':'1'
          }" disabled v-html="!empty(item.status)?'&nbsp;&nbsp;Active&nbsp;&nbsp;&nbsp;':'Inactive'"></button>
      </template>
      <template
          v-slot:[`item._id`]="{ item }"
      >
          <div>
              <v-btn-toggle dense>
                  <v-btn dark color="teal" @click="$router.push(`${$strLast($route.path,'/')}${item._id}`)">edit</v-btn>
                  <v-btn dark color="red" @click="deleteItem(item)">delete</v-btn>
              </v-btn-toggle>
          </div>
      </template>
    </v-api-table-v2>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from '~/utils/axios'
export default {
  layout: 'manage-activity',
  data(){
    return{
      data:null,
      page:1,
      search:{
        status:null
      },
      listItems:[],
      form: [
        {
          text: "รหัสสินค้า",
          value: "sku",
          type: "text",
        },
        {
          text: "ซื่อสินค้า",
          value: "name",
          type: "text",
        },
        {
          text: "สถานะ",
          value: "status",
          type: "select",
          options:[
            {
              text:"Active",
              value:true
            },{
              text:"Inactive",
              value:false
            }
          ]
        }
      ],
      headers: [
        {
          text: "รหัสสินค้า",
          value: "sku",
          width: "8%",
          sortable: false,
        },
        {
          text: "ชื่อสินค้า",
          value: "name",
          width: "15%"
        },
        {
          text: "หมวดหมู่",
          value: "category",
          width: "15%",
          sortable: false,
        },
        {
          text: "ราคาซื้อ",
          value: "sellprice",
          width: '8%',
          sortable: false,
        },
        {
          text: "ราคาขาย",
          value: "purchaseprice",
          width: '8%',
          sortable: false,
        },
        {
          text: "คงเหลือ",
          value: "stock",
          width: '8%',
          sortable: false,
        },
        {
          text: "พร้อมขาย",
          value: "availablestock",
          width: '8%',
          sortable: false,
        },
        {
          text: "สถานะ",
          value: "status",
          width: '5%',
        },
        // {
        //   text: 'active',
        //   value: '_id',
        //   width: '15%',
        //   sortable: false,
        // },
      ]
    }
  },
  created(){
    // this.$store.commit('breadcrumb/setList', this.list)
  },
  methods:{
    async getTatal() {
            const { data } = await axios.get('/api/news/count');
            try {
                return parseInt(data);
            } catch (error) {
                return data;
            }
        },
        async updateSort(item) {
            try {
                const { data } = await axios.patch(`/api/news/${item._id}/${item.sort}`);
                await this.$refs.apiTable.getData(true);
                return data;
            } catch (error) {
                return error;
            }
        },
        async deleteItem(item) {
            try {
                const { data } = await axios.delete(`/api/news/${item._id}`);
                await this.$refs.apiTable.getData(true);
                try {
                    this.listItems = _.range(1,await this.getTatal()+1)
                } catch (error) {
                    
                }
                return data;
            } catch (error) {
                return error;
            }
        },
  },
  watch:{
    
  },
   async mounted(){
        try {
            this.listItems = _.range(1,await this.getTatal()+1)
        } catch (error) {
            
        }
   }
}
</script>
<style lang="scss" scoped>
.c1-main-list-data ::v-deep{
  .v-treeview-node__label{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

</style>