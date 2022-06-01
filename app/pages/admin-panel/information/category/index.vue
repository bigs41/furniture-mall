<template>
  <div class="c1-main-list-data">
    <Headtitle title="หมวดหมู่"  />
    จำนวน {{_.get(data,'totalDocs',0)}} รายการ
    <v-head-search :form="form"  v-model="searchOOP"></v-head-search>

    <v-api-table-v2 

        :headers="headers" 
        url="/api/category" 
        item-key="_id" 
        :search="searchData"
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
        id:null,
        name:null,
      },
      searchData:null,
      listItems:[],
      form: [
        {
          text: "รหัสหมวดหมู่",
          value: "id",
          type: "text",
        },
        {
          text: "ชื่อหมวดหมู่",
          value: "name",
          type: "text",
        },
        
      ],
      headers: [
        {
          text: "รหัสหมวดหมู่",
          value: "id"
        },
        {
          text: "Name",
          value: "name"
        },
        // {
        //   text: "createdAt",
        //   value: "createdAt",
        //   width: '25%',
        // },
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
    searchOOP: {
      handler(val){
        this.searchData = JSON.stringify(val)
      },
      deep: true
    }
  },
   async mounted(){
        try {
            this.listItems = _.range(1,await this.getTatal()+1)
        } catch (error) {
            
        }
   }
}
</script>
