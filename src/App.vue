<template>
  <HeaderApp class="header"/>
  <TodoApp class="todoApp"/>
  <FooterApp class="footer"/>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue"
import TodoApp from "@/components/TodoApp.vue"
import FooterApp from "@/components/FooterApp.vue"

export default {
  name: 'App',
  components: {
    HeaderApp,
    TodoApp,
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
.header {
  height: 5vh;
  border-bottom: 1px solid black;
}
.todoApp {
  min-height: 76vh;
}
.footer {
  height: 5vh;
  border-top: 1px solid black;
}
</style>
