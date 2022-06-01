<template>
  <div class="head_title mb-2">
    <div class="row">
      <div class="col-12">
        <div>
          <h2><strong>{{title}}</strong></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "head_title",
  props: {
    title: String,
  }
};
</script>
