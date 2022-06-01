<template>
  <div class="row mx-0 mt-3">
    <div class="col-12">
      <Menudetail />
      <div class="row p-3 rounded8px-bottom bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2">
        <div class="col-12">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-12 d-flex align-items-stretch">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="mb-3">
                        <label for="username" class="form-label"><h5 class="mb-0"><strong>ชื่อ</strong></h5></label>
                        <input type="text" class="form-control" disabled id="username" placeholder="นาย กฤษฎา">
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="mb-3">
                        <label for="lastname" class="form-label"><h5 class="mb-0"><strong>นามสกุล</strong></h5></label>
                        <input type="text" class="form-control" disabled id="lastname" placeholder="โปรดักชั่น">
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="mb-3">
                        <label for="email" class="form-label"><h5 class="mb-0"><strong>อีเมล</strong></h5></label>
                        <input type="email" class="form-control" disabled id="email" placeholder="Production@advencedis.co.th">
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="mb-3">
                        <label for="tel" class="form-label"><h5 class="mb-0"><strong>เบอร์โทรติดต่อ</strong></h5></label>
                        <input type="text" class="form-control" disabled id="tel" placeholder="095-555-5418">
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="mb-3">
                        <label for="idNumber" class="form-label"><h5 class="mb-0"><strong>หมายเลขบัตรประชาชน</strong></h5></label>
                        <input type="text" class="form-control" disabled id="idNumber" placeholder="112526562664">
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="mb-3">
                        <label for="date" class="form-label"><h5 class="mb-0"><strong>วันเดือนปีเกิด</strong></h5></label>
                        <input type="text" class="form-control" disabled id="date" placeholder="05/09/1994">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-0">
                        <label for="address" class="form-label"><h5 class="mb-0"><strong>ที่อยู่ปัจจุบัน</strong></h5></label>
                        <textarea class="form-control" disabled id="address" rows="3" placeholder="55/357 หมู่ที่ 7 หมู่บ้านบุรีรมย์ ปลายบาง"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12 d-flex align-items-stretch">
              <div class="row">
                <div class="col-xl-10 col-lg-12 col-md-12 col-12 mx-auto pt-4">
                  <img src="/img/users/card-id-demo.png" class="w-100" alt="">
                </div>
                <div class="col-xl-10 col-lg-12 col-md-12 col-12 mx-auto d-flex align-items-end mt-lg-0 mt-md-0 mt-3">
                  <button class="btn btn-danger form-control" data-bs-toggle="modal" data-bs-target="#approveKYC">อนุมัติการยืนยันตัวตน</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="approveKYC" tabindex="-1">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-unset pb-0">
                  <h3 class="modal-title" id="exampleModalLabel"><strong>ยืนยันตัวตน</strong></h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <h5 class="mb-0">อนุมัติการยืนยันตัวตนหรือไม่</h5>
                </div>
              </div>
              <div class="modal-footer border-unset pb-3 px-3">
                  <div class="col-12 mx-auto">
                    <div class="row g-2">
                      <div class="col-6">
                        <button type="button" class="btn form-control btn-main" data-bs-dismiss="modal">ยืนยันตัวตน</button>
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

}
</script>

<style scoped>
  
  
</style>