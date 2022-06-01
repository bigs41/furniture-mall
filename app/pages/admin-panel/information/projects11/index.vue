<template>
  <div>
    <Headtitle title="Project"  />
    จำนวน {{_.get(data,'totalDocs',0)}} รายการ
    <v-head-search :form="form"  v-model="searchOOP"></v-head-search>

    <v-api-table-v2 
        :pagination-header-btn="[
          {
            title:'เพิ่ม Project',
            link:`${$strLast($route.path,'/')}create`
          }
        ]"
        :headers="headers" 
        url="/api/projects" 
        item-key="_id" 
        :search="searchOOP.search"
        :searchFields="['name']"
        ref="apiTable"
        hide-default-footer
        pagination-header
        :return-data="($t)=>{
          data=$t
          total=$t.total
        }"
    >
      <template
            v-slot:[`item.createdAt`]="{ item }"
          >{{ $moment(item.createdAt).format('LLL') }}
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
          text: "search",
          value: "search",
          type: "text",
        }
      ],
      list : [
        {
            // url:"/manage",
            text:"จัดการกิจกรรม"
        },
        {
            // url:"/dashboard",
            text:"ข้อมูลกิจกรรม"
        },
      ],
      headers: [
        {
          text: "Name",
          value: "name"
        },
        {
          text: "createdAt",
          value: "createdAt",
          width: '25%',
        },
        {
          text: 'active',
          value: '_id',
          width: '15%',
          sortable: false,
        },
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
