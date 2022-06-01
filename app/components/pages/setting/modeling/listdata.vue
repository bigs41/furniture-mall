<template>
  <div class="mt-3">
    <div class="row mx-0">
      <!-- <div class="col-12 mb-3">
        <div class="row">
          <div class="col-12 px-0">
            <table class="table mb-0 rounded8px-top">
              <thead class="bg-white border-custom-table rounded8px-top">
                <tr class="rounded8px-top">
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>ลำดับ</strong></h5></th>
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>สังกัด Modeling</strong></h5></th>
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>Modeling Name</strong></h5></th>
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>เบอร์โทร</strong></h5></th>
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>อีเมล</strong></h5></th>
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>ได้รับสิทธิ์เมื่อวันที่</strong></h5></th>
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>จำนวน User ในสังกัด</strong></h5></th>
                  <th class="bg-unset py-3" scope="col"><h5 class="mb-0"><strong>สถานะ</strong></h5></th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr>
                  <td data-label="#">1</td>
                  <td data-label="สังกัด Modeling">GAMDANG</td>
                  <td data-label="Modeling Name">กฤษฎา โปรดักชั่น</td>
                  <td data-label="เบอร์โทร">099-522-9556</td>
                  <td data-label="อีเมล">Production@advencedis.co.th</td>
                  <td data-label="ได้รับสิทธิ์เมื่อวันที่">12 ส.ค. 2022 00:00</td>
                  <td data-label="จำนวน User ในสังกัด">100 คน</td>
                  <td data-label="สถานะ">
                    <div class="d-flex flex-row justify-content-xl-center justify-content-lg-end justify-content-md-end justify-content-end">
                      <div>
                        <h5 class="mb-0 d-flex align-items-center justify-content-center cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="badge rounded-pill bg-danger-custom py-1 bg-status-badge">บล็อก <i class="fa fa-angle-right ps-2"></i></span>
                        </h5>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li><button class="dropdown-item" type="button">ใช้งาน</button></li>
                          <li><button class="dropdown-item" type="button">บล็อก</button></li>
                          <li><button class="dropdown-item" type="button">ลบ</button></li>
                        </ul>
                      </div>
                      <div>
                        <img src="/img/manage/manage-user.svg" class="ms-3 vip-custom-box" alt="">
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> -->
      <div class="col-12">
        <div class="row p-3 bg-white rounded8px-top d-xl-block d-lg-none d-md-none d-none mb-2px">
          <div class="col-12">
            <div class="row">
              <div class="col-1">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>สังกัด Modeling</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>Modeling Name</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>เบอร์โทร</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>อีเมล</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ได้รับสิทธิ์เมื่อวันที่</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>จำนวน User ในสังกัด</strong></h5>
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
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{ index+1 }}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สังกัด Modeling</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listModeling.affiliation}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>Modeling Name</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listModeling.username}} Modeling</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>เบอร์โทร</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listModeling.tel}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>อีเมล</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listModeling.email}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ได้รับสิทธิ์เมื่อวันที่</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listModeling.date}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จำนวน User ในสังกัด</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0">{{listModeling.amount}} คน</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center ">
                <h5 class="mb-0 d-flex align-items-center justify-content-center cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="badge rounded-pill bg-danger-custom py-1 bg-status-badge" v-if="listModeling.status === 1">บล็อก <i class="fa fa-angle-right ps-2"></i></span>
                  <span class="badge rounded-pill bg-success-custom py-1 bg-status-badge" v-else-if="listModeling.status === 2">ใช้งาน <i class="fa fa-angle-right ps-2"></i></span>
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
    <div class="modal fade" id="addModeling" tabindex="-1">
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
                            <label for="permissionName" class="form-label"><h5 class="mb-0"><strong>ชื่อสังกัด</strong></h5></label>
                            <input type="text" class="form-control" id="permissionName" placeholder="ชื่อสังกัด">
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="permissionNameModeling" class="form-label"><h5 class="mb-0"><strong>Modeling Name*</strong></h5></label>
                            <input type="text" class="form-control" id="permissionNameModeling" placeholder="Modeling Name">
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
      listModelings:[]
    }
  },
  methods: {
    getDatamodeling() {
      axios.get('http://localhost:3001/setting/modeling').then((res) => {
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


<style scoped>
/* table tr{
  background-color: unset !important;
  border: unset;
}
table{
  border: unset;
}
.table>:not(caption)>*>*{
  border-bottom-width: 0px !important;
} */
</style>