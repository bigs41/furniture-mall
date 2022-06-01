<template>
  <!-- :style="{
      'background-color':
        scrollPosition < changeColorOnScrollValue ? 'transparent' : 'white',
      'box-shadow':
        scrollPosition < changeColorOnScrollValue
          ? 'none'
          : '0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%) !important',
    }" -->
    <div>
        <v-app-bar
            absolute
            height="63px"
            class="align-center ma-0 pa-0"
            
            elevation="0"
        >
            <v-text-field
            placeholder="search"
            prepend-icon="mdi-magnify"
            solo
            dense
          ></v-text-field>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
<!-- 
            <v-tabs
            class="d-none d-lg-flex justify-end"
            :style="{ 'font-size': '16px' }"
            >
            <v-tabs-slider
                color="transparent"
            ></v-tabs-slider>
            <v-tab
                v-for="b in menu"
                :key="b"
                v-text="b.name"
                :to="b.to"
                :disabled="b.disable"
                style="color: #ffffff"
                >Item One</v-tab
            >
            </v-tabs> -->

            <!-- <v-toolbar-items class="d-flex justify-end hidden-md-and-down">
            <v-btn v-for="b in token ? menu : []" :key="b" v-text="b.name" :to="b.to" text>{{
                b.name
            }}</v-btn>
            </v-toolbar-items> -->

           
          

            <v-btn
            v-if="empty(user)"
            text
            class="primary font-weight-regular mx-6"
            width="80"
            height="35"
            style="font: 1em 'Prompt'"
            @click="login()"
            >
            เข้าสู่ระบบ
            
            </v-btn>

            <v-menu v-else close-on-content-click left offset-y nudge-bottom="15">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                dark
                text
                class="mx-6"
                v-bind="attrs"
                v-on="on"
                color="rgb(14 131 95)"
                >
                {{_.join([_.get(user,'firstName',''),_.get(user,'lastName','')],' ')}}
                </v-btn>
            </template>
            <v-list>
                
                <v-list-item
                v-for="(item, index) in [
                      { name: 'ข้อมูลผู้ใช้งาน', to: () => $router.push('/profile') }
                    ]
                    .concat([
                    { name: 'ติดต่อสอบถาม', to: () => $router.push('/contact') },
                    { name: 'คำถามที่พบบ่อย', to: () => $router.push('/faq') },
                    ])
                    .concat(isAdmin ? [
                    { name: 'ผู้ดูแลระบบ', to: () => $router.push('/admin-panel/information') }
                    ] : [])
                    .concat([
                     { name: 'ออกจากระบบ', to: () => logout() }
                    ])
                    "
                :key="index"
                @click="item.to"
                class="dropdown-header"
                style="color: #000000 !important;"
                >
                <!-- <v-icon x-large v-show="item.email" class="pr-3">
                    mdi-account
                </v-icon> -->
                <v-list-item-title style="font-size: 14px; font-weight: bold;">
                    {{ item.name }}
                </v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
            <v-menu close-on-content-click left offset-y nudge-bottom="15">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                dark
                text
                class="mx-6"
                v-bind="attrs"
                v-on="on"
                color="rgb(14 131 95)"
                >
                <v-icon small>mdi-web</v-icon>{{ $t('lang') }}
                </v-btn>
            </template>
            <v-list>
              <v-list-item 
                v-for="(item, index) in [
                  {code:'th',name:'ไทย'},
                  {code:'en',name:'English'}
                ]" 
                :key="item"
                @click="changeLanguage(item.code)"
                class="dropdown-header"
                style="color: #000000 !important;"
              >
                  <v-list-item-title style="font-size: 14px; font-weight: bold;">
                    {{ item.name }}
                  </v-list-item-title>
              </v-list-item>
            </v-list>
            </v-menu>
        </v-app-bar>
        <v-content style="margin-top: 50px;">
            <v-container fluid >
                <v-row >
                    <v-col cols="12" class="px-0">
                        <v-toolbar
                            color="white"
                            height="63px"
                            class="align-center ma-0 pa-0"
                            elevation="0"
                        >
                            <v-spacer></v-spacer>
                            <v-tabs
                                class="d-none d-lg-flex justify-end"
                                :style="{ 'font-size': '16px' }"
                                >
                                <v-tabs-slider
                                    color="transparent"
                                ></v-tabs-slider>
                                <v-tab
                                    v-for="b in menu"
                                    :key="b"
                                    :to="b.to"
                                    :disabled="b.disable"
                                    >
                                    {{`${$t(b.name)}`}}
                                    </v-tab
                                >
                                </v-tabs>
                                &nbsp;
                                <v-spacer></v-spacer>
                                &nbsp;
                                <v-col>
                                    <v-badge
                                    color="pink"
                                    dot
                                    offset-x="15"
                                    offset-y="15"
                                    v-model="cartNotify"
                                    >
                                    <v-btn
                                        icon
                                        color="pink"
                                    >
                                        <v-icon>mdi-cart</v-icon>
                                    </v-btn>
                                    </v-badge>
                                </v-col>
                                <v-col>
                                    <v-badge
                                    color="pink"
                                    dot
                                    offset-x="15"
                                    offset-y="15"
                                    v-model="alertNotify"
                                    >
                                    <v-btn
                                        icon
                                        color="pink"
                                    >
                                        <v-icon>mdi-heart</v-icon>
                                    </v-btn>
                                    </v-badge>
                                </v-col>
                                
                                
                        </v-toolbar>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from "~/utils/axios";

