<template>
  <div class="search px-0">
      <div class="col-12">
        <form @submit="onSubmit">
          <div class="row gy-1 gx-2">
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-2 col-12 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <select class="form-select custom-border position-relative arrow-down" aria-label="Default select example" v-model="form.action">
                <option value="null" selected>Actions</option>
                <option value="1">อนุมัติการสมัคร</option>
                <option value="2">บล็อคการใช้งาน</option>
              </select>
              
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-5 col-12 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <div class="row g-2">
                <div class="col-6">
                  <input type="text" class="form-control custom-border" placeholder="ค้นหา รหัสผู้ใช้ , ชื่อผู้ใช้ , อีเมล , เบอร์ติดต่อ" v-model="form.search">
                </div>
                <div class="col-6">
                  <select class="form-select affiliation" aria-label="Default select example" v-model="form.modeling">
                    <option value="null" selected>สังกัด Modeling</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-5 col-md-4 col-9 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <select class="form-select affiliation" aria-label="Default select example" v-model="form.verify">
                <option value="null" selected>ทั้งหมด</option>
                <option value="1">ยื่นยันตัวตนแล้ว</option>
                <option value="2">ยังไม่ยืนยันตัวตน</option>
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
export default {
  name: "search",
  data(){
    return{
      form:{
        action: null,
        search: '',
        modeling: null,
        verify: null
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
  
  .arrow-down{
   background-image: url("/img/arrow-down.png");
  }
</style>
