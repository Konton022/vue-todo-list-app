<template>
<div>

<HeaderBlock />
<TodoApp />
<Footer />

 </div>

</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue"
import TodoApp from "@/components/TodoApp.vue"

export default {
  name: 'App',
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

}
</style>
