<template>
  <div style="padding:20px">
        <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col d-flex justify-content-start">
                    <h4>News</h4>
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
                    <label for="exampleInputEmail1">Name( th )</label>
                    <input type="text" class="form-control" placeholder="Name" v-model="name.th">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Description( th )</label>
                    <VTuiEditor v-model="description.th"></VTuiEditor>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name( en )</label>
                    <input type="text" class="form-control" placeholder="Name" v-model="name.en">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Description( en )</label>
                    <VTuiEditor  v-model="description.en"></VTuiEditor>
                </div>
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
import VTuiEditor from '~/components/VTuiEditor.vue'
export default {
  components: { VTuiEditor },
    data(){
        return{
            name:{},
            description:{},
            field:{},
            isEdit: false,
        }
    },
    methods:{
        async syncData(){
            const $r = await axios.get(`/api/news/${this.$route.params.id}`);
            this.field = _.get($r.data, 'data', _.get($r, 'data', {}));
            this.name = _.get(this.field, 'name', {});
            this.description = _.get(this.field, 'description', {});
            delete this.field._id;
            delete this.field.__v;
            delete this.field.id;
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
            this.field.name = this.name;
            this.field.description = this.description;
            const $r = await axios.post(`/api/news/${this.$route.params.id}`, this.field);
            this.$router.push(`/admin-panel/news`);
        },
    },
    async mounted(){
        if (!["0", "create", "add"].includes(this.$route.params.id)) {
            await this.syncData();
            this.$checkPermission("news","edit").then(r => {
                this.isEdit = r;
            });
        }else{
            this.$checkPermission("news","create").then(r => {
                this.isEdit = r;
            });
        }
        
    },
}
</script>