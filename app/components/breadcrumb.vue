<template>
  <div class="breadcrumb-nav">
    <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item" v-for="(data,key) in getList" :key="key" :class="{'active': getList.length-1 == key }">
          <h4 v-if="getList.length-1 == key"  class="mb-0"><strong>{{data.text}}</strong></h4>
          <h4 v-else class="mb-0">{{data.text}}</h4>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "breadcrumb-nav",
  props: {
    text: String,
  },
  computed: {
    getList () {
      return this.$store.state.breadcrumb.list
    }
  },
};
</script>
<style>
.breadcrumb-item+.breadcrumb-item{
  display: flex;
  padding-left: 25px;
}

.breadcrumb-item+.breadcrumb-item h4{
  padding-left: 15px;
}
.breadcrumb-item+.breadcrumb-item::before{
  font: normal normal normal 14px/1 FontAwesome;
  content: "\f054" !important;
  padding-top: 5px !important;
}

</style>