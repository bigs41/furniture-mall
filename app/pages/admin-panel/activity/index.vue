<template>
  <div>
    <HeadtitleBtn title="ข้อมูลกิจกรรม" btntitle="+ เพิ่มกิจกรรมใหม่" link="/activity/add" />
    จำนวน {{_.get(data,'totalDocs',0)}} รายการ
    <v-head-search :form="form"  v-model="searchOOP"></v-head-search>

    <v-api-table-v2 
        :headers="headers" 
        url="/api/news" 
        item-key="_id" 
        :search="searchOOP.search"
        :searchFields="['name.th','name.en']"
        ref="apiTable"
        hide-default-footer
        pagination-header
        :return-data="($t)=>{
          data=$t
          total=$t.total
        }"
    >
      <template
          v-slot:[`item.sort`]="{ item }"
      >
          <div class="pt-6">
            <select class="form-select" aria-label="Default select example" @change="updateSort(item)" v-model="item.sort">
              <option v-for="$li in listItems" :key="$li" :value="$li">{{$li}}</option>
            </select>
              
          </div>
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
      headers:[
                {
                text: 'Name',
                value: 'name.th',
                width: '70%',
                },
                {
                text: 'sort',
                value: 'sort',
                width: '15%',
                },
                {
                text: 'active',
                value: '_id',
                width: '15%',
                sortable: false,
                },
            ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            category: 'Ice cream',
          },
          {
            name: 'Ice cream sandwich',
            category: 'Ice cream',
          },
          {
            name: 'Eclair',
            category: 'Cookie',
          },
          {
            name: 'Cupcake',
            category: 'Pastry',
          },
          {
            name: 'Gingerbread',
            category: 'Cookie',
          },
          {
            name: 'Jelly bean',
            category: 'Candy',
          },
          {
            name: 'Lollipop',
            category: 'Candy',
          },
          {
            name: 'Honeycomb',
            category: 'Toffee',
          },
          {
            name: 'Donut',
            category: 'Pastry',
          },
          {
            name: 'KitKat',
            category: 'Candy',
          },
        ],
    }
  },
  created(){
    this.$store.commit('breadcrumb/setList', this.list)
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
