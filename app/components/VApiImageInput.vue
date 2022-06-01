<template>
<div class="img-input">
  <v-file-input
    :accept="accept"
    :label="label"
    :loading="loading"
    :messages="messages"
    :multiple="multiple"
    :placeholder="placeholder"
    :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon"
    :rules="rules"
    :type="type"
    @click:clear="
      files = [{}];
      fileBase64 = null;
      $forceUpdate();
    "
    color="primary"
    outlined
    ref="fileInput"
    v-model="files"
  >
    <template v-slot:selection>
      <template v-if="fileBase64">
        <v-img
          contain
          :aspect-ratio="aspectRatio"
          :src="fileBase64"
          :width="width"
          :height="height"
          :max-width="550"
        />
      </template>
      <v-img
        v-else
        :src="src"
        contain
        :aspect-ratio="aspectRatio"
        :width="width"
        :height="height"
        :max-width="550"
      />
    </template>
  </v-file-input>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    accept: { type: String, default: "image/*" },
    aspectRatio: { type: String, default: 16 / 9 },
    height: { type: String },
    label: { type: String },
    loading: { type: Boolean },
    messages: { type: String },
    multiple: { type: Boolean },
    placeholder: { type: String },
    prependIcon: { type: String, default: "" },
    prependInnerIcon: { type: String },
    rules: { type: Array },
    src: { type: String },
    type: { type: String },
    uploadUrl: { type: String, required: true },
    value: { type: File },
    width: { type: String },
  },
  data() {
    return {
      files: [{}],
      fileBase64: null,
    };
  },
  methods: {
    readURL(file) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader();

        reader.onload = (e) => {
          resolve(e.target.result);
        };

        reader.readAsDataURL(file); // convert to base64 string
      });
    },
  },
  computed: {
    ...mapState(["setting"]),
  },
  watch: {
    files: {
      deep: true,
      async handler(files) {
        // if (!files[0]) {
        //   files[0] = {};
        //   this.base64 = null;
        // }

        const file = files;
        this.value = file;
        this.$emit("input", file);

        if (file instanceof File && /^image\//gim.test(file.type)) {
          this.loading = true;
          this.fileBase64 = await this.readURL(file);
          this.loading = false;
          this.$refs.fileInput && this.$refs.fileInput.$forceUpdate();
        }
      },
    },
  },
  async mounted() {
    if (!!this.value) {
      this.files = this.value;
    }
  },
};
</script>
<style lang="scss" scoped>
.img-input ::v-deep{
  .v-file-input__text{
    justify-content: center !important;
  }
} 
</style>