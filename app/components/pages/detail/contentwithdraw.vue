<template>
  <div class="row mx-0 mt-3">
    <div class="col-12">
      <Menudetail />
      <div class="row px-3 py-4 rounded8px-bottom bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2">
        <div class="col-12">
          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-12 d-flex align-items-end justify-content-center mb-3">
              <div class="d-flex align-items-center flex-xxl-row flex-xl-column flex-md-column flex-column ">
                <div class="flex-shrink-0 mb-xxl-0 mb-xl-3 mb-lg-3 mb-md-3 mb-3">
                  <img src="/img/withdraw/icon-withdraw-1.svg" alt="...">
                </div>
                <div class="flex-grow-1 ms-xxl-3 ms-xl-0 ms-md-0 ms-0">
                  <h5 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong>รายได้จากการได้เหรียญ</strong></h5>
                  <div class="d-flex flex-row align-items-center justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center">
                    <h1 class="mb-0"><strong>150,500</strong></h1>
                    <h5 class="mb-0 ms-2 pt-2"><strong>/เหรียญ</strong></h5>
                  </div>
                  <h6 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong class="text-secondary">จำนวนรายได้จากการได้เพชรทั้งหมด</strong></h6>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-12 d-flex align-items-end justify-content-center mb-3">
              <div class="d-flex align-items-center flex-xxl-row flex-xl-column flex-md-column flex-column ">
                <div class="flex-shrink-0 mb-xxl-0 mb-xl-3 mb-lg-3 mb-md-3 mb-3">
                  <img src="/img/withdraw/icon-withdraw-2.svg" alt="...">
                </div>
                <div class="flex-grow-1 ms-xxl-3 ms-xl-0 ms-md-0 ms-0">
                  <h5 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong>เหรียญที่ถอนไป</strong></h5>
                  <div class="d-flex flex-row align-items-center justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center">
                    <h1 class="mb-0"><strong>15,500</strong></h1>
                    <h5 class="mb-0 ms-2 pt-2"><strong>/เหรียญ</strong></h5>
                  </div>
                  <h6 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong class="text-secondary">จำนวนเพชรที่ถอนไปทั้งหมด</strong></h6>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-12 d-flex align-items-end justify-content-center mb-3">
              <div class="d-flex align-items-center flex-xxl-row flex-xl-column flex-md-column flex-column ">
                <div class="flex-shrink-0 mb-xxl-0 mb-xl-3 mb-lg-3 mb-md-3 mb-3">
                  <img src="/img/withdraw/icon-withdraw-3.svg" alt="...">
                </div>
                <div class="flex-grow-1 ms-xxl-3 ms-xl-0 ms-md-0 ms-0">
                  <h5 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong>เงินสดสะสม</strong></h5>
                  <div class="d-flex flex-row align-items-center justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center">
                    <h1 class="mb-0"><strong>500</strong></h1>
                    <h5 class="mb-0 ms-2 pt-2"><strong>/บาท</strong></h5>
                  </div>
                  <h6 class="mb-0 d-flex justify-content-xxl-start justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center"><strong class="text-secondary">จำนวนเงินสดสะสมทั้งหมด</strong></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <PagesWithdrawSearch />
      </div>
      <div class="row p-3 bg-white rounded8px-top d-xl-block d-lg-none d-md-none d-none mb-2px ">
        <div class="col-12">
          <div class="row">
            <div class="col-1">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-2">
              <h5 class="mb-0"><strong>แจ้งถอนเงินเมื่อวันที่</strong></h5>
            </div>
            <div class="col-2">
              <h5 class="mb-0"><strong>จำนวนเพชรที่ถอน</strong></h5>
            </div>
            <div class="col-2">
              <h5 class="mb-0"><strong>เป็นจำนวนเงิน</strong></h5>
            </div>
            <div class="col-2">
              <h5 class="mb-0"><strong>เลขบัญชี</strong></h5>
            </div>
            <div class="col-1">
              <h5 class="mb-0"><strong>ธนาคาร</strong></h5>
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
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แจ้งถอนเงินเมื่อวันที่</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>จำนวนเพชรที่ถอน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">1,000 เหรียญ</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เป็นจำนวนเงิน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">100 บาท</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เลขบัญชี</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">04885554524</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ธนาคาร</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">กสิกรไทย</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">เกิดปัญหาในการโอน</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แจ้งถอนเงินเมื่อวันที่</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>จำนวนเพชรที่ถอน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">1,000 เหรียญ</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เป็นจำนวนเงิน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">100 บาท</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เลขบัญชี</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">04885554524</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ธนาคาร</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">กสิกรไทย</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">เกิดปัญหาในการโอน</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แจ้งถอนเงินเมื่อวันที่</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>จำนวนเพชรที่ถอน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">1,000 เหรียญ</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เป็นจำนวนเงิน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">100 บาท</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เลขบัญชี</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">04885554524</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ธนาคาร</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">กสิกรไทย</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">เกิดปัญหาในการโอน</span></h5>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>รหัสผู้ใช้</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">D-00001</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>แจ้งถอนเงินเมื่อวันที่</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">12 ส.ค. 2021 15:51</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>จำนวนเพชรที่ถอน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">1,000 เหรียญ</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เป็นจำนวนเงิน</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">100 บาท</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>เลขบัญชี</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">04885554524</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>ธนาคาร</strong></h5>
            </div>
            <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0">กสิกรไทย</h5>
            </div>
            <div class="col-6 d-xl-none d-lg-block d-block d-block">
              <h5 class="mb-0"><strong>สถานะ</strong></h5>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">เกิดปัญหาในการโอน</span></h5>
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
