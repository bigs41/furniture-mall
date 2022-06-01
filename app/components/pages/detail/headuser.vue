<template>
  <div class="row mx-0">
    <div class="col-12">
      <div class="row p-3 bg-white rounded8px">
        <div class="col-12">
          <div class="row">
            <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-12">
              <div class="row">
                <div class="col-12">
                  <div class="d-flex flex-lg-row flex-md-row flex-column align-items-center pb-3">
                    <div class="flex-shrink-0 mb-lg-0 mb-md-3 mb-3">
                      <img src="/img/detail/user-demo.svg" alt="...">
                    </div>
                    <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-0">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-8">
                            <div class="d-flex flex-row align-items-center">
                              <h1 class="mb-0"><strong>Jean Jean</strong></h1>
                              <img src="/img/dashboard/vip.svg" class="mx-1 vip-custom-box" alt="">
                              <img src="/img/dashboard/identity.svg" class="mx-1 identity-custom-box" alt="">
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="row">
                              <select class="form-select cursor-pointer" aria-label="Default select example">
                                <option selected>ผู้ใช้ทั่วไป</option>
                                <option value="1">Modeling 1</option>
                                <option value="2">Modeling 2</option>
                                <option value="3">Modeling 3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-2 d-flex align-items-center">
                        <span class="badge rounded-pill bg-danger px-4 py-1 h-custom-17"><strong><i class="fa fa-mars font-custom-7px"></i></strong></span>
                        <span class="badge rounded-pill bg-danger px-4 py-1 h-custom-17 ms-2"><strong>27</strong></span>
                      </div>
                      <div class="col-12 mb-2">
                        <h6 class="mb-0 text-secondary">ID : 782178905</h6>
                      </div>
                      <div class="col-12 mb-2">
                        <h6 class="mb-0 text-secondary">I'm a Positive Person. I love to travel and eat. Always available for chat</h6>
                      </div>
                      <div class="col-12">
                        <div class="row g-2">
                          <div class="col-xxl-6 col-xl-3 col-lg-6 col-md-3 col-6">
                            <button class="btn btn-main form-control btn-sm py-0" data-bs-toggle="modal" data-bs-target="#addCoin">เติมเหรียญ</button>
                          </div>
                          <div class="col-xxl-6 col-xl-3 col-lg-6 col-md-3 col-6">
                            <button class="btn btn-secondary form-control btn-sm py-0" data-bs-toggle="modal" data-bs-target="#blockUser">บล็อกการใช้งาน</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center">
              <div class="row">
                <div class="col-12">
                  <div class="row g-3">
                    <div class="col-xl-2 col-lg-4 col-md-4 col-6" v-for="(dataUser, index) in dataUsers" :key="index">
                      <div class="row mx-0 border-custom-head-detail rounded8px p-3">
                        <div class="col-12 text-center">
                          <h5 class="mb-0"><strong>{{dataUser.title}}</strong></h5>
                        </div>
                        <div class="col-12 text-center pt-3 pb-2">
                          <img :src="dataUser.img" class="w-icon-detail" alt="">
                        </div>
                        <div class="col-12 text-center">
                          <h1 class="mb-0"><strong>{{dataUser.view}}</strong></h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addCoin" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-unset pb-0">
                  <h3 class="modal-title" id="exampleModalLabel"><strong>เติมเหรียญ</strong></h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="row">
                        <div class="col-12 d-flex align-items-end justify-content-center mb-3">
                          <div class="d-flex align-items-center flex-row ">
                            <div class="flex-shrink-0 mb-xxl-0 mb-xl-3 mb-lg-3 mb-md-3 mb-3">
                              <img src="/img/coin/icon-coin-1.svg" alt="...">
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h5 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong>เหรียญสะสมทั้งหมด</strong></h5>
                              <div class="d-flex flex-row align-items-center justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center">
                                <h1 class="mb-0"><strong>150,500</strong></h1>
                                <h5 class="mb-0 ms-2 pt-2"><strong>/เหรียญ</strong></h5>
                              </div>
                              <h6 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong class="text-secondary">จำนวนเหรียญสะสมทั้งหมด</strong></h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 d-flex align-items-end justify-content-center">
                          <div class="d-flex align-items-center flex-row ">
                            <div class="flex-shrink-0 mb-xxl-0 mb-xl-3 mb-lg-3 mb-md-3 mb-3">
                              <img src="/img/coin/icon-coin-2.svg" alt="...">
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h5 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong>เหรียญคงเหลือ</strong></h5>
                              <div class="d-flex flex-row align-items-center justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center">
                                <h1 class="mb-0"><strong>15,500</strong></h1>
                                <h5 class="mb-0 ms-2 pt-2"><strong>/เหรียญ</strong></h5>
                              </div>
                              <h6 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong class="text-secondary">จำนวนเหรียญคงเหลือทั้งหมด</strong></h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="row h-100">
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><h5 class="mb-0"><strong>กรุณาระบุจำนวนเหรียญ</strong></h5></label>
                            <input type="number" class="form-control">
                          </div>
                        </div>
                        <div class="col-12 d-flex align-items-end w-100 mx-0">
                          <div class="row g-1 w-100 mx-0">
                            <div class="col-6">
                              <button type="button" class="btn form-control btn-main" data-bs-dismiss="modal">บันทึก</button>
                            </div>
                            <div class="col-6">
                              <button type="button" class="btn form-control btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="blockUser" tabindex="-1">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-unset pb-0">
                  <h3 class="modal-title" id="exampleModalLabel"><strong>บล็อกการใช้งาน</strong></h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <h5 class="mb-0">คุณต้องการบล็อกหรือไม่</h5>
                </div>
              </div>
              <div class="modal-footer border-unset pb-3 px-3">
                  <div class="col-12 mx-auto">
                    <div class="row g-2">
                      <div class="col-6">
                        <button type="button" class="btn form-control btn-main" data-bs-dismiss="modal">บล็อก</button>
                      </div>
                      <div class="col-6">
                        <button type="button" class="btn form-control btn-secondary" data-bs-dismiss="modal">ปิด</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataUsers:[
        {
          title:'ผู้ติดตาม',
          img:'/img/detail/icon-1.svg',
          view:'150k',
        },
        {
          title:'กำลังติดตาม',
          img:'/img/detail/icon-2.svg',
          view:'100k',
        },
        {
          title:'โพสต์',
          img:'/img/detail/icon-3.svg',
          view:'200',
        },
        {
          title:'เหรียญสะสม',
          img:'/img/detail/icon-4.svg',
          view:'300k',
        },
        {
          title:'เหรียญที่ได้รับ',
          img:'/img/detail/icon-5.svg',
          view:'200',
        },
        {
          title:'สายเปย์',
          img:'/img/detail/icon-6.svg',
          view:'100k',
        },
      ]
    }
  }
}
</script>


<style scoped>
  .border-custom-head-detail{
    border: 1px solid #E8E8E8;
  }
  .w-icon-detail{
    width: 30px;
    height: 30px;
  }
  
</style>
