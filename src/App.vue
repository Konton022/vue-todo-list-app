<template>
<!-- <div class="wrapper"> -->

<HeaderBlock />
<TodoApp todos='todos'/>
<Footer />

 <!-- </div> -->

</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue"
import TodoApp from "@/components/TodoApp.vue"




export default {
  name: 'App',

  data() {
    return {
 
    }
  },
  components: {
    HeaderBlock,
    TodoApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;

}
</style>
