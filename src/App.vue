<template>
  <HeaderApp class="header"/>
  <div class="container">
    <router-view />
  </div>
  <FooterApp class="footer"/>

</template>

<script>

import HeaderApp from "@/components/HeaderApp.vue"
import FooterApp from "@/components/FooterApp.vue"

export default {
  name: 'App', 
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
#app {
  
  font-family: 'Nunito', sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #182430;
  margin: 0 auto;
  max-width: 1000px;

}
input:focus {
  outline-color: #0175ff;
}
.header {
  height: 5vh;
  border-bottom: 1px solid rgb(151,144,144);
}
.container {
  min-height: 80vh;
}
.footer {
  height: 5vh;
  border-top: 1px solid rgb(151,144,144);
}
</style>
