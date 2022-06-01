<template>
    <v-body>
        <div>
           <v-card outlined>
                <v-card-title>
                    <h1>Product</h1>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <div>
                    <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    hide-default-footer
                    class="elevation-1"
                    ></v-data-table>
                    <div class="pt-2 d-flex flex-row">
                        <v-pagination
                            v-model="page"
                            :total-visible="7"
                            :length="pageCount"
                        ></v-pagination>
                    </div>
                    <div class="text-center pt-2">
                    <v-select
                        :items="listsPerPage"
                        label="Items per page"
                        v-model="itemsPerPage"
                        outlined
                        ></v-select>
                    </div>
                </div>
            </v-card>
        </div>
    </v-body>
</template>
<script>
import axios from '~/utils/axios'
export default {
    data() {
        return {
            search: '',
            page: 1,
            pageCount: 0,
            itemsPerPage: 20,
            listsPerPage: [5, 10, 15, 20],
            headers:[
                {
                text: 'Name',
                value: 'name',
                filterable: true,
                },
                {
                text: 'Sku',
                value: 'sku',
                filterable: true,
                },
                {
                text: 'Stock',
                value: 'stock',
                filterable: true,
                },
            ],
            desserts: []
        };
    },
    methods:{
      async syncData(row){
        const $r = await axios.get(`/api/products`,{
                params:{
                    limit:this.itemsPerPage,
                    page:this.page,
                    search:this.search
                }
            });
        this.desserts = _.get($r.data, 'docs', []);
        this.pageCount = _.get($r.data, 'totalPages', 0);
      }
  },
  watch:{
    page(){
        this.syncData()
    }
  },
  async mounted(){
    await this.syncData()
  }
};
</script>
