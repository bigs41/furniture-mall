<template>
  <div class="rooms-form">
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
                        >{{ $t("รหัสหมวดหมู่") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="รหัสหมวดหมู่" 
                                v-model="field.code"
                                
                        />
                    </v-col>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ชื่อหมวดหมู่") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ชื่อหมวดหมู่" 
                                v-model="field.name"
                                
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
                                
                        />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-tabs
                v-model="tab"
                color="grey darken-3"
                >
                    <v-tabs-slider color="grey darken-3"></v-tabs-slider>
                    <v-tab
                        v-for="item in tabItems"
                        :key="item.tab"
                    >
                        {{ item.tab }}
                    </v-tab>
                </v-tabs>
                <v-card outlined>
                    <v-card-text v-if="selectTab=='product'">
                        <v-row>
                            <v-col md=12 xd=12 cols=12>
                                <v-model 
                                    url="/api/products"
                                    label="สินค้า"
                                    :btn="true" 
                                    :headers="[
                                        {
                                            value: 'sku',
                                        },{
                                            value: 'name',
                                        }
                                    ]"
                                    :search-field="['sku','name']"
                                    :items="furnitures"
                                    v-model="furnitures"
                                >
                                    <template  v-slot:item.name="{ item }">
                                        <v-row>
                                            <v-col cols="auto">
                                            <v-avatar
                                                tile
                                                color="blue"
                                            >
                                                <img
                                                    v-if="!empty(item.imagepath)"
                                                    :src="item.imagepath"
                                                    alt="John"
                                                >
                                            </v-avatar>
                                            </v-col>
                                            <v-col cols="auto" class="v-treeview-node__label">
                                                {{item.name}}
                                            </v-col>
                                        </v-row>
                                    </template>
                                </v-model>
                                <v-divider></v-divider>
                                <v-api-table-v2
                                    pagination-header
                                    :headers="headersFurnitures" 
                                    :items="furnitures"
                                    hide-default-footer
                                >
                                    <template
                                        v-slot:[`item._id`]="{ item }"
                                    >
                                        <v-btn
                                        icon
                                        color="green"
                                        @click="remove(item,'furnitures')"
                                        >
                                        <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </template>
                                </v-api-table-v2>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text v-if="selectTab=='collection'">
                        <v-row>
                            <v-col md=12 xd=12 cols=12>
                                <v-model 
                                    url="/api/bundle"
                                    label="คอลเล็กชั่น"
                                    :btn="true" 
                                    :headers="[
                                        {
                                            value: 'sku',
                                        },{
                                            value: 'name',
                                        }
                                    ]"
                                    :search-field="['sku','name']"
                                    :items="bundle"
                                    v-model="bundle"
                                >
                                    <template  v-slot:item.name="{ item }">
                                        <v-row>
                                            <v-col cols="auto">
                                            <v-avatar
                                                tile
                                                color="blue"
                                            >
                                            </v-avatar>
                                            </v-col>
                                            <v-col cols="auto" class="v-treeview-node__label">
                                                {{item.name}}
                                            </v-col>
                                        </v-row>
                                    </template>
                                </v-model>
                                <v-divider></v-divider>
                                <v-api-table-v2
                                    pagination-header
                                    :headers="headersBundle" 
                                    :items="bundle"
                                    hide-default-footer
                                >
                                    <template
                                        v-slot:[`item._id`]="{ item }"
                                    >
                                        <v-btn
                                        icon
                                        color="green"
                                        @click="remove(item,'bundle')"
                                        >
                                        <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </template>
                                </v-api-table-v2>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text v-if="selectTab=='imagePath'">
                        <v-row>
                            <v-col md=12 xd=12 cols=12>
                                <!-- <UploadImages :max="1" /> -->
                                <VApiImageInput
                                    :label="$t('ภาพหน้าปกสื่อวิดีโอ')"
                                    :messages="
                                    $t(
                                        'รองรับไฟล์นามสกุล jpg ขนาดไม่เกิน 5 MB ขนาดรูปภาพที่แนะนำ 1920 x 1080 px'
                                    )
                                    "
                                    :src="coverUrl"
                                    v-model="files"
                                    ref="cover"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
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
import $axios from 'axios'
import _ from 'lodash'
import UploadImages from "vue-upload-drop-images"
export default {
  layout: 'manage-activity',
  components: {
    UploadImages,
  },
  data(){
    return{
        selected:[],
        coverUrl:null,
        files:[],
        field:{
            id:null,
            name:null,
        },
        tab: null,
        tabItems:[
            {tab:'สินค้า',code:'product'},
            {tab:'คอลเล็กชั่น',code:'collection'},
            {tab:'Image Path',code:'imagePath'},
        ],
        headersFurnitures:[
            {
                text: 'รหัสสินค้า',
                align: 'left',
                sortable: false,
                value: 'sku',
            },
            {
                text: 'ชื่อสินค้า',
                align: 'left',
                sortable: false,
                value: 'name',
            },
            {
                text: 'ราคาขาย',
                align: 'left',
                sortable: false,
                value: 'price',
            },
            {
                text: 'ราคาขายสินค้ารวม',
                align: 'left',
                sortable: false,
                value: 'price',
            },
            {
                text: 'คงเหลือ',
                align: 'left',
                sortable: false,
                value: 'price',
            },
            {
                text: 'พร้อมขาย',
                align: 'left',
                sortable: false,
                value: 'price',
            },
            {
                text: " ",
                value: "_id",
                width: '1%',
                sortable: false,
            },
        ],
        furnitures:[],
        headersBundle:[
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
                text: " ",
                value: "_id",
                width: '1%',
                sortable: false,
            },
        ],
        bundle:[],
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
            axios.get('/api/rooms/'+this.$route.params.id).then(
                response => {
                    this.field = _.get(response,'data.data',_.get(response,'data',{}))
                    this.furnitures = this.field.products
                    this.bundle = this.field.bundles
                    if(!this.empty(_.get(this.field,'images.0',null))){
                        try {
                            this.coverUrl = `http://${_.get(this.field,'images.0',null)}`
                            this.files = [{}]
                            // $axios.get('http://'+_.get(this.field,'images.0',null),{responseType:'arraybuffer'}).then(
                            //     response => {
                            //         const images = _.get(this.field,'images.0',null)
                            //         const type = _.get(response,'headers.content-type',null)
                            //         let filesName = images.substring(images.lastIndexOf('/'), images.length)||'image.jpg';
                            //         filesName = filesName.replace(/^\//g, '');
                            //         this.files = new File([response.data],filesName,{type})
                            //     }
                            // )
                        } catch (error) {
                            
                        }
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
        remove(item,method){
            try {
                this[method] = _.filter(this[method],(obj)=>{
                    return obj._id!=item._id
                })
            } catch (error) {
                
            }
        },
        async save(){
            
            


            this.field.products = this.furnitures;
            this.field.bundles = this.bundle;
            let response = await axios.post('/api/rooms/'+this.$route.params.id,this.field)
            const data = _.get(response,'data',{})
            if(!this.empty(this.files) && this.files instanceof File){
                const formData = new FormData();
                formData.append('cover',this.files);
                formData.append('id',data._id);
                await axios.post('/api/rooms/upload',formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            }
            if(!this.empty(_.get(this.field,'images.0',null))&&this.empty(this.files)){
                console.log('delete image');
                const formData = new FormData();
                formData.append('id',data._id);
                await axios.delete('/api/rooms/upload?id='+data._id)
            }
             
        },

    },
    computed:{
        selectTab(){
            return _.get(this.tabItems,`${this.tab}.code`,'')
        },
        // this.$store.commit('breadcrumb/setList', this.list)
    },
    mounted(){
        if(['create','add','0'].includes(this.$route.params.id)){
            this.prefix = 'แก้ไข'
        }else{
            this.syncData()
        }
    },
    watch:{
        files(val){
            if(this.empty(val)){
                this.coverUrl = null
            }
        }
    }
}
</script>
