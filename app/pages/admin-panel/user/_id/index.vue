<template>
  <div style="padding:20px">
        <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col d-flex justify-content-start">
                    <h4>Users</h4>
                </div>
                <div class="col d-flex justify-content-end" >
                    <v-btn   class="mr-5" @click="back()">{{$t('back')}}</v-btn>
                    <v-btn dark color="teal" v-if="isEdit" @click="save()">{{$t('save')}}</v-btn>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("userName") }}</v-list-item-subtitle>
                    <v-text-field
                            outlined
                            dense
                            placeholder="userName" 
                            v-model="field.userName"
                    />
                    <!-- <input type="text" class="form-control" placeholder="userName" v-model="field.userName"> -->
                </div>
                <div class="form-group" v-if="['0', 'create', 'add'].includes($route.params.id)">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("Password") }}</v-list-item-subtitle>
                    <v-password-full
                            outlined
                            dense
                            placeholder="Password" 
                            v-model="field.newPassword"
                            showScore
                            showDetail
                            isConfirm
                    ></v-password-full>
                    <!-- <input type="text" class="form-control" placeholder="userName" v-model="field.userName"> -->
                </div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("firstName") }}</v-list-item-subtitle>
                    <v-text-field
                            outlined
                            dense
                            placeholder="firstName" 
                            v-model="field.firstName"
                    />
                    <!-- <input type="text" class="form-control" placeholder="firstName" v-model="field.firstName"> -->
                </div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("lastName") }}</v-list-item-subtitle>
                    <v-text-field
                            outlined
                            dense
                            placeholder="lastName" 
                            v-model="field.lastName"
                    />
                    <!-- <input type="text" class="form-control" placeholder="lastName" v-model="field.lastName"> -->
                </div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("email") }}</v-list-item-subtitle>
                    <v-text-field
                            v-model="field['email']"
                            outlined
                            dense
                            :rules="[
                              (v) => {
                                if (!empty(v)) {
                                  return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                    v
                                  )
                                    ? $t('_7a3cc9cf')
                                    : true;
                                }
                                return true;
                              },
                              (v) => !!v || $t('_130e2576'),
                            ]"
                          >
                          </v-text-field>

                </div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("brithDay") }}</v-list-item-subtitle>
                    <v-birth
                      tfPrependIcon=""
                      v-model="field.brithDay"
                      class="font-weight-regular text--disabled"
                      style="font-size: 12pt"
                    ></v-birth>

                    <!-- <input type="text" class="form-control" placeholder="brithDay" v-model="field.brithDay"> -->
                </div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("phone_number") }}</v-list-item-subtitle>
                    <input type="text" v-mask="'## #### ####'" class="form-control" placeholder="phone_number" v-model="field.phone_number">
                </div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("gender") }}</v-list-item-subtitle>
                    <v-radio-group v-model="field.gender">
                        <v-radio :value="0" label="male"></v-radio>
                        <v-radio :value="1" label="female"></v-radio>
                    </v-radio-group>
                </div>
                <div class="form-group">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("role") }}</v-list-item-subtitle>
                    <v-auto-complete
                            ref="autoComplete"
                            class="my-0"
                            label=""
                            url="/api/roles"
                            :search-fields="['name']"
                            item-text="name"
                            item-value="_id"
                            :limit="5"
                            :items="!empty(roles)?roles:[]"
                            outlined
                            multiple
                            chips
                            small-chips
                            v-model="roles"
                          >
                          </v-auto-complete>
                </div>
            </div>
            <hr>
            <div>
                <div class="form-group form-address">
                    <v-list-item-subtitle
                        class="grey--text text--darken-1 body-1 pr-2 mb-2"
                    >{{ $t("Address") }}</v-list-item-subtitle>
                    <v-list-item v-for="(local,index) in listAddress" :key="local">
                        <v-list-item-content >
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-switch
                                    v-model="local.isDefault"
                                    flat
                                    :label="$t('ที่อยู่จัดส่ง')"
                                    @change="changeDefault(local)"
                                ></v-switch>
                                </v-col>
                                <v-col cols="12" md="6" class="d-flex justify-end">
                                    <!-- remove -->
                                    <v-btn icon small @click="removeAddress(local.$id)">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-address
                                    v-model="listAddress[index]"
                                    class="font-weight-regular text--disabled"
                                    style="font-size: 12pt"
                            ></v-address>
                        </v-list-item-content>
                    </v-list-item>
                    <br>
                    <v-btn icon  class="mr-5" @click="addAddress()" 
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="add more"><v-icon>mdi-plus</v-icon></v-btn>
                </div>
            </div>
        </div>
        <div class="card-footer text-muted">
            
        </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.form-address ::v-deep{
    .v-list-item{
        border-bottom: 1px solid #e0e0e0;
    }
}
</style>
<script>
import axios from '~/utils/axios'
import _ from 'lodash'
import { v4 as uuidv4 } from "uuid";
export default {
    data(){
        return{
            field:{
                name: '',
            },
            roles:[],
            listAddress:[
                {
                    $id:uuidv4(),
                    isDefault:true,
                    sort:1
                }
            ],
            activeAddress: 1,
            isEdit: false,
        }
    },
    methods:{
        async syncData(){
            const $r = await axios.get(`/api/users/${this.$route.params.id}`);
            this.field = _.get($r, 'data', _.get($r.data, 'data', {}));
            this.roles = _.get(this.field, 'roles', []);
            this.listAddress = _.map(_.get(this.field, 'address', []), (item)=>{
                item.$id = uuidv4();
                return item;
            });
            delete this.field._id;
            delete this.field.__v;
        },
        addAddress(){
            this.listAddress.push({
                $id:uuidv4(),
                isDefault: false,
                sort: this.listAddress.length + 1
            })
        },
        changeDefault(local){
            if(local.isDefault){
                this.listAddress.map(item => {
                    if(item.$id !== local.$id){
                        item.isDefault = false;
                    }
                })
            }
        },
        removeAddress(id){
            this.listAddress = _.filter(this.listAddress, (item)=>{
                return item.$id !== id;
            })
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
            this.field.address = this.listAddress;
            this.field.roles = this.roles;
            const $r = await axios.post(`/api/users/${this.$route.params.id}`, this.field);
            this.$router.push(`/admin-panel/user`);
        },
    },
    watch:{
        listAddress:{
            handler(val){
                console.log(val);
            },
            deep: true,
        },
    },
    async mounted(){
        if (!["0", "create", "add"].includes(this.$route.params.id)) {
            await this.syncData();
            this.$checkPermission("user","edit").then(r => {
                this.isEdit = r;
            });
        }else{
            this.$checkPermission("user","create").then(r => {
                this.isEdit = r;
            });
        }
    },
}
</script>