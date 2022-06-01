<template>
  <v-menu
    ref="birth"
    v-model="birth"
    :close-on-content-click="false"
    :return-value.sync="value"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="computedDateFormattedMomentjs"
        :prepend-icon="tfPrependIcon"
        readonly
        v-bind="attrs"
        v-on="on"
        outlined
        :rules="rules"
        :placeholder="placeholder"
        dense
        ></v-text-field
      >
    </template>
    <v-date-picker
      ref="picker"
      v-model="value"
      locale="th"
      no-title
      scrollable
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="birth = false"> ยกเลิก </v-btn>
      <v-btn text color="primary" @click="$refs.birth.save(value)">
        ยืนยัน
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import moment from "moment";
export default {
  props: {
    tfPrependIcon: { type: String, default: "event" },
    label: { type: String, required: true, default: "วันเกิด" },
    placeholder: {
      type: String,
      required: true,
      default: "วันเกิด",
    },
    rules: { type: Array, required: true, default: [] },
    value: { type: Array, required: true },
  },
  data() {
    return {
      birth: false,
      menu: false,
    };
  },
  async mounted() {},
  watch: {
    birth(val) {
      if (!this.value) {
        val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
      }
    },
    value: {
      deep: true,
      handler(v) {
        this.$emit("input", v);
      },
    },
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.value ? moment(this.value).format("Do MMMM YYYY") : "";
    },
  },
};
</script>
