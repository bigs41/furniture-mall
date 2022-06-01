<template>
  <div class="mt-3">
    <div class="row g-3">
      <div class="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-12">
        <div class="row mx-0 p-3 bg-white rounded8px-top d-xl-block d-lg-none d-md-none d-none mb-2px">
          <div class="col-12">
            <div class="row">
              <div class="col-2">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ราคาขาย</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ส่วนลด</strong></h5>
              </div>
              <div class="col-2">
                <h5 class="mb-0"><strong>ราคาขายสุทธิ</strong></h5>
              </div>
              <div class="col-3">
                <h5 class="mb-0"><strong>จำนวนเพชร</strong></h5>
              </div>
              <div class="col-1">
                <h5 class="mb-0"><strong></strong></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-0 p-3 bg-white" v-for="(diamond, index) in diamonds" :key="index">
          <div class="col-12">
            <div class="row">
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ลำดับ</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
                <h5 class="mb-0">{{index+1}}</h5>
                <div class="text-center w-custom-diamond-100">
                  <img :src="`/img/coin/setting-coin${diamond.img}`" alt="">
                </div>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ราคาขาย</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
                <h5 class="mb-0">{{diamond.price}} บาท</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ส่วนลด</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2">
                <h5 class="mb-0">{{diamond.discount}}</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>ราคาขายสุทธิ</strong></h5>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 ">
                <h5 class="mb-0">{{diamond.pricetotal}} บาท</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จำนวนเพชร</strong></h5>
              </div>
              <div class="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 ">
                <h5 class="mb-0">{{diamond.diamond}} เพชร</h5>
              </div>
              <div class="col-6 d-xl-none d-lg-block d-block d-block">
                <h5 class="mb-0"><strong>จัดการ</strong></h5>
              </div>
              <div class="col-xxl-1 col-xl-2 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-end mb-xl-0 mb-lg-2 mb-md-2 mb-2 ">
                <nuxt-link to="/setting/coin/edit/1" class="btn btn-outline-secondary form-control"><strong>แก้ไข</strong></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-0 p-3 bg-white rounded8px-bottom">
          <div class="col-12 text-center ">
            <nuxt-link to="/setting/coin/add">
              <h5 class="mb-0 text-dark"><strong>+ เพิ่มราคาเพชร</strong></h5>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-12">
        <div class="row mx-0 py-3 px-0 mb-2px">
          <h5 class="mb-0"><strong>หน้าตัวอย่าง</strong></h5>
        </div>
        <div class="row mx-0 p-3 bg-custom-demo rounded8px">
          <div class="col-lg-7 col-md-7 col-12 mx-auto">
            <div class="row py-3 bg-white">
              <div class="col-12">
                <img src="/img/setting/device-demo.svg" class="w-100" alt="">
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6 d-flex align-items-center">
                    <h6 class="mb-0 text-secondary">เหรียญของคุณ</h6>
                  </div>
                  <div class="col-6 d-flex align-items-center justify-content-end">
                    <h5 class="mb-0 text-main"><strong>10,000.00</strong></h5>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <hr class="w-100 my-2">
              </div>
              <div class="col-12">
                <div class="row mx-0 px-1 py-2 bg-custom-demo-list rounded8px mb-2"  v-for="(diamond, index) in diamonds" :key="index">
                  <div class="col-12 d-flex justify-content-between">
                    <div>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 text-center w-icon-custom-diamond">
                          <img :src="`/img/coin/setting-coin${diamond.img}`" alt="...">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <div class="col-12">
                            <h5 class="mb-0"><strong>{{diamond.price}} เหรียญ</strong></h5>
                            <img src="/img/setting/icon-baht.svg" class="w-20" alt="">
                            <small class="text-secondary">50.00</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <button class="btn btn-main btn-sm px-3 rounded8px">ซื้อ</button>
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
import axios from 'axios'
export default {
  data(){
    return{
      diamonds:[]
    }
  },
  methods: {
    getDatadiamond() {
      axios.get('http://localhost:3001/setting/coin').then((res) => {
        this.diamonds = res.data
        console.log(this.diamonds);
      })
    },
  },
  mounted() {
    this.getDatadiamond()
  },
}
</script>

<style scoped>
  .bg-custom-demo{
    background-color: #dfdfdf !important;
  }
  .bg-custom-demo-list{
    background-color: #f1f1f1 !important;
  }
  .w-icon-custom-diamond{
    width: 50px;
  }
  .w-20{
    width: 20%;
  }
  
</style>