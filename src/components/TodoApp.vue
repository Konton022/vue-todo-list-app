<template>
	<div class="todoApp">
	<AddTodo />
	<TodoList />
	
	</div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue"
import TodoList from "@/components/TodoList.vue"

export default {
	components: {
		AddTodo, TodoList

	}
}
</script>

<style scoped>
	.todoApp{
		border: 1px solid black;
		max-width: 1000px;
		margin: 1rem auto;
		height: 80vh;
	}
</style>