export default {
  data() {
    return {
      token: "",
      user: null,
      dataToken: "",
      memberName: "",
      memberEmail: "",
      firstLogin: "",
      isAdmin: {},
      cartNotify: 0,
      alertNotify: 0,
      changeColorOnScrollValue: 700,
      menu: [
        {
          name: "menu.home",
          to: "/home",
          disable: false
        },
        {
          name: "menu.product",
          to: "/",
          disable: false
        },
        {
          name: "menu.news",
          to: "/",
          disable: false
        },
        {
          name: "menu.contact",
          to: "/",
          disable: false
        },
      ]
    };
  },
  created() {
    this.getMe();
  },
  async mounted() {
    if(!this.empty(this.$cookiz.get('token'))){
      try {
        let items = []
        let lognum =1
        let Interval= setInterval(() => {
          const user = JSON.parse(localStorage.getItem('user'))
          if(!this.empty(user)){
              const roles = user.roles
              if(roles.length > 0){
                this.isAdmin = _.find(roles, {name: 'admin'})
              }
              this.user = user
              if(!this.empty(user['permission'])){
                this.$store.commit("permission", user['permission']);
                items = user['permission']
              }
                lognum += 1
              if(items.length != 0){
                lognum = undefined
                items = undefined
                clearInterval(Interval)
              }else if(lognum > 5){
                lognum = undefined
                items = undefined
                clearInterval(Interval)
              }
          }
        }, 200)
      } catch (error) {
        console.error(error)
      }

    }
    this.notifyCart();
  },
  props: {
    scrollPosition: 0
  },
  watch: {
    '$store.state.notify'(val) {
      this.notifyCart();
    }
  },
  methods: {
    login() {
      window.location = `/login`;
    },
    logout() {
      window.location = `/logout`;
    //   localStorage.removeItem("token");
    //   window.location = window.location.origin;
    },
    notifyCart(){
      this.$db.orders.toArray().then(orders => {
        console.log(orders);
        this.cartNotify = orders.length
      })
    },
    async getMe() {
    //   if (!this.empty(_.get(this.$store, "state.user", {}))) {
    //     this.firstLogin = _.get(this.$store, "state.user.first_login", 0);
    //   } else {
    //     await axios("/api/users/me")
    //       .then(result => {
    //         this.isAdmin = result.data.is_admin;
    //         this.firstLogin = result.data.first_login;
    //       })
    //       .catch(err => {});
    //   }
    },
    changeLanguage(lang) {
      this.$store.commit("setting", {lang});
      localStorage.setItem("lang", lang);
    }

  }
};
</script>

<style scoped>
.change_color {
  background-color: white !important;
  box-shadow: none;
}
.btnActive {
  background-color: #4981d6;
}
.theme--dark.v-btn--active::before {
  opacity: 0;
}
@media only screen and (min-width: 601px) and (max-width: 1263px) {
  .container-header {
    max-width: 660px;
    margin: 0 auto;
    padding: 0px;
  }
}
.dropdown-header {
  font-size: 14px;
  margin: 0px;
  min-height: 35px;
  font-weight: bold;
}
</style>
