<template>
  <div>
    <div class="row px-0 bg-white rounded8px-top mb-2px">
      <div class="col-12 flex-custom position-relative">
        <div class="nowrap-custom">
          <nuxt-link to="/data-user/1" class="btn w-custom-menu-detail py-3 position-relative border-unset">
            <h5 class="mb-0"><strong>บัญชีผู้ใช้</strong></h5>
            <div class="set-active "></div>
          </nuxt-link>
          <nuxt-link to="/vip/1" class="btn w-custom-menu-detail py-3 position-relative border-unset">
            <h5 class="mb-0"><strong>Member VIP</strong></h5>
            <div class="set-active "></div>
          </nuxt-link>
          <nuxt-link to="/coin/1" class="btn w-custom-menu-detail py-3 position-relative border-unset">
            <h5 class="mb-0"><strong>เหรียญ</strong></h5>
            <div class="set-active "></div>
          </nuxt-link>
          <nuxt-link to="/appointment/1" class="btn w-custom-menu-detail py-3 position-relative border-unset">
            <h5 class="mb-0"><strong>นัดหมาย</strong></h5>
            <div class="set-active "></div>
          </nuxt-link>
          <nuxt-link to="/party/1" class="btn w-custom-menu-detail py-3 position-relative border-unset">
            <h5 class="mb-0"><strong>ปาร์ตี้</strong></h5>
            <div class="set-active "></div>
          </nuxt-link>
          <nuxt-link to="/withdraw/1" class="btn w-custom-menu-detail py-3 position-relative border-unset">
            <h5 class="mb-0"><strong>การถอนเงิน</strong></h5>
            <div class="set-active "></div>
          </nuxt-link>
        </div>
        <h5 class="mb-0 position-absolute d-xxl-block d-xl-none d-lg-none d-md-none d-none cursor-pointer setting-fee" data-bs-toggle="modal" data-bs-target="#settingFee">ตั้งค่า ค่าธรรมเนียม</h5>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="settingFee" tabindex="-1">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-unset pb-0">
                  <h3 class="modal-title" id="exampleModalLabel"><strong>ตั้งค่า ค่าธรรมเนียม</strong></h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body pb-0">
                <div class="col-12 mb-3">
                  <h5 class="mb-0"><strong>อัพเดทค่าธรรมเนียม</strong></h5>
                </div>
                <div class="col-8 mx-auto">
                  <div class="row g-2 mb-3">
                    <div class="col-6 d-flex flex-row">
                      <button class="btn btn-outline-main border-radius-left w-100 me-1"><h5 class="mb-0"><strong>+ เพิ่ม</strong></h5></button>
                      <button class="btn btn-outline-main border-radius-right w-100"><h5 class="mb-0"><strong>+ ลด</strong></h5></button>
                    </div>
                    <div class="col-6">
                      <div class="input-group">
                        <input type="number" placeholder="10" class="form-control border-radius-left">
                        <span class="input-group-text border-radius-right" id="basic-addon2"><h5 class="mb-0"><strong>%</strong></h5></span>
                      </div>
                    </div>
                  </div>
                  <div class="row g-2">
                    <div class="col-5 text-center">
                      <h5 class="mb-0"><strong>ค่าธรรมเนียม</strong></h5>
                      <h1 class="mb-0"><strong>10%</strong></h1>
                    </div>
                    <div class="col-2 d-flex align-items-center justify-content-center">
                      <img src="/img/arrow-setting-fee.svg" alt="">
                    </div>
                    <div class="col-5 text-center">
                      <h5 class="mb-0"><strong>รายได้</strong></h5>
                      <h1 class="mb-0"><strong>90%</strong></h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-unset pb-3 px-3">
                  <div class="col-8 mx-auto">
                    <div class="row g-2">
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
</template>

<script>
export default {}
</script>

<style scoped>
.border-radius-left{
  border-radius: 8px 0 0 8px;
}
.border-radius-right{
  border-radius: 0 8px 8px 0;
}
.setting-fee{
  top: 15px;
  right: 15px;
  text-decoration: underline;
  color: #217AFF;
}
.w-custom-menu-detail {
  width: 100px;
  text-align: center !important;
}

.nuxt-link-exact-active.w-custom-menu-detail {
  color: var(--iq-main);
}
.nuxt-link-exact-active.w-custom-menu-detail .set-active{
  width: 25px;
  height: 4px;
  background-color: var(--iq-main);
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px 8px 0 0;
}

@media (min-width: 320px) {
  .w-custom-menu-detail {
    width: 100px;
  }
}

@media (min-width: 768px) {
  
}

@media (min-width: 992px) {
  .w-custom-menu-detail {
    width: 90px;
    
  }
  
}

@media (min-width: 1200px) {
  .w-custom-menu-detail {
    width: 160px;
  }
}
</style>