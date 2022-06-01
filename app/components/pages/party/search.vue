<template>
  <div class="search">
    <div class="row mt-lg-3 mt-md-2 mt-2">
      <div class="col-12 px-0">
        <div class="row gy-1 gx-2">
          <div class="col-xl-3 col-lg-5 col-md-6 col-12 mb-lg-0 mb-md-2 mb-2">
            <input type="text" class="form-control custom-border" placeholder="ค้นหา">
          </div>
          <div class="col-xl-2 col-lg-6 col-md-5 col-9 mb-lg-0 mb-md-2 mb-2">
            <div class="row g-2">
              <div class="col-12">
                <HotelDatePicker format="DD/MM/YYYY"/>
              </div>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-3 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
            <button class="btn btn-main px-3 w-100" type="submit"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
export default {
  name: "search",
  components: { HotelDatePicker },
  
};
</script>

