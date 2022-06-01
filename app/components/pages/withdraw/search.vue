<template>
  <div class="search px-0">
      <div class="col-12">
        <form @submit="onSubmit">
          <div class="row gy-1 gx-2">
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-3 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <select class="form-select custom-border position-relative arrow-down" aria-label="Default select example" v-model="form.action">
                <option value="null" selected>Actions</option>
                <option value="1">โอนเงินสำเร็จ</option>
                <option value="2">เกิดปัญหาการโอน</option>
              </select>
            </div>
            <div class="col-xxl-2 col-xl-3 col-lg-6 col-md-4 col-12 mb-xl-0 mb-lg-2 mb-md-2 mb-2">
              <div class="row g-2">
                <div class="col-12">
                  <HotelDatePicker format="DD/MM/YYYY"/>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-5 col-md-4 col-9 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <select class="form-select affiliation" aria-label="Default select example" v-model="form.status">
                <option value="null" selected>ทั้งหมด</option>
                <option value="1">รอดำเนินการ</option>
                <option value="2">โอนเงินสำเร็จ</option>
                <option value="3">เกิดปัญหาการโอน</option>
              </select>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-1 col-3 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <button class="btn btn-main px-3 w-100" type="submit"><i class="fa fa-search"></i></button>
            </div>

            <!-- <div class="col-12">
              <pre>{{form}}</pre>
            </div> -->
          </div>
        </form>
      </div>
  </div>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
export default {
  name: "search",
  components: { HotelDatePicker },
  data(){
    return{
      form:{
        action: null,
        date: null,
        status: null
      }
    }
  },
  methods:{
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  }
};
</script>

<style scoped>
  .form-select.custom-border{
    border: 1px solid var(--iq-main) !important;
    background-color: var(--iq-main) !important;
    color: #fff;
  }
  .arrow-down{
   background-image: url("/img/arrow-down.png");
  }
</style>
