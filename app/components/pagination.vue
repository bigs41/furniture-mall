<template>
  <div>
    <div class="row">
      <!-- {{skip}} -->
      <div class="col-12">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{'disabled' : skip == 0}">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                >ก่อนหน้า</a
              >
            </li>
            <li class="page-item" v-for="(value,key) in totalPage" :key="key" :class="{'active' : key==skip}" @click="updatePage(key)">
              <a class="page-link" href="#">{{value}}</a>
            </li>
            <li class="page-item" :class="{'disabled' : skip == totalPage-1}">
              <a class="page-link" href="# ">ถัดไป</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    totalPage:{
      type: Number,
      default: 7
    },
    skip:{
      type: Number,
      default: 0
    }
  },
  methods:{
    updatePage(page){
      this.skip = page>=0 && page <this.totalPage ? page : skip
    }
  },
  watch:{
    skip(){
        this.$emit('update:skip',this.skip)
    }
  }
}
</script>

<style scoped>
.page-link {
  background-color: unset;
  border: unset;
  color: #000;
}
.page-item.disabled .page-link {
  background-color: unset;
  border: unset;
}
</style>