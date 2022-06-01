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
                        >{{ $t("รหัสโครงการบ้าน") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="รหัสโครงการบ้าน" 
                                v-model="field.code"
                                
                        />
                    </v-col>
                    <v-col md=6 xd=6 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ชื่อโครงการบ้าน") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ชื่อโครงการบ้าน" 
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
                    <v-card-text v-if="selectTab=='detail'">
                        <v-row>
                            <v-col md=6 xd=6 cols=12>
                                <v-row>
                                   <v-col md=12 xd=12 cols=12>
                                       <v-list-item-subtitle
                                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                                        >{{ $t("แนวคิดโครงการ") }}</v-list-item-subtitle>
                                        <v-textarea
                                            outlined
                                            rows="3"
                                            row-height="15"
                                            v-model="field.concept"
                                        ></v-textarea>
                                    </v-col> 
                                   <v-col md=12 xd=12 cols=12>
                                       <v-list-item-subtitle
                                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                                        >{{ $t("ที่ตั้งโครงการ") }}</v-list-item-subtitle>
                                        <v-textarea
                                            outlined
                                            rows="3"
                                            row-height="15"
                                            v-model="field.address"
                                        ></v-textarea>
                                    </v-col> 
                                   <v-col md=12 xd=12 cols=12>
                                       <v-list-item-subtitle
                                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                                        >{{ $t("Website") }}</v-list-item-subtitle>
                                        <v-textarea
                                            outlined
                                            rows="1"
                                            row-height="15"
                                            v-model="field.website"
                                        ></v-textarea>
                                    </v-col> 
                                </v-row>
                            </v-col>
                            <v-col md=6 xd=6 cols=12>
                                <v-list-item-subtitle
                                    class="grey--text text--darken-1 body-1 pr-2 mb-2"
                                >&nbsp;</v-list-item-subtitle>
                                <VApiImageInput
                                    :label="$t('ภาพโครงการ')"
                                    :messages="
                                    $t(
                                        'รองรับไฟล์นามสกุล jpg ขนาดไม่เกิน 5 MB'
                                    )
                                    "
                                    :src="coverImg"
                                    v-model="files"
                                    ref="cover"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text v-if="selectTab=='map'">
                        <v-row>
                            <v-col md=12 xd=12 cols=12>
                                <v-list-item-subtitle
                                    class="grey--text text--darken-1 body-1 pr-2 mb-2"
                                >&nbsp;</v-list-item-subtitle>
                                <VApiImageInput
                                    :label="$t('ภาพแผนที่')"
                                    :messages="
                                    $t(
                                        'รองรับไฟล์นามสกุล jpg ขนาดไม่เกิน 5 MB'
                                    )
                                    "
                                    :src="mapImg"
                                    v-model="mapFiles"
                                    ref="mapFiles"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text v-if="selectTab=='googleMap'">
                        <v-row>
                            <v-col md=12 xd=12 cols=12>
                                <v-list-item-subtitle
                                    class="grey--text text--darken-1 body-1 pr-2 mb-2"
                                >&nbsp;</v-list-item-subtitle>
                                <iframe width="100%"
                                        height="350"
                                        frameborder="0" style="border:0"
                                        referrerpolicy="no-referrer-when-downgrade" 
                                        allowfullscreen 
                                        :src="`http://maps.google.com/maps?q=${field.latitude},${field.longitude}&z=15&output=embed`"
                                ></iframe>
                            </v-col>
                            <v-col md=12 xd=12 cols=12>
                                <v-list-item-subtitle
                                    class="grey--text text--darken-1 body-1 pr-2 mb-2"
                                >&nbsp;</v-list-item-subtitle>
                                <v-text-field
                                    outlined
                                    dense
                                    placeholder="ชื่อโครงการบ้าน" 
                                    v-model="mapUrl"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text v-if="selectTab=='null'">
                        
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
        coverImg:null,
        files:[],
        mapUrl:'https://www.google.co.th/maps/place/%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%87%E0%B8%8A%E0%B9%89%E0%B8%B2/@13.7456972,100.4994969,15.39z/data=!4m5!3m4!1s0x30e299c55a558f5f:0x715e0343330146c0!8m2!3d13.7517708!4d100.5012761',
        mapImg:null,
        mapFiles:[],
        field:{
            id:null,
            name:null,
        },
        tab: null,
        tabItems:[
            {tab:'รายละเอียดโครงการ',code:'detail'},
            {tab:'แผนที่',code:'map'},
            {tab:'Google Map',code:'googleMap'},
        ],

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
            axios.get('/api/houses/'+this.$route.params.id).then(
                response => {
                    this.field = _.get(response,'data.data',_.get(response,'data',{}))
                    this.mapUrl = _.get(this.field,'location',this.mapUrl)
                        this.coverImg = `http://${_.get(this.field,'image',null)}`
                        if(!this.empty(this.coverImg)){
                            this.files = [{}]
                            try {
                                this.$refs.cover.files = [{}]
                            } catch (error) {}
                        }
                    this.mapImg = `http://${_.get(this.field,'imageMap',null)}`
                    if(!this.empty(this.mapImg)){
                        this.mapFiles = [{}]
                        try {
                            this.$refs.mapFiles.files = [{}]
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
        async save(){

            this.field.location = this.mapUrl;
            let response = await axios.post('/api/houses/'+this.$route.params.id,this.field)
            const data = _.get(response,'data',{})
            if((!this.empty(this.files)||!this.empty(this.mapFiles)) && (this.files instanceof File||this.mapFiles instanceof File)){
                const formData = new FormData();
                if(this.files instanceof File&&!this.empty(this.files)){
                    formData.append('image', this.files);
                }
                if(this.mapFiles instanceof File&&!this.empty(this.mapFiles)){
                    formData.append('imageMap', this.mapFiles);
                }
                formData.append('id',data._id);
                await axios.post('/api/houses/upload',formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            }
            let remove = []
            if(!this.empty(_.get(this.field,'image',null))&&this.empty(this.files)){
                remove.push('image')
            }
            if(!this.empty(_.get(this.field,'imageMap',null))&&this.empty(this.mapFiles)){
                remove.push('imageMap')
            }
            if(!this.empty(remove)){
                await axios.delete(`/api/houses/upload?id=${data._id}&q=${remove.join(',')}`)
            }
             
        },
        getLatLong(){
            const url = this.mapUrl
            const location = url.match(/@([0-9.-]+),([0-9.-]+),([0-9.-]+)/)
            const lat = _.get(location,'1','')
            const long = _.get(location,'2','')
            this.field.latitude = lat;
            this.field.longitude = long;
            console.log(this.field.latitude,this.field.longitude);
        }
    },
    computed:{
        selectTab(){
            return _.get(this.tabItems,`${this.tab}.code`,'')
        },
        // this.$store.commit('breadcrumb/setList', this.list)
    },
    mounted(){
        this.tab = 5
        if(!['create','add','0'].includes(this.$route.params.id)){
            this.prefix = 'แก้ไข'
            this.syncData()
        }else{
            
        }
        this.getLatLong()
        
    },
    watch:{
        files(val){
            if(this.empty(val)){
                this.coverImg = null;
                try {
                    this.$refs.cover.files = [{}];
                } catch (error) {
                    
                }
            }
        },
        mapFiles(val){
            if(this.empty(val)){
                this.mapImg = null;
                try {
                    this.$refs.mapFiles.files = [{}];
                } catch (error) {
                    
                }
            }
        },
        mapUrl(val){
            if(!this.empty(val)){
                this.getLatLong()
            }
        }
    }
}
</script>
