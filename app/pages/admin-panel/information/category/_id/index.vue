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
                    <v-col md=12 xd=12 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("รหัสหมวดหมู่") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="รหัสหมวดหมู่" 
                                v-model="field.id"
                                disabled
                        />
                    </v-col>
                    <v-col md=12 xd=12 cols=12>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("ชื่อหมวดหมู่") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="ชื่อหมวดหมู่" 
                                v-model="field.name"
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
        field:{
            id:null,
            name:null,
        },
        prefix: 'เพิ่ม',
    }
  },
    methods:{
        async syncData(){
            axios.get('/api/category/'+this.$route.params.id).then(
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
            this.back()
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