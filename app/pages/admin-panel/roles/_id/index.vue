<template>
  <div style="padding:20px">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col d-flex justify-content-start">
                        <h4>Role</h4>
                    </div>
                    <div class="col d-flex justify-content-end" >
                        <v-btn   class="mr-5" @click="back()">{{$t('back')}}</v-btn>
                        <v-btn dark color="teal" v-if="isEdit" @click="save()">{{$t('save')}}</v-btn>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <div class="form-group" >
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" placeholder="Name" v-model="field.name">
                    </div>
                    <hr/>
                    <div class="form-group" >
                        <label for="exampleInputEmail1">Permission</label>
                        <v-data-table
                            :headers="headers"
                            :items="desserts"
                            :items-per-page="1000"
                            class="elevation-1"
                            hide-default-footer
                            :loading="desserts.length<1"
                        >
                            <template v-slot:item.create="{ item }">
                                <v-switch
                                    v-model="item.create"
                                    flat
                                    :label="``"
                                ></v-switch>
                            </template>
                            <template v-slot:item.read="{ item }">
                                <v-switch
                                    v-model="item.read"
                                    flat
                                    :label="``"
                                ></v-switch>
                            </template>
                            <template v-slot:item.edit="{ item }">
                                <v-switch
                                    v-model="item.edit"
                                    flat
                                    :label="``"
                                ></v-switch>
                            </template>
                            <template v-slot:item.remove="{ item }">
                                <v-switch
                                    v-model="item.remove"
                                    flat
                                    :label="``"
                                ></v-switch>
                            </template>
                        </v-data-table>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                
            </div>
        </div>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import axios from '~/utils/axios'
import _ from 'lodash'
export default {
    data(){
        return{
            overlay:false,
            loadRole:true,
            field:{
                name: '',
            },
            headers: [
                {
                    text: 'name permission',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { 
                    text: 'read', 
                    value: 'read',
                    sortable: false 
                },
                { 
                    text: 'edit', 
                    value: 'edit',
                    sortable: false 
                },
                { 
                    text: 'create', 
                    value: 'create',
                    sortable: false 
                },
                { 
                    text: 'remove', 
                    value: 'remove',
                    sortable: false 
                },
            ],
            desserts: [],
            isEdit: false,
        }
    },
    methods:{
        async syncData(){
            const $r = await axios.get(`/api/roles/${this.$route.params.id}`);
            this.field = _.get($r.data, 'data', {});
            this.desserts = _.get($r.data, 'data.permissions', []);
            this.loadRole = false
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
            this.overlay = true;
            const $r = await axios.post(`/api/roles/${this.$route.params.id}`, this.field);
            this.overlay = false;
            this.$router.push(`/admin-panel/roles`);
        },
    },
    watch:{
        desserts:{
            handler(val){
                this.field.permissions = val;
            },
            deep: true
        }
    },
    async mounted(){
        if (!["0", "create", "add"].includes(this.$route.params.id)) {
            await this.syncData();
            this.$checkPermission("role","edit").then(r => {
                this.isEdit = r;
            });
        }else{
            this.$checkPermission("role","create").then(r => {
                this.isEdit = r;
            });
        }
    },
}
</script>