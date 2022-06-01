<template>
  <div class="c1-main-list-data">
    <Headtitle title="คอลเล็กชั่น"  />
    จำนวน {{_.get(data,'totalDocs',0)}} รายการ
    <v-head-search :form="form"  v-model="searchOOP"></v-head-search>

    <v-api-table-v2 

        :headers="headers" 
        url="/api/bundle" 
        item-key="_id" 
        :search="searchOOP"
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
            v-slot:[`item.createdAt`]="{ item }"
          >{{ $moment(item.createdAt).format('LLL') }}
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
      searchOOP:{
        search:null
      },
      listItems:[],
      form: [
        {
          text: "รหัสดีคอลเล็กชั่น",
          value: "sku",
          type: "text",
        },
        {
          text: "ซื่อดีคอลเล็กชั่น",
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
          width: "10%"
        },
        {
          text: "ราคาซื้อ",
          value: "sellprice",
          width: '10%',
          sortable: false,
        },
        {
          text: "ราคาขาย",
          value: "purchaseprice",
          width: '10%',
          sortable: false,
        },
        {
          text: "คงเหลือ",
          value: "stock",
          width: '10%',
          sortable: false,
        },
        {
          text: "พร้อมขาย",
          value: "availablestock",
          width: '10%',
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
            const { data } = await axios.get('/api/bundle/count');
            try {
                return parseInt(data);
            } catch (error) {
                return data;
            }
        },
        async deleteItem(item) {
            try {
                const { data } = await axios.delete(`/api/bundle/${item._id}`);
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
            // this.listItems = _.range(1,await this.getTatal()+1)
        } catch (error) {
            
        }
   }
}
</script>
