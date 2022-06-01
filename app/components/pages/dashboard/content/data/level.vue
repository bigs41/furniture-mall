<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="row mx-0 shadow-custom rounded8px">
          <div class="col-12">
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-top">
              <div class="col-12 ">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/img/dashboard/graph.svg" alt="..." />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mb-0"><strong>ลำดับเลเวล</strong></h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row py-3 px-xxl-3 px-xl-0 px-lg-0 px-md-3 px-3 bg-white rounded8px-bottom border-top-custom-2px">
              <div class="col-12">
                <div class="row">
                  <div
                    class="col-lg-4 col-md-6 col-12 d-flex justify-content-between mb-2"
                    v-for="(level, index) in levels"
                    :key="index"
                  >
                    <div class="d-flex flex-row align-items-center">
                      <h5 class="mb-0">
                        <span class="badge bg-secondary text-dark">{{level.lv}}</span>
                      </h5>
                      <h6 v-if="level.name === 'general' " class="mb-0 ps-2">ผู้ใช้ทั่วไป</h6>
                      <h6 v-else-if="level.name === 'silver' " class="mb-0 ps-2">ผู้ใช้เลเวล Silver</h6>
                      <h6 v-else-if="level.name === 'gold' " class="mb-0 ps-2">ผู้ใช้เลเวล Gold</h6>
                      <h6 v-else-if="level.name === 'emerald' " class="mb-0 ps-2">ผู้ใช้เลเวล Emerald</h6>
                      <h6 v-else-if="level.name === 'diamond' " class="mb-0 ps-2">ผู้ใช้เลเวล Diamond</h6>
                      <h6 v-else-if="level.name === 'wisdom' " class="mb-0 ps-2">ผู้ใช้เลเวล Wisdom</h6>
                    </div>
                    <div
                      class="d-flex align-items-center text-secondary"
                    >
                      <h6 class="mb-0">{{ level.count }}</h6>
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
  data() {
    return {
      levels: []
    }
  },
  methods:{
    async getLevel(){
      let temp = await this.$axios({
          url: "/users/summary/dashboardData",
          method: "get",
          headers: { Authorization: this.$config.api_key }
       })
       console.log(temp.data.data.levelCount);
       this.levels = temp.data.data.levelCount
    }
  },
  mounted() {
    this.getLevel()
  },
}
</script>


<style scoped>
  .status-color-coin{
    width: 25px;
    height: 6px;
    border-radius: 10px;
    background-color: #AD3D93;
  }
  .status-color-withdraw{
    width: 25px;
    height: 6px;
    border-radius: 10px;
    background-color: #D00038;
  }
  .border-top-custom-2px{
    border-top: 2px solid #f1f5f7;
  }
</style>