<template>
  <div class="search">
    <div class="row">
      <div class="col-12">
        <form @submit="onSubmit">
          <div class="row gy-1 gx-2">
            <div class="col-xl-3 col-lg-5 col-md-5 col-9 mb-lg-0 mb-md-2 mb-2">
              <input type="text" class="form-control custom-border" placeholder="ค้นหา ชื่อผู้รายงาน , ชื่อผู้ที่ถูกรายงาน" v-model="form.search">
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
        search:'',
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
