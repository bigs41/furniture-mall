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
              <div class="col-2">
                <h5 class="mb-0"><strong>ชื่อผู้ที่ถูกบล็อก</strong></h5>
              </div>
              <div class="col-5">
                <h5 class="mb-0"><strong>ถูกบล็อกเรื่อง</strong></h5>
              </div>
              <div class="col-3">
                <h5 class="mb-0"><strong>ถูกบล็อกเมื่อวันที่</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong></strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2" v-for="(listBlock, index) in listBlocks" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0 text-dark">{{listBlock.id}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ชื่อผู้รายงาน</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0 text-dark">{{listBlock.username}}</h5>
              </div>
              <div class="col-lg-6 col-md-6 col-4 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>รายงานเรื่อง</strong></h5>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-6 col-8 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0 text-dark">{{listBlock.report}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>รายงานเมื่อ วันที่/เวลา</strong></h5>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0 text-dark">{{listBlock.date}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จัดการ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-center justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <button class="btn btn-sm btn-danger form-control"  data-bs-toggle="modal" data-bs-target="#blockUser">เลิกบล็อก</button>
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
    <div class="modal fade" id="blockUser" tabindex="-1">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-unset pb-0">
                  <h3 class="modal-title" id="exampleModalLabel"><strong>ยกเลิกบล็อกการใช้งาน</strong></h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <h5 class="mb-0">คุณต้องการยกเลิกการบล็อกหรือไม่</h5>
                </div>
              </div>
              <div class="modal-footer border-unset pb-3 px-3">
                  <div class="col-12 mx-auto">
                    <div class="row g-2">
                      <div class="col-6">
                        <button type="button" class="btn form-control btn-main" data-bs-dismiss="modal">ยกเลิกบล็อก</button>
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
import axios from 'axios'
export default {
  data(){
    return{
      listBlocks:[]
    }
  },
  methods: {
    getDatablock() {
      axios.get('http://localhost:3001/data-block').then((res) => {
        this.listBlocks = res.data
        console.log(this.listBlocks);
      })
    },
  },
  mounted() {
    this.getDatablock()
  },
}
</script>
