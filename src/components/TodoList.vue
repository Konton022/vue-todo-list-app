<template>
	<ul v-if="todos.length">
		<TodoItem 
			v-for="todo in todos" 
			:key="todo.id" 
			:title = "todo.title" 
			:id="todo.id" 
			:isDone="todo.isDone" 
			:isEdit="todo.isEdit"
			:editTask = "editTask"
			:handleCheck="handleCheck"
			:handleRemoveTask="handleRemoveTask"
			:handleEditTask = "handleEditTask"
			:handleSubmitEditTask = "handleSubmitEditTask"
			:changeEditTask = "changeEditTask"
		/>
		<hr />
		<li >
			Total tasks: <b>{{todoCounter}}</b>
		</li>
	</ul>
	<div v-else class="todo__empty_block">Nothing to do. Add new task!</div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue"
export default {
	props: [
		"todos",
		"editTask", 
		"todoCounter", 
		"handleCheck", 
		"handleRemoveTask", 
		"handleEditTask", 
		"handleSubmitEditTask",
		"changeEditTask"
	],
	components: {
		TodoItem
	},
}
</script>
<style scoped>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.todo__empty_block{
		font-weight: 700;
		margin-top: 2rem;
		
	}
	
</style>