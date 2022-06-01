<template>
  <v-menu
    ref="menu"
    v-model="showDialog"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :hidden-details="tfHideDetails"
        :label="tfLabel"
        :prepend-icon="tfPrependIcon"
        class="pt-0 mt-2"
        readonly
        outlined
        dense
        v-bind="attrs"
        :value="value && $moment(value, dateFormat).format(timeDateFormat)"
        v-on="on"
      >
        <!-- Pass on all named slots -->
        <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />

        <!-- Pass on all scoped slots -->
        <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </v-text-field>
    </template>
    <v-date-picker
      v-if="showDialog"
      :value="value && $moment(value, dateFormat).format(`${$moment(value, dateFormat).get('year')}-MM-DD`)"
      full-width
      locale="th"
      @click:date="showDialog = false; value = $moment($event, `YYYY-MM-DD`).format(`${$moment($event).get('year')}-MM-DD`)"
      :max="max"
      :min="min"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    inDay: { type: Boolean, default: true },
    tfPrependIcon: { type: String, default: "event" },
    tfHideDetails: { type: Boolean, default: false },
    timeDateFormat: { type: String, default: "D MMM YY" },
    min: { type: String },
    max: { type: String },
    tfLabel: { type: String },
    dateFormat: { type: String },
    value: { type: String },
  },
  data() {
    return {
      showDialog: false,
      date: null,
    };
  },
  watch: {
    value(v, oldV) {
      if (v !== oldV) this.$emit("input", v);
    },
  },
  async mounted() {},
};
</script>
