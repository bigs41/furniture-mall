<template>
  <div class="row mx-0 mt-3">
    <div class="col-12">
      <Menudetail />
      <div class="row px-3 py-4 rounded8px-bottom bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2">
        <div class="col-12">
          <div class="row">
            <div class="col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-12 d-flex align-items-center justify-content-md-center justify-content-start">
              <img src="/img/dashboard/vip.svg" class="w-custom-icon-vip-detail" alt="">
            </div>
            <div class="col-xxl-3 col-xl-5 col-lg-5 col-md-5 col-12 d-flex align-items-center">
              <div class="row">
                <div class="col-12 d-flex justify-content-between mb-xl-0 mb-lg-2 mb-md-2 mb-2">
                  <h5 class="mb-0"><strong>Member VIP ปัจจุบันของคุณ : </strong></h5>
                  <h5 class="mb-0 text-secondary">Deal Gold</h5>
                </div>
                <div class="col-12 d-flex justify-content-between mb-xl-0 mb-lg-2 mb-md-2 mb-2">
                  <h5 class="mb-0"><strong>แพ็คเกจ : </strong></h5>
                  <h5 class="mb-0 text-secondary">12 เดือน</h5>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-5 col-lg-5 col-md-5 col-12 d-flex align-items-center offset-xxl-1 offset-xl-0 offset-lg-0 offset-md-0 offset-0">
              <div class="row">
                <div class="col-12 d-flex justify-content-between mb-xl-0 mb-lg-2 mb-md-2 mb-2">
                  <h5 class="mb-0"><strong>สมัครล่าสุด : </strong></h5>
                  <h5 class="mb-0 text-secondary">15/01/2564 15 : 00 น.</h5>
                </div>
                <div class="col-12 d-flex justify-content-between mb-xl-0 mb-lg-2 mb-md-2 mb-2">
                  <h5 class="mb-0"><strong>หมดอายุเมื่อ : </strong></h5>
                  <h5 class="mb-0 text-secondary">15/01/2565 00 : 00 น.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-3 bg-white rounded8px-top d-xl-block d-lg-none d-md-none d-none mb-2px mt-3">
        <div class="col-12">
          <div class="row">
            <div class="col-1">
              <h5 class="mb-0"><strong>ลำดับ</strong></h5>
            </div>
            <div class="col-2">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-3">
              <h5 class="mb-0"><strong>สมัคร Member เมื่อ</strong></h5>
            </div>
            <div class="col-1">
              <h5 class="mb-0"><strong>แพ็คเกจ</strong></h5>
            </div>
            <div class="col-3">
              <h5 class="mb-0"><strong>Member หมดอายุ</strong></h5>
            </div>
            <div class="col-2">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2">
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ลำดับ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
              <h5 class="mb-0">1</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สมัคร Member เมื่อ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แพ็คเกจ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
              <h5 class="mb-0">12 เดือน</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>Member หมดอายุ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
              <h5 class="mb-0">12 ส.ค. 2022 00:00</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ลำดับ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">2</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สมัคร Member เมื่อ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แพ็คเกจ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 เดือน</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>Member หมดอายุ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2022 00:00</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ลำดับ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">3</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สมัคร Member เมื่อ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แพ็คเกจ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 เดือน</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>Member หมดอายุ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2022 00:00</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ลำดับ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">4</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สมัคร Member เมื่อ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แพ็คเกจ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 เดือน</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>Member หมดอายุ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2022 00:00</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ลำดับ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">5</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สมัคร Member เมื่อ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แพ็คเกจ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 เดือน</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>Member หมดอายุ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2022 00:00</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ลำดับ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">6</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สมัคร Member เมื่อ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แพ็คเกจ</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 เดือน</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>Member หมดอายุ</strong></h5>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2022 00:00</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .w-custom-icon-vip-detail{
   width: 20%;
 }

@media (min-width: 320px) {
  .w-custom-icon-vip-detail{
    width: 20%;
  }
}

@media (min-width: 768px) {
  .w-custom-icon-vip-detail{
    width: 75%;
  }
}

@media (min-width: 992px) {
  
}

@media (min-width: 1200px) {
  .w-custom-icon-vip-detail{
    width: 60%;
  }
}
@media (min-width: 1400px) {
  .w-custom-icon-vip-detail{
    width: 75%;
  }
}
</style>