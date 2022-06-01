<template>
  <div class="mt-3">
    <div class="row mx-0">
      <div class="col-12">
        <div class="row p-3 bg-white rounded8px-top d-xl-block d-lg-none d-md-none d-none mb-2px">
          <div class="col-12">
            <div class="row">
              <div class="col-1">
                <h5 class="mb-0"><strong></strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ชื่อโปรไฟล์</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>เบอร์โทร</strong></h5>
              </div>
              <div class="col-3">
                <h5 class="mb-0"><strong>วันที่สมัครสมาชิก</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong></strong></h5>
              </div>
              <div class="col-2 text-center">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2" v-for="(listUser, index) in listUsers" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ user</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <div class="position-relative max-h-45">
                  <img :src="listUser.profile_images[0]" alt="..." class="img-user rounded-circle ms-2">
                  <small class="mb-0 position-absolute badge-new"><span class="badge rounded-pill bg-danger-custom py-1 px-2">NEW</span></small>
                </div>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listUser.deal_id}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ชื่อโปรไฟล์</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listUser.first_name}} {{listUser.last_name}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>เบอร์โทร</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listUser.phone_number}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>วันที่สมัครสมาชิก</strong></h5>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listUser.createdAt}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ Icon</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <img v-if="listUser.isVIP == true" src="/img/dashboard/vip.svg" class="mx-1 vip-custom-box" alt="">
                <img v-if="listUser.validate_status == true" src="/img/dashboard/identity.svg" class="mx-1 identity-custom-box" alt="">
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-center justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <nuxt-link :to="`data-user/${listUser._id}`">
                  <h5 class="mb-0" v-if="listUser.validate_status == true"><span class="badge rounded-pill bg-success-custom py-1 bg-status-badge">ยืนยันตัวตนแล้ว</span></h5>
                  <h5 class="mb-0" v-else-if="listUser.validate_status == false"><span class="badge rounded-pill bg-danger-custom py-1 bg-status-badge">ยังไม่ยืนยันตัวตน</span></h5>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <Pagination :totalPage="form.totalPage" :skip.sync="form.skip" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      listUsers: [],
      form:{
        totalPage:7,
        limit:7,
        skip:0
      }
    }
  },
  methods:{
    async getUser(){
      let temp = await this.$axios({
          url: "/users/getUser",
          method: "get",
          params: {
            limit:this.form.limit,
            skip:this.form.skip
          },
          headers: { Authorization: this.$config.api_key }
       })
       console.log(temp.data.data.results);
       this.listUsers = temp.data.data.results
      //  this.form.totalPage = temp.data.data.totalPage
    }
  },
  mounted () {
    this.getUser()
  },
  computed:{
    getSkip(){
      return this.form.skip
    }
  },
  watch:{
    getSkip(){
      this.getUser();
    }
  }
}
</script>