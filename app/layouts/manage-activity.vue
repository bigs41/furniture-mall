<template>
  <div class="activity-layout">
    <div class="container-fluid">
      <div class="row">
        <IncludesMenunavbar target="#navbar-activity" />
        <IncludesSidebaractivity />
          <div class="main pt-custom-main px-3">
            <v-app>
              <v-fade-transition origin="top center 0">
                <nuxt />
              </v-fade-transition>
            </v-app>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import collect from 'collect.js'
export default {
  middleware: 'authenticated',
  data () {
    return {
      permission: [],
    }
  },
  async mounted () {
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
            lognum += 1
            if($per.length != 0){
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
  }
}
</script>