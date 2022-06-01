<template>
  <div>
    <v-text-field
      v-model="value"
      :placeholder="$t('_10bae873')"
      @input="checkPassword"
      outlined
      dense
      type="password"
      :rules="[
        (v) => !!v || $t('_f19367b6'),
        (v) => contains_eight_characters || $t('_305fb0e9'),
        (v) => contains_number || $t('_2f9d45ec'),
        (v) => contains_uppercase || $t('_37a47989'),
        (v) => contains_special_character || $t('_ea6e8ed7'),
      ]"
    >
      <template slot="prepend" v-if="prependLabel">
        {{ $t("_10bae873")
        }}<span v-if="required" class="text-danger" style="color: red">*</span>
      </template>
    </v-text-field>
    <v-progress-linear
      v-if="showScore"
      :color="
        scorePass >= 50 && valid_password ? 'light-blue' : 'pink lighten-1'
      "
      heigth="5"
      :value="scorePass"
    ></v-progress-linear>

    <v-text-field
      v-if="isConfirm"
      v-model="confirmPassword"
      class="mt-5"
      @input="confirmPass"
      :placeholder="$t('_5ce1f102')"
      outlined
      dense
      :rules="[
        (v) => !!v || $t('_5ce1f102'),
        (v) => confirm_pass || $t('_d5269b'),
      ]"
      type="password"
      ><template slot="prepend" v-if="prependLabel">
        {{ $t("_d5269b")
        }}<span v-if="required" class="text-danger" style="color: red">*</span>
      </template>
    </v-text-field>

    <div class="u-form-group u-form-phone u-form-group-4" v-if="showDetail">
      <ul>
        <li v-bind:class="{ is_valid: contains_eight_characters }">
          {{ $t("_ac9c7ce1") }}
        </li>
        <li v-bind:class="{ is_valid: contains_number }">
          {{ $t("_7c305c88") }}
        </li>
        <li v-bind:class="{ is_valid: contains_uppercase }">
          {{ $t("_363170b5") }}
        </li>
        <li v-bind:class="{ is_valid: contains_special_character }">
          {{ $t("_a416b496") }}
        </li>
        <li v-if="isConfirm" v-bind:class="{ is_valid: confirm_pass }">
          {{ $t("_5ce1f102") }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: { type: String },
    itemText: { type: String },
    itemValue: { type: String },
    showScore: { type: Boolean, default: false },
    showDetail: { type: Boolean, default: false },
    isConfirm: { type: Boolean, default: false },
    items: { type: Array, default: [] },
    url: { type: String },
    limit: { type: Number, default: 50 },
    prependLabel: { type: String },
    placeholder: { type: String },
    searchFields: { type: String },
    class: { type: String },
    outlined: { type: Boolean, default: true },
    required: { default: () => "กรุณาเลือก" },
  },
  data() {
    return {
      confirmPassword: "",
      scorePass: "",
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_special_character: false,
      confirm_pass: false,
    };
  },
  methods: {
    confirmPass() {
      this.confirm_pass = this.value == this.confirmPassword;
    },
    checkPassword() {
      this.password_length = this.value.length;
      this.scorePass = this.scorePassword(this.value);
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

      if (this.password_length > 8) {
        this.contains_eight_characters = true;
      } else {
        this.contains_eight_characters = false;
      }

      this.contains_number = /\d/.test(this.value);
      this.contains_uppercase = /[A-Z]/.test(this.value);
      this.contains_special_character = format.test(this.value);

      if (
        this.contains_eight_characters === true &&
        this.contains_special_character === true &&
        this.contains_uppercase === true &&
        this.contains_number === true
      ) {
        this.valid_password = true;
      } else {
        this.valid_password = false;
      }
    },
    scorePassword(pass) {
      var score = 0;
      if (!pass) return score;

      // award every unique letter until 5 repetitions
      var letters = new Object();
      for (var i = 0; i < pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
      }

      // bonus points for mixing it up
      var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
      };

      var variationCount = 0;
      for (var check in variations) {
        variationCount += variations[check] == true ? 1 : 0;
      }
      score += (variationCount - 1) * 10;

      return parseInt(score);
    },
  },
  watch: {
    value: {
      deep: true,
      handler(v) {
        this.$emit("input", v);
      },
    },
  },
  created() {},
};
</script>
<style lang="css">
.is_valid {
  color: rgba(136, 152, 170, 0.8);
  list-style: none;
  position: relative;
}
.is_valid:before {
  content: "\F012C";
  display: inline-block;
  font: normal normal normal 24px/1 "Material Design Icons";
  font-size: inherit;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  left: -20px;
}
</style>
