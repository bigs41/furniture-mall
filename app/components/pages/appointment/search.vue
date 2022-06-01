<template>
  <div class="search-identity">
    <div class="row">
      <div class="col-12">
        <div class="row gy-1 gx-2">
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6 mb-lg-0 mb-md-2 mb-2">
            <input type="text" class="form-control custom-border" placeholder="ค้นหา">
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-6 mb-lg-0 mb-md-2 mb-2">
            <input type="text" class="form-control custom-border" placeholder="เพื่อนทานอาหาร">
          </div>
          <div class="col-xl-2 col-lg-5 col-md-4 col-9 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
            <select class="form-select affiliation" aria-label="Default select example">
              <option value="null" selected>ทั้งหมด</option>
              <option value="1">กำลังนัดหมาย</option>
              <option value="2">นัดหมายแล้ว</option>
            </select>
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
export default {
  name: "search-identity",
  
};
</script>

