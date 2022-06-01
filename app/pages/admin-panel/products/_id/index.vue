<template>
  <div style="padding:20px">
        <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col d-flex justify-content-start">
                    <h4>Products</h4>
                </div>
                <div class="col d-flex justify-content-end" >
                    <button class="btn btn-primary" type="button" @click="back()">{{$t('back')}}</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div>
                
                <div class="form-group" v-for="(value, index) in Object.entries(field)" :key="index">
                    <label for="exampleInputEmail1">{{ value[0] }}</label>
                    <input type="text" class="form-control" disabled placeholder="Name" v-model="value[1]">
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
export default {
    data(){
        return{
            field:{}
        }
    },
    methods:{
        async syncData(){
            const $r = await axios.get(`/api/products/${this.$route.params.id}`);
            this.field = _.get($r.data, 'data', {});
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

    },
    async mounted(){
        await this.syncData();
        console.log(this.field);

    },
}
</script>