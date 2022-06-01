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
              <div class="col-1">
                <h5 class="mb-0"><strong>ชื่อโปรไฟล์</strong></h5>
              </div>
              <div class="col-1 px-0">
                <h5 class="mb-0"><strong>แจ้งถอนเงินเมื่อวันที่</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>จำนวนเหรียญที่ถอน</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>ค่าธรรมเนียม</strong></h5>
              </div>
              <div class="col-1 px-0">
                <h5 class="mb-0"><strong>จำนวนเงินที่จะได้รับ</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>เลขบัญชี</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>ธนาคาร</strong></h5>
              </div>
              <div class="col-2 text-center">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2" v-for="(listWithdraw, index) in listWithdraws" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>Check</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <div class="form-check ps-0 d-flex flex-row align-items-center">
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
                <h5 class="mb-0">{{listWithdraw.id}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ชื่อโปรไฟล์</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listWithdraw.username}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>แจ้งถอนเงินเมื่อวันที่</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center px-xl-0 px-lg-3">
                <h5 class="mb-0">{{listWithdraw.datewithdraw}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จำนวนเหรียญที่ถอน</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listWithdraw.coinwithdraw}} เหรียญ</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ค่าธรรมเนียม</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listWithdraw.fee}} เหรียญ</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จำนวนเงินที่จะได้รับ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center px-xl-0 px-lg-3">
                <h5 class="mb-0">{{listWithdraw.pricetotal}} บาท</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>เลขบัญชี</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listWithdraw.accountnumber}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ธนาคาร</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listWithdraw.bank}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-center justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4">{{listWithdraw.status}}</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      listWithdraws:[]
    }
  },
  methods: {
    getDatawithdraw() {
      axios.get('http://localhost:3001/withdraw').then((res) => {
        this.listWithdraws = res.data
        console.log(this.listWithdraws);
      })
    },
  },
  mounted() {
    this.getDatawithdraw()
  },
}
</script>
