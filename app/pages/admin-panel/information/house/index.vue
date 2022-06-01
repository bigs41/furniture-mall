<template>
  <div  class="c1-main-list-data">
    <Headtitle title="Project"  />
    จำนวน {{_.get(data,'totalDocs',0)}} รายการ
    <v-head-search :form="form"  v-model="search"></v-head-search>

    <v-api-table-v2 
        :pagination-header-btn="[
          {
            title:'เพิ่ม โครงการบ้าน',
            link: `${$strLast($route.path,'/')}create`
          }
        ]"
        :headers="headers" 
        url="/api/houses" 
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
      search:{
        status:null
      },
      listItems:[],
      form: [
        {
          text: "รหัสโครงการบ้าน",
          value: "code",
          type: "text",
        },
        {
          text: "ซื่อโครงการบ้าน",
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
          text: "รหัสโครงการบ้าน",
          value: "code",
          width: "10%"
        },
        {
          text: "ชื่อโครงการบ้าน",
          value: "name",
          width: "10%"
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
