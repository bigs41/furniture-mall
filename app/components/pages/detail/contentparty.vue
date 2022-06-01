<template>
  <div class="row mx-0 mt-3">
    <div class="col-12">
      <Menudetail />
    </div>
    <div class="col-12">
      <PagesPartySearch />
    </div>
    <div class="col-12 px-0">
      <div class="row g-3">
        <div class="col-xxl-8 col-xl-7 col-lg-7 col-md-6 col-12">
          <div class="row mx-0 px-3 pt-0 pb-0 bg-white rounded8px-top mb-2px mt-3">
            <div class="col-12">
              <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                <li class="nav-item py-2" role="presentation">
                  <button class="nav-link active" id="pills-create-tab" data-bs-toggle="pill" data-bs-target="#pills-create" type="button" role="tab" aria-controls="pills-create" aria-selected="true"><h5 class="mb-0"><strong>ปาร์ตี้ที่ผู้ใช้สร้าง</strong></h5></button>
                </li>
                <li class="nav-item py-2" role="presentation">
                  <button class="nav-link" id="pills-join-tab" data-bs-toggle="pill" data-bs-target="#pills-join" type="button" role="tab" aria-controls="pills-join" aria-selected="false"><h5 class="mb-0"><strong>ปาร์ตี้ที่ผู้ใช้เข้าร่วม</strong></h5></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mx-0 p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2">
            <div class="col-12">
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-create" role="tabpanel" aria-labelledby="pills-create-tab">
                  <div class="col-12">
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <img src="/img/users/user-demo-1.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party">
                        <img src="/img/users/user-demo-2.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-3.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-4.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-5.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <img src="/img/users/user-demo-1.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party">
                        <img src="/img/users/user-demo-2.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-3.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-4.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-5.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <img src="/img/users/user-demo-1.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party">
                        <img src="/img/users/user-demo-2.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-3.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-4.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-5.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <img src="/img/users/user-demo-1.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party">
                        <img src="/img/users/user-demo-2.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-3.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-4.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-5.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">หมดอายุ</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <img src="/img/users/user-demo-1.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party">
                        <img src="/img/users/user-demo-2.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-3.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-4.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-5.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <img src="/img/users/user-demo-1.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party">
                        <img src="/img/users/user-demo-2.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-3.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-4.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                        <img src="/img/users/user-demo-5.png" alt="..." class="img-user-detail rounded-circle border-custom-user-party margin-left-custom">
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-join" role="tabpanel" aria-labelledby="pills-join-tab">
                  <div class="col-12">
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <div>
                          <div class="d-flex align-items-center cursor-pointer">
                            <div class="flex-shrink-0">
                              <img src="/img/users/user-demo-list-1.png" alt="..." class="img-user-detail rounded-circle">
                            </div>
                            <div class="flex-grow-1 d-flex flex-row ms-3">
                              <h5 class="mb-0"><strong>Poo pe</strong></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <div>
                          <div class="d-flex align-items-center cursor-pointer">
                            <div class="flex-shrink-0">
                              <img src="/img/users/user-demo-list-2.png" alt="..." class="img-user-detail rounded-circle">
                            </div>
                            <div class="flex-grow-1 d-flex flex-row ms-3">
                              <h5 class="mb-0"><strong>Taotao</strong></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <div>
                          <div class="d-flex align-items-center cursor-pointer">
                            <div class="flex-shrink-0">
                              <img src="/img/users/user-demo-list-3.png" alt="..." class="img-user-detail rounded-circle">
                            </div>
                            <div class="flex-grow-1 d-flex flex-row ms-3">
                              <h5 class="mb-0"><strong>Moomin</strong></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">ดีลจบแล้ว</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <div>
                          <div class="d-flex align-items-center cursor-pointer">
                            <div class="flex-shrink-0">
                              <img src="/img/users/user-demo-list-4.png" alt="..." class="img-user-detail rounded-circle">
                            </div>
                            <div class="flex-grow-1 d-flex flex-row ms-3">
                              <h5 class="mb-0"><strong>Palita</strong></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-danger-custom py-1 px-4 bg-status-badge">ดีลจบแล้ว</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <div>
                          <div class="d-flex align-items-center cursor-pointer">
                            <div class="flex-shrink-0">
                              <img src="/img/users/user-demo-list-1.png" alt="..." class="img-user-detail rounded-circle">
                            </div>
                            <div class="flex-grow-1 d-flex flex-row ms-3">
                              <h5 class="mb-0"><strong>Poo pe</strong></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <div>
                          <div class="d-flex align-items-center cursor-pointer">
                            <div class="flex-shrink-0">
                              <img src="/img/users/user-demo-list-2.png" alt="..." class="img-user-detail rounded-circle">
                            </div>
                            <div class="flex-grow-1 d-flex flex-row ms-3">
                              <h5 class="mb-0"><strong>Taotao</strong></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">01/10/2564 15:00 น.</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">ร้านอาหาร POPO ปิ่นเกล้า</h5>
                      </div>
                      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0">จำนวนสมาชิก 4/5 คน</h5>
                      </div>
                      <div class="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center mb-xxl-0 mb-xl-2 mb-lg-2 mb-md-2 mb-2">
                        <h5 class="mb-0"><span class="badge rounded-pill bg-success-custom py-1 px-4 bg-status-badge">กำลังใช้งานอยู่</span></h5>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-12">
          <div class="row mx-0 p-3 bg-white rounded8px-top mb-2px mt-3">
            <div class="col-12">
              <div class="d-flex flex-lg-row flex-md-row flex-column align-items-center pb-3">
                <div class="flex-shrink-0 mb-lg-0 mb-md-3 mb-3">
                  <img src="/img/detail/user-demo.svg" class="w-custom-user-party" alt="...">
                </div>
                <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-0">
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-12">
                        <div class="d-flex flex-row align-items-center">
                          <h5 class="mb-0"><strong>Jean Jean</strong></h5>
                          <img src="/img/dashboard/vip.svg" class="mx-1 vip-custom-box" alt="">
                          <img src="/img/dashboard/identity.svg" class="mx-1 identity-custom-box" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <h6 class="mb-0 text-secondary">ID : 782178905</h6>
                  </div>
                  <div class="col-12 mb-2 d-flex align-items-center">
                    <span class="badge rounded-pill bg-danger px-4 py-1 h-custom-17"><strong><i class="fa fa-mars font-custom-7px"></i></strong></span>
                    <span class="badge rounded-pill bg-danger px-4 py-1 h-custom-17 ms-2"><strong>27</strong></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <h5><strong>ชื่อดีล : </strong>ร้านอาหาร POPO ปิ่นเกล้า</h5>
            </div>
            <div class="col-12">
              <h5><strong>วันที่ดีล : </strong>วันจันทร์ที่  16 พฤศจิกายน 2022</h5>
            </div>
            <div class="col-12">
              <h5><strong>เวลาดีล : </strong>12:00 น  -  14:00 น. </h5>
            </div>
            <div class="col-12">
              <h5><strong>สถานที่ : </strong>เซ็นทรัลปิ่นเกล้า 222 ถนนบรมราชชนนี แขวง อรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700</h5>
            </div>
            <div class="col-12">
              <h5><strong>รายละเอียด : </strong>-</h5>
            </div>
            <div class="col-12">
              <h5><strong>สมาชิกที่เข้าร่วมปารตี้</strong></h5>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col">
                  <div class="d-flex align-items-center cursor-pointer flex-column justify-content-center">
                    <div class="flex-shrink-0">
                      <img src="/img/users/user-demo-1.png" alt="..." class="img-user-detail rounded-circle">
                    </div>
                    <div class="flex-grow-1 d-flex flex-row ">
                      <h5 class="mb-0"><strong>Lita</strong></h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="d-flex align-items-center cursor-pointer flex-column justify-content-center">
                    <div class="flex-shrink-0">
                      <img src="/img/users/user-demo-2.png" alt="..." class="img-user-detail rounded-circle">
                    </div>
                    <div class="flex-grow-1 d-flex flex-row ">
                      <h5 class="mb-0"><strong>Plang</strong></h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="d-flex align-items-center cursor-pointer flex-column justify-content-center">
                    <div class="flex-shrink-0">
                      <img src="/img/users/user-demo-3.png" alt="..." class="img-user-detail rounded-circle">
                    </div>
                    <div class="flex-grow-1 d-flex flex-row ">
                      <h5 class="mb-0"><strong>Opor</strong></h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="d-flex align-items-center cursor-pointer flex-column justify-content-center">
                    <div class="flex-shrink-0">
                      <img src="/img/users/user-demo-4.png" alt="..." class="img-user-detail rounded-circle">
                    </div>
                    <div class="flex-grow-1 d-flex flex-row ">
                      <h5 class="mb-0"><strong>Moomin</strong></h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="d-flex align-items-center cursor-pointer flex-column justify-content-center">
                    <div class="flex-shrink-0">
                      <img src="/img/users/user-demo-5.png" alt="..." class="img-user-detail rounded-circle">
                    </div>
                    <div class="flex-grow-1 d-flex flex-row ">
                      <h5 class="mb-0"><strong>Palita</strong></h5>
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
</template>

<script>
export default {

}
</script>

<style scoped>
  .w-custom-user-party{
    width: 120px;
    height: 120px;
  }
  .margin-left-custom{
    margin-left: -8px;
  }
  .border-custom-user-party{
    border: 3px solid #fff;
  }

  .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
    color: var(--iq-main);
    background-color: unset;
  }
  .nav-link{
    color: var(--iq-dark-more-text);
  }
</style>