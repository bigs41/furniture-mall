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
              <div class="col-6">
                <h5 class="mb-0"><strong>หัวข้อกิจกรรม</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>จำนวนคนดู</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>วันที่ประกาศกิจกรรม</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2" v-for="(listActivity, index) in listActivitys" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{index+1 }}</h5>
              </div>
              <div class="col-xl-6 col-lg-4 col-md-4 col-12 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>หัวข้อกิจกรรม</strong></h5>
              </div>
              <div class="col-xl-6 col-lg-8 col-md-8 col-12 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listActivity.title}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จำนวนคนดู</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listActivity.view}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>วันที่ประกาศกิจกรรม</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 class="mb-0">{{listActivity.date}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>สถานะ</strong></h5>
              </div>
              <div class="col-xl-1 col-lg-6 col-md-6 col-6 d-flex justify-content-xl-between justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 align-items-center">
                <h5 v-if="listActivity.status === 1" class="mb-0">Active</h5>
                <h5 v-else class="mb-0">Inactive</h5>
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
      listActivitys:[]
    }
  },
  methods: {
    getDataactivity() {
      // axios.get('http://localhost:3001/activity').then((res) => {
      //   this.listActivitys = res.data
      //   console.log(this.listActivitys);
      // })
    },
  },
  mounted() {
    this.getDataactivity()
  },
}
</script>
