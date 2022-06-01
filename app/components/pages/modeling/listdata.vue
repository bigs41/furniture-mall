<template>
  <div class="mt-3">
    <div class="row mx-0">
      <div class="col-12">
        <div class="row p-3 bg-white rounded8px-top d-xl-block d-lg-none d-md-none d-none mb-2px">
          <div class="col-12">
            <div class="row">
              <div class="col-1">
                <div class="form-check">
                  <input class="form-check-input cursor-pointer" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1"></label>
                </div>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ชื่อโปรไฟล์</strong></h5>
              </div>
              <div class="col-2 px-0">
                <h5 class="mb-0"><strong>อีเมล</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>สังกัด Modeling</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>วันที่สมัครสมาชิก</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2" v-for="(listModeling, index) in listModelings" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>Check</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <div class="form-check ps-0 d-flex flex-row d-flex align-items-center">
                  <input class="form-check-input cursor-pointer mx-0" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1"></label>
                  <div class="position-relative max-h-45">
                    <img src="/img/users/user-demo.png" alt="..." class="img-user rounded-circle ms-2">
                    <small class="mb-0 position-absolute badge-new"><span class="badge rounded-pill bg-danger-custom py-1 px-2">NEW</span></small>
                  </div>
                </div>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listModeling.id}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ชื่อโปรไฟล์</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listModeling.username}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>อีเมล</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center px-xl-0 px-lg-3">
                <h5 class="mb-0">{{listModeling.email}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สังกัด Modeling</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listModeling.affiliation}} Modelling</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>วันที่สมัครสมาชิก</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listModeling.date}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0"><span class="badge rounded-pill bg-secondary-custom py-1 bg-status-badge">อนุมัติการสมัคร</span></h5>
                <nuxt-link :to="`/data-user/${listModeling.id}`">
                  <img src="/img/manage/manage-user.svg" class="ms-3 vip-custom-box" alt="">
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <Pagination />
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addModeling" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-unset">
                <h3 class="modal-title" id="exampleModalLabel"><strong>เพิ่มสมาชิก</strong></h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="col-12">
                <div class="input-group input-group-lg">
                  <input type="text" class="form-control" value="https://Modeling-Deal/WPMVvim1oP6RGMnXpT7zbiyP5qTmRB" disabled>
                  <button class="input-group-text bg-main text-white" id="inputGroup-sizing-lg"><h5 class="mb-0"><strong>Copy Link</strong></h5></button>
                </div>
              </div>
            </div>
            <div class="modal-footer border-unset pb-3 px-3">
                <div class="col-lg-2 col-md-12 col-12 mx-auto">
                  <button type="button" class="btn form-control btn-main" data-bs-dismiss="modal">ปิด</button>
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
      listModelings:[]
    }
  },
  methods: {
    getDatamodeling() {
      axios.get('http://localhost:3001/modeling').then((res) => {
        this.listModelings = res.data
        console.log(this.listModelings);
      })
    },
  },
  mounted() {
    this.getDatamodeling()
  },
}
</script>

