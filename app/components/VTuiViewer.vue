<template>
  <v-flex v-show="value !== null">
    <div v-once ref="viewer" style="display: block"></div>
  </v-flex>
</template>

<script>
import $ from "jquery";
import _ from "lodash";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";

export default {
  props: {
    value: { type: String, default: null },
  },
  data() {
    return {};
  },
  watch: {
    value(v) {
      this.viewer.setMarkdown(v);
    },
  },
  async mounted() {
    const viewer = (this.viewer = new Viewer({
      el: this.$refs.viewer,
      initialValue: this.value,
    }));
  },
};
</script>

<style lang="scss">
.tui-editor-contents {
  font-size: 0.81rem;
}

h6 {
  font-size: 0.9rem;
}
h5 {
  font-size: 1rem;
}
h4 {
  font-size: 1.1rem;
}
h3 {
  font-size: 1.18rem;
}
h2 {
  font-size: 1.27rem;
}
h1 {
  font-size: 1.36rem;
}
</style>
