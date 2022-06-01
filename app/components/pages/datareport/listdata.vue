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
                <h5 class="mb-0"><strong>ชื่อผู้รายงาน</strong></h5>
              </div>
              <div class="col-3">
                <h5 class="mb-0"><strong>รายงานเรื่อง</strong></h5>
              </div>
              <div class="col-3">
                <h5 class="mb-0"><strong>รายงานเมื่อ วันที่/เวลา</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ชื่อผู้ที่ถูกรายงาน</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong></strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2" v-for="(listReport, index) in listReports" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <nuxt-link :to="`/data-user/${listReport.id}`">
                  <h5 class="mb-0 text-dark">{{listReport.id}}</h5>
                </nuxt-link>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ชื่อผู้รายงาน</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <nuxt-link :to="`/data-user/${listReport.id}`">
                  <h5 class="mb-0 text-dark">{{listReport.username}}</h5>
                </nuxt-link>
              </div>
              <div class="col-lg-6 col-md-6 col-4 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>รายงานเรื่อง</strong></h5>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-8 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <nuxt-link :to="`/data-user/${listReport.id}`">
                  <h5 class="mb-0 text-dark">{{listReport.report}}</h5>
                </nuxt-link>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>รายงานเมื่อ วันที่/เวลา</strong></h5>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <nuxt-link :to="`/data-user/${listReport.id}`">
                  <h5 class="mb-0 text-dark">{{listReport.date}}</h5>
                </nuxt-link>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ชื่อผู้ที่ถูกรายงาน</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <nuxt-link :to="`/data-user/${listReport.id}`">
                  <h5 class="mb-0 text-dark">{{listReport.userreport}}</h5>
                </nuxt-link>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จัดการ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-center justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <img :src="`/img/manage${listReport.icon}`" class="mx-1 vip-custom-box" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      listReports:[],
    }
  },
  methods: {
    getDatareport() {
      axios.get('http://localhost:3001/data-report').then((res) => {
        this.listReports = res.data
        console.log(this.listReports);
      })
    },
  },
  mounted() {
    this.getDatareport()
  },
}
</script>
