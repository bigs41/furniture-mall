<template>
<div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <center>

          <h2 class="text-2xl leading-7 font-semibold">
            Admin Panel
          </h2>
          <br>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataForm.email" >
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">&nbsp;password</span>
            <input type="password" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataForm.password" >
          </div>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary" @click="checkIn()">Login</button>
            </div>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '~/utils/axios'
import _ from 'lodash'
import moment from 'moment'

export default {
    layout:'login',
    data() {
        return {
            dataForm:{
                email:'',
                password:''
            }
        };
    },
    methods:{
      async checkIn(){
        // console.log(axios);
        let res = await axios.post('/api/auth/local',{
          email:this.dataForm.email,
          password:this.dataForm.password
        });
        if(res.status == 201){
          const data = _.get(res,'data.data');
          let option = {}
          if(!this.empty(_.get(data,'access_token'))){
            try{
              const user = this.$jwt(data.access_token);
              if(user.exp){
                    const now  = moment.unix(user.exp).format('DD/MM/YYYY HH:mm:ss');
                    const then = moment().format('DD/MM/YYYY HH:mm:ss');

                    const ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
                    const d = moment.duration(ms);
                    option = {
                      maxAge: d.asSeconds(),
                      path:'/'
                    }
              }
            }catch(e){
              console.log(e);
            }
            
            this.$cookiz.set('token',_.get(data,'access_token'),option);
            // try {
            //   axios.get('/api/users/me').then(res => {
            //     if(res.status == 200){
            //       const data = _.get(res,'data.data');
            //       localStorage.setItem('user',JSON.stringify(data));
            //       this.$router.push('/admin-panel');
            //     }
            //   });
            // } catch (error) {
              
            // }
            this.$router.push('/');
          }
        }
      }
    },
    watch: {
    },

}
</script>

