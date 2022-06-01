<template>
  <div class="search">
    <div class="row">
      <div class="col-12">
        <form @submit="onSubmit">
          <div class="row gy-1 gx-2">
            <v-col v-for="(item, index) in form" :key="index">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">{{item.text}}</span>
                  <input v-if="item.type=='text'" type="text" class="form-control custom-border" v-model="search[item.value]">
                  <select v-if="item.type=='select'" class="form-select affiliation" aria-label="Default select example" v-model="search[item.value]">
                    <option value="null" selected>ทั้งหมด</option>
                    <option v-for="(option, index) in item.options" :key="index" :value="option.value">{{option.text}}</option>
                  </select>
              </div>
            </v-col>
            <div class="col-xl-1 col-lg-1 col-md-1 col-3 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <button class="btn btn-main px-3 w-100" type="submit"><i class="fa fa-search" style="font-size:11px;margin-right:1px;"></i> ค้นหา</button>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-1 col-3 mx-xl-0 mb-lg-2 mb-md-2 mb-2">
              <button class="btn btn-main px-3 w-100" type="reset" ><i class="fa fa-repeat" style="font-size:11px;margin-right:1px;"></i>ยกเลิก</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  props: {
    value: { type: Object, default: () => ({}) },
    onClick: { type: Function},
    form: {
      type: Array,
      default:  [
        {
          text: "search",
          value: "search",
          type: "text",
        }
      ]
    }
  },
  data(){
    return{
      search: {},
    }
  },
  methods:{
    onSubmit(event) {
      event.preventDefault()
      const input = JSON.parse(JSON.stringify(this.search))
      try {
        this.$emit('input', input)
      } catch (error) {
        
      }
      try {
        this.onClick(input);
      } catch (error) {
        
      }
    },
  },
  mounted(){
    if (!this.empty(this.value)) {
      this.search = JSON.parse(JSON.stringify(this.value));
    }
  }
};
</script>
<style lang="scss" scoped>
.search ::v-deep{
  .input-group{
    .input-group-text{
      background-color: transparent !important;
      border: none !important;
      border-radius: 0;
      color: #000;
    }
    .form-control,.form-select{
      border-radius: 5px !important;
    }
  }
}
</style>