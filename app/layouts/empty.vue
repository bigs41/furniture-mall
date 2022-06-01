<template>
  <v-app dark>
    <flash-message class="flashpool"></flash-message>
    <main-app-bar class="" :scrollPosition.sync="scrollPosition" />
    <v-container
      fluid
      class="ma-0"
      style="height: 100vh; padding: 0 !important"
      v-scroll.self="updateScroll"
      scroll-target="main"
    >
      <div
        id="main"
        style="height: 100%;border-radius: inherit"
      >
        <Nuxt
          v-if="
            _.get($store, 'state.permission.domains_permissions.enable', true)
          "
        />
        <V403 v-else :message="_.get($store, 'state.permission.message', '')" />
        <VConfirm />
        <VPopup />
        <main-footer />
      </div>
    </v-container>
  </v-app>
</template>

<script>
import axios from "~/utils/axios";
export default {
  middleware: 'authenticated',
  data() {
    return {
      scrollPosition: null
      // clipped: false,
      // drawer: false,
      // fixed: false,
      // items: [
      //   {
      //     icon: "mdi-apps",
      //     title: "Welcome",
      //     to: "/",
      //   },
      //   {
      //     icon: "mdi-chart-bubble",
      //     title: "Moji",
      //     to: "/moji",
      //   },
      //   {
      //     icon: "mdi-chart-bubble",
      //     title: "Inspire",
      //     to: "/inspire",
      //   },
      // ],
      // miniVariant: false,
      // right: true,
      // rightDrawer: false,
      // title: "Vuetify.js",
    };
  },
  async mounted() {
    // window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll(e) {
      this.scrollPosition = e.target.scrollTop;
      console.log(e.target.scrollTop);
    }
  }
};
</script>
<style>
body{
  background: #f1f5f7;
}
</style>
<style scoped>
.flashpool {
  position: fixed;
  top: 10%;
  right: 20px;
  max-height: 400px;
  width: 200px;
  -webkit-perspective: 400px;
  perspective: 400px;
  z-index: 9999999;
}
.flashpool >>> .flash__wrapper .flash__message {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12) !important;
}
</style>
