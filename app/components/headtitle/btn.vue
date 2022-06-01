<template>
  <div class="head_title_btn mb-2">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <div>
          <h2><strong>{{title}}</strong></h2>
        </div>
        <div>
          <nuxt-link :to="link" class="btn btn-main"><h5 class="mb-0">{{btntitle}}</h5></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "head_title_btn",
  props: {
    title: String,
    link: String,
    btntitle: String
  }
};
</script>
