<template>
  <div style="padding:20px">
        <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col d-flex justify-content-start">
                    <h4>Products</h4>
                </div>
                <div class="col d-flex justify-content-end" >
                    <v-btn   class="mr-5" @click="back()">{{$t('back')}}</v-btn>
                    <v-btn dark color="teal" v-if="isEdit" @click="save()">{{$t('save')}}</v-btn>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div>
                <v-row>
                    <v-col>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("name") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="name" 
                                v-model="field.name"
                        />
                    </v-col>
                </v-row>
                <!-- <v-row>
                    <v-col>
                        <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                        >{{ $t("link") }}</v-list-item-subtitle>
                        <v-text-field
                                outlined
                                dense
                                placeholder="link" 
                                v-model="field.link"
                        />
                    </v-col>
                </v-row> -->
            </div>
        </div>
        <div class="card-footer text-muted">
            
        </div>
        </div>
    </div>
</template>

<script>
import axios from '~/utils/axios'
import _ from 'lodash'
export default {
    data(){
        return{
            field:{
                name: '',
            },
            isEdit: false,
        }
    },
    methods:{
        async syncData(){
            const $r = await axios.get(`/api/permission/${this.$route.params.id}`);
            this.field = _.get($r.data, 'data', {});
            delete this.field._id;
            delete this.field.__v;
            delete this.field.deleted;
        },
        async back() {
            let path = _.filter(this.$route.path.split("/"));
            path = _.filter(path, (r, k) => {
                return k != path.length - 1;
            });
            path = _.join(path, "/");
            this.$router.push(`/${path}`);
        },
        async save() {
            console.log(this.field);
            const $r = await axios.post(`/api/permission/${this.$route.params.id}`, this.field);
            this.$router.push(`/admin-panel/permissions`);
        },
    },
    async mounted(){
        if (!["0", "create", "add"].includes(this.$route.params.id)) {
            await this.syncData();
            this.$checkPermission("permission","edit").then(r => {
                this.isEdit = r;
            });
        }else{
            this.$checkPermission("permission","create").then(r => {
                this.isEdit = r;
            });
        }
    },
}
</script>