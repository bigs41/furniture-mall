<template>
    <v-body>
        <div>
           <v-card outlined>
                <v-card-title>
                    <h1>News</h1>
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
                    <v-btn dark color="teal" v-if="isCreate" @click="$router.push(`${$strLast($route.path,'/')}create`)">add</v-btn>
                </v-card-title>
                <v-api-table 
                    :headers="headers" 
                    url="/api/news" 
                    item-key="_id" 
                    :search="search"
                    :searchFields="['name.th','name.en']" 
                    v-model="selected" 
                    pagination-number
                    ref="apiTable"
                    hide-default-footer
                >
                <template
                    v-slot:[`item.sort`]="{ item }"
                >
                    <div class="pt-6">
                        <v-select solo dense :disabled="!isEdit" :items="listItems" v-model="item.sort" @change="updateSort(item)"></v-select>
                    </div>
                </template>
                <template
                    v-slot:[`item._id`]="{ item }"
                >
                    <div>
                        <v-btn-toggle dense>
                            <v-btn dark color="teal" v-if="isEdit" @click="$router.push(`${$strLast($route.path,'/')}${item._id}`)">edit</v-btn>
                            <v-btn dark color="red" v-if="isDelete" @click="deleteItem(item)">delete</v-btn>
                        </v-btn-toggle>
                        
                    </div>
                </template>
                </v-api-table>
            </v-card>
        </div>
    </v-body>
</template>
<script>
import axios from '~/utils/axios'
import _ from 'lodash'
export default {
    data() {
        return {
            selected:[],
            tempsearch: '',
            search: '',
            listItems:[],
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
            isCreate: false,
            isEdit: false,
            isDelete: false,
        };
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
        console.log('store',this.$store.state);
        try {
            this.listItems = _.range(1,await this.getTatal()+1)
        } catch (error) {
            
        }
        this.$checkPermission("news","create").then(r => {
            this.isCreate = r;
        });
        this.$checkPermission("news","edit").then(r => {
            this.isEdit = r;
        });
        this.$checkPermission("news","remove").then(r => {
            this.isDelete = r;
        });
    }
};
</script>
