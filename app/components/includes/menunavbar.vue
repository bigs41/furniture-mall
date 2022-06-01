<template>
  <div class="px-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light px-lg-5 px-md-3 px-3 py-lg-3 py-md-3 py-2 fixed-top">
      <nuxt-link to="/">
        <img class="logo" src="/img/logo.svg" alt="" />
      </nuxt-link>
      <h2 class="mb-0 d-flex align-items-center d-lg-none d-md-block d-block" @click.stop="drawer = !drawer" data-toggle="modal" :data-target="target"><i class="fa fa-bars"></i></h2>
      <div class="collapse navbar-collapse d-flex justify-content-between d-lg-block d-md-none d-none" id="navbarSupportedContent">
        <div class="px-5">
          <breadcrumb />
        </div>
        <div>
          <div class="btn-group">
            <div class="d-flex align-items-center cursor-pointer" data-bs-toggle="dropdown">
              <div class="flex-shrink-0 max-h-45">
                <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        dot
        offset-x="10"
        offset-y="10"
        v-model="cart.length"
      >
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
                <!-- <img class="img-user rounded-circle" src="/img/users/user-demo.png" alt="..." /> -->
              </div>
              <div class="flex-grow-1 d-flex flex-row ms-3">
                <h5 class="mb-0"><strong>{{_.join([_.get(user,'firstName',''),_.get(user,'lastName','')],' ')}}</strong></h5>
                <i class="fa fa-angle-right px-3 d-flex align-items-center"></i>
              </div>
            </div>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <nuxt-link to="/logout">
                  <button class="dropdown-item" type="button">ออกจากระบบ</button>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="modal modal-right fade" id="navbar-user" tabindex="-1" role="dialog" aria-labelledby="navbar-user">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><strong>การจัดการผู้ใช้</strong></h5>
            <h4 class="mb-0 d-flex align-items-center"><i class="fa fa-times" data-dismiss="modal" aria-label="Close"></i></h4>
          </div>
          <div class="modal-body px-0">
            <div class="row mx-0">
              <IncludesDataMenuuser />
            </div>
          </div>
          <div class="modal-footer">
            <div class="row w-100">
              <div class="col-12 px-0">
                <nuxt-link to="/login">
                  <button type="button" class="btn btn-main form-control">ออกจากระบบ</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal modal-right fade" id="navbar-modeling" tabindex="-1" role="dialog" aria-labelledby="navbar-user">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><strong>จัดการ Modeling</strong></h5>
            <h4 class="mb-0 d-flex align-items-center"><i class="fa fa-times" data-dismiss="modal" aria-label="Close"></i></h4>
          </div>
          <div class="modal-body px-0">
            <div class="row mx-0">
              <IncludesDataMenumodeling />
            </div>
          </div>
          <div class="modal-footer">
            <div class="row w-100">
              <div class="col-12 px-0">
                <nuxt-link to="/login">
                  <button type="button" class="btn btn-main form-control">ออกจากระบบ</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal modal-right fade" id="navbar-activity" tabindex="-1" role="dialog" aria-labelledby="navbar-user">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><strong>จัดการกิจกรรม</strong></h5>
            <h4 class="mb-0 d-flex align-items-center"><i class="fa fa-times" data-dismiss="modal" aria-label="Close"></i></h4>
          </div>
          <div class="modal-body px-0">
            <div class="row mx-0">
              <IncludesDataMenuactivity />
            </div>
          </div>
          <div class="modal-footer">
            <div class="row w-100">
              <div class="col-12 px-0">
                <nuxt-link to="/login">
                  <button type="button" class="btn btn-main form-control">ออกจากระบบ</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal modal-right fade" id="navbar-setting" tabindex="-1" role="dialog" aria-labelledby="navbar-setting">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><strong>ตั้งค่า</strong></h5>
            <h4 class="mb-0 d-flex align-items-center"><i class="fa fa-times" data-dismiss="modal" aria-label="Close"></i></h4>
          </div>
          <div class="modal-body px-0">
            <div class="row mx-0">
              <IncludesDataMenusetting />
            </div>
          </div>
          <div class="modal-footer">
            <div class="row w-100">
              <div class="col-12 px-0">
                <nuxt-link to="/logout">
                  <button type="button" class="btn btn-main form-control">ออกจากระบบ</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <IncludesDataMenuuser />
    </v-navigation-drawer>

  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: "navbar",
  props: {
    target: String,
  },
  data() {
    return {
      drawer: false,
      user: {
        name: "",
        email: "",
      },
      cart:[]
    };
  },
  mounted() {
    try {
      let items = []
      let lognum =1
      let Interval= setInterval(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(!this.empty(user)){
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
  },
  watch:{
    // "$store.state.cart":{
    //   handler:function(cart){
    //     this.cart = cart;
    //   },
    //   deep:true
    // }
  }
};
</script>

<style scoped>

.breadcrumb-item::before {
  display: none;
}
.breadcrumb-item {
  text-decoration: unset !important;
}
.breadcrumb-item h4 {
  color: var(--iq-dark-more-text);
}
.breadcrumb-item.active h4 {
  color: #212529;
}
</style>