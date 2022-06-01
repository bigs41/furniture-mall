<template>
  <div>
    <Headtitle :title="`${prefix}เฟอร์นิเจอร์`" />
    <v-card
        class="mx-auto"
        outlined
    >
    <v-card-text>
        <v-row>
            <v-col md=8 xd=8 cols=12>
                <v-row>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("รหัสสินค้า") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="รหัสสินค้า" 
                                v-model="field.sku"
                                disabled
                        />
                    </v-col>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ชื่อสินค้า") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ชื่อสินค้า" 
                                v-model="field.name"
                                disabled
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("หมวดหมู่") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="หมวดหมู่" 
                                v-model="field.category"
                                disabled
                        />
                    </v-col>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("หน่วย") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="หน่วย" 
                                v-model="field.unittext"
                                disabled
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md=12 xd=12 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("รายละเอียดสินค้า") }}</v-list-item-subtitle>
                        <v-textarea
                        outlined
                        dense
                        placeholder="รายละเอียดสินค้า"
                        v-model="field.description"
                        disabled
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md=12 xd=12 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("รหัสบาร์โค้ดหรือคิวอาร์โค้ด") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="รหัสบาร์โค้ดหรือคิวอาร์โค้ด" 
                                v-model="field.barcode"
                                disabled
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ราคาซื้อ") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ราคาซื้อ" 
                                v-model="field.purchaseprice"
                                disabled
                        />
                    </v-col>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ราคาขาย") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ราคาขาย" 
                                v-model="field.sellprice"
                                disabled
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md=6 xd=6 cols=12>
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
                    <v-col md=6 xd=6 cols=12>
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
                <v-row>
                    <v-col md=12 xd=12 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("tag") }}</v-list-item-subtitle>
                        <v-textarea
                        outlined
                        dense
                        placeholder="tag"
                        v-model="tags"
                        disabled
                        ></v-textarea>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md=4 xd=4 cols=12>
                <v-row>
                    <v-col md=12 xd=12 cols=12>
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
                    <v-col md=12 xd=12 cols=12>
                        
                        <v-img
                        :src="!empty(field.imagepath)?cPicture:'/img/default_image.png'"
                        @error="onImgError"

                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md=12 xd=12 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("Image Path") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="Image Path" 
                                v-model="field.imagepath"
                                disabled
                        />
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

import axios from '~/utils/axios'
import _ from 'lodash'
export default {
  layout: 'manage-activity',
  data(){
    return{
        failed_image: false,
        field:{
            sku:null,
            name:null,
            category:null,
            unittext:null,
            description:null,
        },
        tags:'',
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
        prefix: 'เพิ่ม',
    }
  },
    methods:{
        async syncData(){
            axios.get('/api/products/'+this.$route.params.id).then(
                response => {
                    this.field = _.get(response,'data.data',_.get(response,'data',{}))
                    this.tags = this.field.tags.join(',')
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
            await axios.post('/api/products/'+this.$route.params.id,{
                status:_.get(this.field,'status',false),
            }).then(
                response => {
                    this.back()
                }
            )
        },

        onImgError: function(event) {
            this.failed_image = true;
        }
    },
    computed:{
        cPicture: function() {
            if(!this.empty(this.failed_image)){
                return '/img/default_image.png'
            }else{
                return _.get(this.field,'imagepath','')
            }
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