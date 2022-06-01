<template>
  <div class="mt-3">
    <div class="row mx-0">
      <div class="col-12">
        <div class="row p-3 bg-white rounded8px-top d-xl-block d-lg-none d-md-none d-none mb-2px">
          <div class="col-12">
            <div class="row">
              <div class="col-1">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>รหัสลูกค้า</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ชื่อ - นามสกุล</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>เบอร์โทร</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>อีเมล</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>วันที่ที่สมัครสมาชิก</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2" v-for="(listAdmin, index) in listAdmins" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{index+1}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>รหัสลูกค้า</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listAdmin.id}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ชื่อ - นามสกุล</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listAdmin.username}} {{listAdmin.lastname}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>เบอร์โทร</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listAdmin.tel}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>อีเมล</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listAdmin.email}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>วันที่ที่สมัครสมาชิก</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listAdmin.date}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0 d-flex align-items-center justify-content-center cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="badge rounded-pill bg-success-custom py-1 bg-status-badge" v-if="listAdmin.status === 1">ใช้งาน <i class="fa fa-angle-right ps-2"></i></span>
                  <span class="badge rounded-pill bg-danger-custom py-1 bg-status-badge" v-else-if="listAdmin.status === 2">บล็อก <i class="fa fa-angle-right ps-2"></i></span>
                </h5>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><button class="dropdown-item" type="button">ใช้งาน</button></li>
                  <li><button class="dropdown-item" type="button">บล็อก</button></li>
                  <li><button class="dropdown-item" type="button">ลบ</button></li>
                </ul>
                <img src="/img/manage/manage-user.svg" class="ms-3 vip-custom-box" alt="">
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
    <div class="modal fade" id="addAdmin" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-unset">
                  <h3 class="modal-title" id="exampleModalLabel"><strong>เพิ่มสิทธิ์</strong></h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <div class="row">
                    <div class="col-lg-10 col-md-12 col-12 mx-auto">
                      <div class="row">
                        <!-- <div class="col-12">
                          <div class="mb-3">
                            <label for="permission" class="form-label"><h5 class="mb-0"><strong>สิทธิ์การเข้าถึง*</strong></h5></label>
                            <select class="form-select" aria-label="Default select example" id="permission">
                              <option selected>กรุณาเลือกสิทธิ์การใช้งาน</option>
                              <option value="1">Admin Modeling</option>
                              <option value="2">Admin Application</option>
                            </select>
                          </div>
                        </div> -->
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="permissionName" class="form-label"><h5 class="mb-0"><strong>ชื่อ-นามสกุล</strong></h5></label>
                            <input type="text" class="form-control" id="permissionName" placeholder="Admin name">
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="permissionEmail" class="form-label"><h5 class="mb-0"><strong>อีเมล</strong></h5></label>
                            <input type="email" class="form-control" id="permissionEmail" placeholder="Prodution@advancedis.com">
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="permissionTel" class="form-label"><h5 class="mb-0"><strong>เบอร์โทรติดต่อ*</strong></h5></label>
                            <input type="text" class="form-control" id="permissionTel" placeholder="097 555 6666">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-unset pb-5 px-3">
                  <div class="col-lg-3 col-md-12 col-12 mx-auto">
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
import axios from 'axios'
export default {
  data(){
    return{
      listAdmins:[]
    }
  },
  methods: {
    getDataadmin() {
      axios.get('http://localhost:3001/setting/admin').then((res) => {
        this.listAdmins = res.data
        console.log(this.listAdmins);
      })
    },
  },
  mounted() {
    this.getDataadmin()
  },
}
</script>
