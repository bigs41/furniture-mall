<template>
  <div>
    <Headtitle title="เพิ่มกิจกรรมใหม่" />
    <PagesActivityAdd />
  </div>
</template>

<script>
export default {
  layout: 'manage-activity',
  data(){
    return{
      list : [
        {
            // url:"/home",
            text:"Deal"
        },
        {
            // url:"/manage",
            text:"จัดการกิจกรรม"
        },
        {
            // url:"/dashboard",
            text:"เพิ่มกิจกรรมใหม่"
        },
      ]
    }
  },
  created(){
    this.$store.commit('breadcrumb/setList', this.list)
  }
}
</script>
