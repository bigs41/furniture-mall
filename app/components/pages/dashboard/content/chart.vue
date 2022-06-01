<template>
  <div>
    <div class="row">
      <div class="col-12 mt-3">
        <div class="row mx-0 shadow-custom rounded8px">
          <div class="col-12">
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-top">
              <div class="col-12">
                <div class="row">
                  <div class="col-xl-2 col-lg-2 col-md-3 col-6 mb-lg-0 mb-md-0 mb-3 d-flex align-items-center order-lg-1 order-md-1 order-1">
                    <h5 class="mb-0"><strong>Analytics Data</strong></h5>
                  </div>
                  <div class="col-xl-8 col-lg-8 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3 d-flex align-items-center justify-content-center order-lg-2 order-md-2 order-3">
                    <!-- <div class="row g-2 w-100">
                      <div class="col-6 d-flex flex-row align-items-center justify-content-end">
                        <div class="status-color-coin me-3"></div>
                        <h6 class="mb-0">จำนวนยอดเหรียญ</h6>
                      </div>
                      <div class="col-6 d-flex flex-row align-items-center">
                        <div class="status-color-withdraw me-3"></div>
                        <h6 class="mb-0">จำนวนยอดถอนเงิน</h6>
                      </div>
                    </div> -->
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-3 col-6 mb-lg-0 mb-md-0 mb-3 d-flex align-items-center order-lg-3 order-md-3 order-2">
                    <input type="date" class="form-control">
                  </div>
                </div>
              </div>
            </div>
            <div class="row p-3 bg-white rounded8px-bottom mt-2px">
              <div class="col-12">
                <!-- <img src="/img/dashboard/graph-demo.svg" class="w-100" alt=""> -->
                <AreaChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaChart from "/components/pages/dashboard/AreaChart.vue";
export default {
  components: {
    AreaChart,
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    }
  },
}
</script>
