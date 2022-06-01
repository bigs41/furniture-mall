<template>
  <div class="search">
    <div class="row">
      <div class="col-12">
        <form @submit="onSubmit">
          <div class="row gy-1 gx-2">
            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-7 col-12 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <input type="text" class="form-control custom-border" placeholder="ค้นหาชื่อผู้ใช้งาน , อีเมล , เบอร์ติดต่อ" v-model="form.search">
            </div>
            <div class="col-xl-2 col-lg-5 col-md-4 col-9 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <select class="form-select affiliation" aria-label="Default select example" v-model="form.block">
                <option value="null" selected>ทั้งหมด</option>
                <option value="1">ใช้งาน</option>
                <option value="2">บล็อก</option>
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
  </div>
</template>

<script>
export default {
  name: "search",
  data(){
    return{
      form:{
        search: '',
        block: null
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