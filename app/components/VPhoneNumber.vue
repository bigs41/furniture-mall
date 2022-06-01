<template>
  <v-text-field
    v-model="phoneNumber"
    v-mask="'## #### ####'"
    :label="label"
    outlined
    class="form-control"
    :placeholder="placeholder"
    :rules="rules"
    autocomplete="none"
    dense
  >
    <template slot="prepend" v-if="prependLabel">
      {{ prependLabel
      }}<span v-if="required" class="text-danger" style="color: red">*</span>
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: {
    value: { type: String },
    placeholder: { type: String, default: 'Phone Number' }, 
    label: { type: String, default: "" /*$t("_b77ad6f7")*/ },
    prependLabel: { type: String },
    required: { type: String, default: null },
    rules: {
      type: Array,
      default: () => [
        (v) => v.length == 0 || v.length == 12 || "Invalid phone number",
      ],
    },
    appendRules: { type: Array },
  },
  data() {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    updateRules() {
      if (Array.isArray(this.appendRules))
        this.rules.append(...this.appendRules);
    },
    update() {
      if (this.value)
        this.phoneNumber = this.value.replace(
          /(\d{2})(\d{4})(\d{4})/,
          "$1 $2 $3"
        );
    },
    updateValue() {
      this.$emit("input", this.phoneNumber.replace(/ /g, ""));
    },
    updateRequired(v, o) {
      if (o) this.rules.shift();

      if (this.required !== null) {
        if (this.required === "") {
          this.rules.unshift((v) => !!v || $t("_12fcf258"));
        } else {
          this.rules.unshift((v) => !!v || this.required);
        }
      }
    },
  },
  watch: {
    phoneNumber(v, o) {
      this.updateValue();
    },
    appendRules() {
      this.appendRulesFn();
    },
    required(v, o) {
      this.updateRequired(v, o);
    },
    value: {
      deep: true,
      handler(v) {
        this.update();
        this.$emit("input", v);
      },
    },
  },
  async mounted() {
    this.updateRules();
    this.update();
    this.updateRequired(this.required);
  },
};
</script>
