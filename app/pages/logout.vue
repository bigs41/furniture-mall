<template>
  <div></div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {};
  },
  async mounted() {
    
    await this.$cookiz.remove('token');
    try {
      await localStorage.removeItem("token");
      await sessionStorage.removeItem("token");  
    } catch (error) {
        
    }
    
    window.location = "/login";
  },
};
</script>
