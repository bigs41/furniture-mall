<template>
  <div class="row">
    <div class="sidebar d-lg-block d-md-none d-none">
      <div class="col-12">
        <div class="row">
          <div class="col-3 border-custom-menu-icon pt-3">
            <div class="row">
              <div
                class="col-12 px-0 mb-2 mt-2"
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
            <div class="row" style="padding-left:6px;">
              <div class="col-12 d-flex my-2 pb-0" style="padding-left:10px;">
                <h4><strong>{{titleMenu}}</strong></h4>
              </div>
              <v-list dense class="pt-0">
                <v-list-item-group
                  v-model="isActive"
                  color="primary"
                >
                  <v-list-item
                    v-for="(item, i) in subMenus"
                    :key="i"
                    :to="item.link"
                  >
                    <v-list-item-content>
                      <v-list-item-title style="font-size:1.2rem">{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <!-- <IncludesDataMenuactivity /> -->
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
import _ from 'lodash';
import collect from 'collect.js';
export default {
  data() {
    return {
      titleMenu:'',
      isActive:null,
      menuIcons: [
        {
          link: '/admin-panel/accounts',
          img: '/img/menu/icon-manage-user.svg',
          isActive: false,
          title:'ผู้ใช้งาน',
          cildren:[
            {
              link: '/admin-panel/accounts',
              img: '/img/menu/icon-manage-activity.svg',
              isActive: false,
              title:'ผู้ใช้งาน',
            }
          ]
        },
        {
          link: '#/admin-panel/admin-panel/permission-role',
          img: '/img/menu/icon-manage-modeling.svg',
          isActive: false,
          title:'Permission & Role',
        },
        {
          link: '/admin-panel/information',
          img: '/img/menu/icon-manage-activity.svg',
          isActive: false,
          title:'ข้อมูล',
          cildren: [
            {
              link: '/admin-panel/information/category',
              img: '/img/menu/icon-manage-activity.svg',
              isActive: false,
              title:'หมวดหมู่',
            },
            {
              link: '/admin-panel/information/furnitures',
              img: '/img/menu/icon-manage-activity.svg',
              isActive: false,
              title:'เฟอร์นิเจอร์',
            },
            {
              link: '/admin-panel/information/bundle',
              img: '/img/menu/icon-manage-activity.svg',
              isActive: false,
              title:'คอลเล็กชั่น',
            },
            {
              link: '/admin-panel/information/rooms',
              img: '/img/menu/icon-manage-activity.svg',
              isActive: false,
              title:'ดีไซน์ห้อง',
            },
            {
              link: '/admin-panel/information/house',
              img: '/img/menu/icon-manage-activity.svg',
              isActive: false,
              title:'โครงการบ้าน',
            },
            {
              link: '/admin-panel/information/projects',
              img: '/img/menu/icon-manage-activity.svg',
              isActive: false,
              title:'Project',
            },
          ],
        },
        {
          link: '#/setting',
          img: '/img/menu/icon-manage-setting.svg',
          isActive: false,
          title:'Setting',
        },
      ],
      subMenus:[]
    }
  },
  watch:{
    isActive(v){
      console.log(v);
    },
    $route(v){
      try {
        const breadcrumb = []
        let mainMenu = _.find(this.menuIcons, { link: `/${this.strNotLates(v.path)}` });
        if(this.empty(mainMenu)){
          mainMenu = _.find(this.menuIcons, { link: `/${this.strNotLates(this.strNotLates(v.path))}` });
        }
        console.log('mainMenu1',mainMenu);
        if(this.empty(mainMenu)){
          mainMenu = _.find(this.menuIcons, { link: v.path }); 
        }
        if(!this.empty(mainMenu)){
          mainMenu.isActive = true;
          this.titleMenu = mainMenu.title;
          if(!this.empty(mainMenu.cildren)){
            this.subMenus = mainMenu.cildren;
          }
        }
        breadcrumb.push({text:mainMenu.title});
        if(!this.empty(mainMenu.cildren)){
          let subMenu = _.find(mainMenu.cildren, { link: `${v.path}` });
          if(this.empty(subMenu)){
            subMenu = _.find(mainMenu.cildren, { link: `${this.strNotLates(v.path)}` });
          }
          breadcrumb.push({text:subMenu.title});
        }
        this.$store.commit('breadcrumb/setList', breadcrumb) 
      } catch (error) {
        
      }
      
    }
  },
  methods:{
    strNotLates(str){
      const $r = _.filter(str.split(`/`))
      return collect($r).forPage(1,$r.length-1).join(`/`)
    },
  },
  mounted(){
    let path = this.$route.path;
    console.log(path);
    const breadcrumb = []
    this.menuIcons.forEach(menuIcon => {
      if(menuIcon.link === path||menuIcon.link === '/'+this.strNotLates(path)||menuIcon.link === '/'+this.strNotLates(this.strNotLates(path))){
        menuIcon.isActive = true;
        this.titleMenu = menuIcon.title;
        breadcrumb.push({text:menuIcon.title});
        this.subMenus = menuIcon.cildren.map((r,k)=>{
          if(r.link===path||r.link==='/'+this.strNotLates(path)){
            this.isActive=k;
            r.isActive = true;
            breadcrumb.push({text:r.title});
          }
          return r
        });
      }
    });
    this.$store.commit('breadcrumb/setList', breadcrumb)
  }
}
</script>
<style lang="scss" scoped>
.sidebar ::v-deep{
  h4{
    font-size:1.5rem;
  }
}
</style>
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