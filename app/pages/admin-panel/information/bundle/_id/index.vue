<template>
  <div>
    <Headtitle :title="`${prefix}เฟอร์นิเจอร์`" />
    <v-card
        class="mx-auto"
        outlined
    >
    <v-card-text>
        <v-row>
            <v-col md=12 xd=12 cols=12>
                <v-row>
                    <v-col md=3 xd=3 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("รหัสคอลเล็กชั่น") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="รหัสคอลเล็กชั่น" 
                                v-model="field.code"
                                disabled
                        />
                    </v-col>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ชื่อคอลเล็กชั่น") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ชื่อคอลเล็กชั่น" 
                                v-model="field.name"
                                disabled
                        />
                    </v-col>
                    <v-col md=3 xd=3 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("สถานะ") }}</v-list-item-subtitle>
                        <v-select
                        :items="itemsStatus"
                        outlined
                        dense
                        item-text="text"
                        item-value="value"
                        v-model="field.status"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md=3 xd=3 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ราคาขายสินค้ารวม") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ราคาขายสินค้ารวม" 
                                v-model="field.sellpricetotal"
                                disabled
                        />
                    </v-col>
                    <v-col md=3 xd=3 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ราคาขาย") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ราคาขาย" 
                                v-model="field.sellprice"
                                
                        />
                    </v-col>
                    <v-col md=3 xd=3 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("คงเหลือ") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="คงเหลือ" 
                                v-model="field.stock"
                                disabled
                        />
                    </v-col>
                    <v-col md=3 xd=3 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("พร้อมขาย") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="พร้อมขาย" 
                                v-model="field.availablestock"
                                disabled
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col md=12 xd=12 cols=12>
                <v-row>
                    <v-col>
                        <v-api-table-v2
                            pagination-header
                            :headers="headers" 
                            :items="field.products"
                            hide-default-footer
                        >
                            <template
                                    v-slot:[`item.quantity`]="{ item }"
                                >
                                <input type="text" class="form-control" v-model="item.quantity" disabled>
                            </template>
                        </v-api-table-v2>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                color="#4d6785"
                class="mr-4 while--text"
                @click="save()"
                >{{ $t("บันทึก") }}</v-btn>
                <v-btn
                color="#d1d3d6"
                class="mr-4"
                @click="back()"
                >{{ $t("ย้อนกลับ") }}</v-btn>
            </v-col>
        </v-row>
    </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from '~/utils/axios';
import _ from "lodash";
import collect from 'collect.js';
export default {
  layout: 'manage-activity',
  data(){
    return{
        field:{
            id:null,
            name:null,
            list:[]
        },
        itemsStatus:[
            {
                value:false,
                text:"Inactive"
            },
            {
                value:true,
                text:"active"
            }
        ],
        headers: [
            {
                text: "รหัสสินค้า",
                value: "sku",
                sortable: false,
            },
            {
                text: "ชื่อสินค้า",
                value: "name",
                sortable: false,
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
                text: "จำนวน",
                value: "quantity",
                width: '10%',
                sortable: false,
            },
        ],
        prefix: 'เพิ่ม',
    }
  },
    methods:{
        async syncData(){
            axios.get('/api/bundle/'+this.$route.params.id).then(
                response => {
                    this.field = _.get(response,'data.data',_.get(response,'data',{}))
                    if(!this.empty(this.field.products)){
                        this.field.products = collect(this.field.products).map(x=>{
                            x.quantity = collect(this.field.list).where('id',x.product_id).first().quantity
                            return x
                        }).all()
                    }
                }
            )
        },
        async back() {
            let path = _.filter(this.$route.path.split("/"));
            path = _.filter(path, (r, k) => {
                return k != path.length - 1;
            });
            path = _.join(path, "/");
            this.$router.push(`/${path}`);
        },
        async save(){
            await axios.post('/api/bundle/'+this.$route.params.id,{
                status:this.field.status,
            }).then(
                response => {
                    this.back()
                }
            )
        },

    },
    created(){
        if(!['create','add','0'].includes(this.$route.params.id)){
            this.prefix = 'แก้ไข'
        }
        // this.$store.commit('breadcrumb/setList', this.list)
    },
    mounted(){
        if(!['create','add','0'].includes(this.$route.params.id)){
        this.syncData()
        }
    },
}
</script>