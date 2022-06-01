<template>
  <v-app dark class="drawer-navigation">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
     <!-- <v-treeview
      activatable
      :active="active"
      :open="open"
      :items="items"
      item-key="to"
    >
      <template slot="label" slot-scope="{ item }">
        <a @click="openDialog(item)"><v-icon>{{ item.icon }}</v-icon>{{ item.title }}</a>
      </template>
    </v-treeview> -->
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import collect from "collect.js";
export default {
  middleware: 'authenticated',
  data () {
    return {
      clipped: false,
      drawer:false,
      fixed: false,
      permission: [],
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'dashboard',
          to: '/admin-panel'
        },
        {
          icon: 'mdi-account',
          title: 'user',
          to: '/admin-panel/user',
        },
        {
          icon: 'mdi-office-building',
          title: 'Permission',
          to: '/admin-panel/permissions',
        },
        {
          icon: 'mdi-office-building-cog',
          title: 'Role',
          to: '/admin-panel/roles'
        },
        {
          icon: 'mdi-newspaper-variant-outline',
          title: 'News',
          to: '/admin-panel/news'
        },
        {
          icon: 'mdi-newspaper',
          title: 'Article',
          to: '/admin-panel/article'
        },
        {
          icon: 'mdi-package-variant',
          title: 'Product',
          to: '/admin-panel/products'
        },
        {
          icon: 'mdi-projector-screen-variant',
          title: 'Project',
          to: '/admin-panel/projects'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'vee-decor',
    }
  },
  computed:{
    
    active () {
      return [this.$route.path]
    },
    open () {
      const $path = collect(this.$route.path.split('/')).filter().all()
      let $open = []
      let $list = ''
      for (let index = 0; index < $path.length; index++) {
        if(index+1==$path.length) break;
        const element = $path[index];
        $list += '/' + element
        $open.push($list)
      }
      return $open
    }
  },
  watch:{
    drawer(val){
      localStorage.setItem('drawer', `${val}`)
    }
  },
  async mounted () {
    this.drawer = localStorage.getItem('drawer') == 'true' ? true : false
    const menu = this.items
    this.items = []
    try {
      let lognum =1
      let Interval= setInterval(() => {
        const permission = JSON.parse(localStorage.getItem('user'))
        if(!this.empty(permission)){
          this.permission = permission['permission']
            if(!this.empty(this.permission)){
              this.$store.commit("permission", this.permission);
            }
            const $per = collect(this.permission).filter(per => {
                return per.read
              }).pluck('name').map(r=>r.toUpperCase()).all()
            this.items = collect(menu).filter(item => {
                return $per.includes(item.title.toUpperCase())
            }).all()
              console.log({lognum},this.items);
              lognum += 1
            if(this.items.length != 0){
              lognum = undefined
              clearInterval(Interval)
            }else if(lognum > 5){
              lognum = undefined
              clearInterval(Interval)
            }
        }
      }, 200)
    } catch (error) {
      console.error(error)
    }
    
  },
  methods: {
    openDialog (item) {
      if(item.to){
        // this.active = [item.to]
        // try {
        //     const $path = collect(this.$route.path.split('/')).filter().all()
        //     let $open = []
        //     let $list = ''
        //     for (let index = 0; index < $path.length; index++) {
        //       if(index+1==$path.length) break;
        //       const element = $path[index];
        //       $list += '/' + element
        //       $open.push($list)
        //     }
        //     this.open = $open
        // } catch (error) {
          
        // }
        this.$router.push(item.to)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.drawer-navigation ::v-deep{
  // .v-treeview-node__toggle{
  //   position: absolute;
  //   right: 5%;
  // }
}
</style>