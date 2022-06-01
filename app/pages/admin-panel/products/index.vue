<template>
    <v-body>
        <div>
           <v-card outlined>
                <v-card-title>
                    <h1>Product</h1>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="tempsearch"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        solo
                        dense
                        hide-details
                        class="mr-5"
                        @click:append="search = tempsearch"
                        @enter="search = tempsearch"
                    ></v-text-field>
                    <v-btn dark color="teal" :loading="isLoading" v-if="isCreate" @click="syncData">sync</v-btn>

                </v-card-title>
                <v-api-table 
                    ref="apiTable"
                    :headers="headers" 
                    url="/api/products" 
                    item-key="_id" 
                    :search="search"
                    :searchFields="['name','sku']" 
                    v-model="selected" 
                    pagination-number
                    @click:row="
                        (item) => {
                            $router.push(`${$route.path}/${item._id}`);
                        }
                    "
                    hide-default-footer
                >
                </v-api-table>
            </v-card>
        </div>
    </v-body>
</template>
<script>
import axios from '~/utils/axios'
export default {
    data() {
        return {
            isLoading: false,
            selected:[],
            tempsearch: '',
            search: '',
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
            isCreate: false,
            isEdit: false,
            isDelete: false,
        };
    },
    methods:{
        async syncData(){
            try {
                this.isLoading = true;
                this.$refs.apiTable.loading = true;
                const response = await axios.get('/api/products/syncZortout');
                await this.$refs.apiTable.getData()
                this.$refs.apiTable.loading = false;
                this.isLoading = false;
            } catch (error) {
                console.log(error);
            }
        },
    },
    watch:{

    },
    async mounted(){
        this.$checkPermission("product","create").then(r => {
            this.isCreate = r;
        });
        this.$checkPermission("product","edit").then(r => {
            this.isEdit = r;
        });
        this.$checkPermission("product","remove").then(r => {
            this.isDelete = r;
        });
    }
};
</script>
