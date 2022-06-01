<template>
  <div class="row">
    <div class="sidebar d-lg-block d-md-none d-none">
      <div class="col-12">
        <div class="row">
          <div class="col-3 border-custom-menu-icon pt-3">
            <div class="row">
              <div
                class="col-12 px-0 mb-4"
                v-for="(menuIcon, index) in menuIcons"
                :key="index"
              >
                <nuxt-link
                  :to="menuIcon.link"
                  class="px-3 d-flex justify-content-center position-relative"
                >
                  <img :src="menuIcon.img" :class="{ active : menuIcon.isActive}" class="w-custom-icon-menu menu-active" alt="" />
                  <div :class="{ setactive : menuIcon.isActive}"></div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-9 pt-3">
            <div class="row">
              <div class="col-12 d-flex justify-content-center my-2">
                <h4><strong>ตั้งค่า</strong></h4>
              </div>
              <IncludesDataMenusetting />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="col-12">
        <div
          class="
            row
            d-flex
            fixed-bottom
            align-items-center
            d-lg-none
            shadow
            bg-white
            mx-0
          "
        >
          <div
            class="col-3"
            v-for="(menuIcon, index) in menuIcons"
            :key="index"
          >
            <div class="row pt-2 pb-1">
              <div class="col-12">
                <nuxt-link
                  :to="menuIcon.link"
                  class="px-0 d-flex justify-content-center"
                >
                  <img :src="menuIcon.img" :class="{ active : menuIcon.isActive}" class="w-custom-icon-menu menu-active" alt="" />
                </nuxt-link>
              </div>
              <div class="col-12 text-center">
                <p class="mb-0 menu-text-active active" v-if="menuIcon.isActive === true">{{menuIcon.title}}</p>
                <p class="mb-0 menu-text-active" v-else>{{menuIcon.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuIcons: [
        {
          link: '/',
          img: '/img/menu/icon-manage-user.svg',
          isActive: false,
          title:'User',
        },
        {
          link: '/modeling',
          img: '/img/menu/icon-manage-modeling.svg',
          isActive: false,
          title:'Modeling',
        },
        {
          link: '/activity',
          img: '/img/menu/icon-manage-activity.svg',
          isActive: false,
          title:'Activity',
        },
        {
          link: '/setting',
          img: '/img/menu/icon-manage-setting.svg',
          isActive: true,
          title:'Setting',
        },
      ],
    }
  },
}
</script>

<style scoped>
.menu-active {
  filter: invert(67%) sepia(8%) saturate(119%) hue-rotate(161deg)
    brightness(90%) contrast(85%);
}
.menu-active.active{
  filter: invert(16%) sepia(87%) saturate(6020%) hue-rotate(336deg)
    brightness(78%) contrast(113%);
}
</style>