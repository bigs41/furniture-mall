<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-12 mb-xl-0 mb-lg-3 mb-md-3 mb-3 d-flex align-items-stretch">
        <div class="row mx-0 shadow-custom rounded8px bg-white w-100">
          <div class="col-12">
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-top">
              <div class="col-12">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/img/dashboard/user.svg" alt="">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mb-0"><strong>User</strong></h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-bottom border-top-custom-2px">
              <div class="col-12">
                <h1 class="mb-0"><strong>{{dataUsers.total}}</strong></h1>
              </div>
              <div class="col-12">
                <h5 class="mb-0 text-secondary">จำนวนผู้ใช้ทั้งหมด</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-12 mb-xl-0 mb-lg-3 mb-md-3 mb-3 d-flex align-items-stretch">
        <div class="row mx-0 shadow-custom rounded8px bg-white w-100">
          <div class="col-12">
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-top">
              <div class="col-12">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/img/dashboard/vip.svg" alt="">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mb-0"><strong>Member</strong></h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-bottom border-top-custom-2px">
              <div class="col-12">
                <h1 class="mb-0"><strong>{{dataUsers.vip}}</strong></h1>
              </div>
              <div class="col-12">
                <h5 class="mb-0 text-secondary">จำนวน Member VIP ทั้งหมด</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-12 mb-xl-0 mb-lg-3 mb-md-3 mb-3 d-flex align-items-stretch">
        <div class="row mx-0 shadow-custom rounded8px bg-white w-100">
          <div class="col-12">
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-top">
              <div class="col-12">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/img/dashboard/identity.svg" alt="">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mb-0"><strong>ยืนยันตัวตน</strong></h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-bottom border-top-custom-2px">
              <div class="col-12">
                <h1 class="mb-0"><strong>{{dataUsers.validate}}</strong></h1>
              </div>
              <div class="col-12">
                <h5 class="mb-0 text-secondary">จำนวนผู้ยืนยันตัวตนทั้งหมด</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      dataUsers:[]
    }
  },
  methods:{
    async getDatauser(){
      let temp = await this.$axios({
          url: "/users/summary/dashboardData",
          method: "get",
          headers: { Authorization: this.$config.api_key }
       })
       console.log(temp.data.data);
       this.dataUsers = temp.data.data
    }
  },
  mounted() {
    this.getDatauser()
  },
}
</script>


<style scoped>
  .status-color-coin{
    width: 25px;
    height: 6px;
    border-radius: 10px;
    background-color: #AD3D93;
  }
  .status-color-withdraw{
    width: 25px;
    height: 6px;
    border-radius: 10px;
    background-color: #D00038;
  }
  .border-top-custom-2px{
    border-top: 2px solid #f1f5f7;
  }
</style>