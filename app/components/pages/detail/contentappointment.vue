<template>
  <div class="row mx-0 mt-3">
    <div class="col-12">
      <Menudetail />
      <div class="row p-3 bg-white mb-2px">
        <div class="col-12">
          <h5 class="mb-0"> <strong>ประวัติการนัดหมาย</strong></h5>
        </div>
      </div>
      <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2 ">
        <div class="col-12 mb-5">
          <PagesAppointmentSearch />
        </div>
        <div class="col-12 ">
          <div class="row">
            <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <button class="btn btn-main form-control px-2"><h6 class="mb-0"><strong>กำลังนัดหมาย</strong></h6></button>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>นัดเพื่อนช๊อปปิ้ง</strong></h5>
              <h5 class="mb-0"><strong>สร้างเมื่อวันที่ :</strong> 14/09/2564 12:00 น.</h5>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>สถานที่ :</strong> เซ็นทรัลปิ่นเกล้า 222 ถนนบรมราชชนนี แขวง อรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700</h5>
            </div>
            <div class="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0 "><strong>วันที่นัดหมาย :</strong> วันจันทร์ที่  16 พฤศจิกายน 2564</h5>
              <h5 class="mb-0 "><strong>เวลานัดหมาย :</strong> 12:00 น  -  14:00 น. </h5>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2 d-flex flex-xxl-row flex-xl-column flex-lg-row flex-md-row flex-row justify-content-between align-items-center">
              <div>
                <div class="d-flex align-items-center cursor-pointer">
                  <div class="flex-shrink-0">
                    <img src="/img/users/user-demo.png" alt="..." class="img-user-detail rounded-circle">
                  </div>
                  <div class="flex-grow-1 d-flex flex-row ms-3">
                    <h5 class="mb-0"><strong>Namm</strong></h5>
                  </div>
                </div>
              </div>
              <div>
                <small class="mb-0">
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                </small>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
          </div>
        </div>
        <div class="col-12 ">
          <div class="row">
            <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <button class="btn btn-main form-control px-2"><h6 class="mb-0"><strong>กำลังนัดหมาย</strong></h6></button>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>นัดเพื่อนช๊อปปิ้ง</strong></h5>
              <h5 class="mb-0"><strong>สร้างเมื่อวันที่ :</strong> 14/09/2564 12:00 น.</h5>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>สถานที่ :</strong> เซ็นทรัลปิ่นเกล้า 222 ถนนบรมราชชนนี แขวง อรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700</h5>
            </div>
            <div class="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0 "><strong>วันที่นัดหมาย :</strong> วันจันทร์ที่  16 พฤศจิกายน 2564</h5>
              <h5 class="mb-0 "><strong>เวลานัดหมาย :</strong> 12:00 น  -  14:00 น. </h5>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2 d-flex flex-xxl-row flex-xl-column flex-lg-row flex-md-row flex-row justify-content-between align-items-center">
              <div>
                <div class="d-flex align-items-center cursor-pointer">
                  <div class="flex-shrink-0">
                    <img src="/img/users/user-demo.png" alt="..." class="img-user-detail rounded-circle">
                  </div>
                  <div class="flex-grow-1 d-flex flex-row ms-3">
                    <h5 class="mb-0"><strong>Namm</strong></h5>
                  </div>
                </div>
              </div>
              <div>
                <small class="mb-0">
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                </small>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
          </div>
        </div>
        <div class="col-12 ">
          <div class="row">
            <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <button class="btn btn-main form-control px-2"><h6 class="mb-0"><strong>กำลังนัดหมาย</strong></h6></button>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>นัดเพื่อนช๊อปปิ้ง</strong></h5>
              <h5 class="mb-0"><strong>สร้างเมื่อวันที่ :</strong> 14/09/2564 12:00 น.</h5>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>สถานที่ :</strong> เซ็นทรัลปิ่นเกล้า 222 ถนนบรมราชชนนี แขวง อรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700</h5>
            </div>
            <div class="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0 "><strong>วันที่นัดหมาย :</strong> วันจันทร์ที่  16 พฤศจิกายน 2564</h5>
              <h5 class="mb-0 "><strong>เวลานัดหมาย :</strong> 12:00 น  -  14:00 น. </h5>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2 d-flex flex-xxl-row flex-xl-column flex-lg-row flex-md-row flex-row justify-content-between align-items-center">
              <div>
                <div class="d-flex align-items-center cursor-pointer">
                  <div class="flex-shrink-0">
                    <img src="/img/users/user-demo.png" alt="..." class="img-user-detail rounded-circle">
                  </div>
                  <div class="flex-grow-1 d-flex flex-row ms-3">
                    <h5 class="mb-0"><strong>Namm</strong></h5>
                  </div>
                </div>
              </div>
              <div>
                <small class="mb-0">
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                </small>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
          </div>
        </div>
        <div class="col-12 ">
          <div class="row">
            <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <button class="btn btn-main form-control px-2"><h6 class="mb-0"><strong>กำลังนัดหมาย</strong></h6></button>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>นัดเพื่อนช๊อปปิ้ง</strong></h5>
              <h5 class="mb-0"><strong>สร้างเมื่อวันที่ :</strong> 14/09/2564 12:00 น.</h5>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><strong>สถานที่ :</strong> เซ็นทรัลปิ่นเกล้า 222 ถนนบรมราชชนนี แขวง อรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700</h5>
            </div>
            <div class="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0 "><strong>วันที่นัดหมาย :</strong> วันจันทร์ที่  16 พฤศจิกายน 2564</h5>
              <h5 class="mb-0 "><strong>เวลานัดหมาย :</strong> 12:00 น  -  14:00 น. </h5>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2 d-flex flex-xxl-row flex-xl-column flex-lg-row flex-md-row flex-row justify-content-between align-items-center">
              <div>
                <div class="d-flex align-items-center cursor-pointer">
                  <div class="flex-shrink-0">
                    <img src="/img/users/user-demo.png" alt="..." class="img-user-detail rounded-circle">
                  </div>
                  <div class="flex-grow-1 d-flex flex-row ms-3">
                    <h5 class="mb-0"><strong>Namm</strong></h5>
                  </div>
                </div>
              </div>
              <div>
                <small class="mb-0">
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                  <i class="fa fa-star text-star"></i>
                </small>
              </div>
            </div>
            <div class="col-12">
              <hr>
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
  
  
</style>