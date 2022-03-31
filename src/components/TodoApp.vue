<template>
	<div class="todoApp">
	<AddTask />
	<TodoList :todos='todos'/>
	
	<div></div>
	</div>
</template>

<script>
import AddTask from "@/components/AddTask.vue"
import TodoList from "@/components/TodoList.vue"

export default {
	data(){
		return {
			todos:[
				{id:1, title:'do homework', isDone: false},
				{id:2, title:'read book', isDone: false},
				{id:3, title:'eat pizza', isDone: false},
				{id:4, title:'watch TV', isDone: false},  
				{id:5, title:'go to sleep', isDone: false},  
				{id:6, title:'get up earlie', isDone: false},
			],
			inputTask: 'hello world!'
		}
	
	},
	components: {
		AddTask, TodoList

	}
}
</script>

<style scoped>
	.todoApp{
		border: 1px solid black;
		max-width: 900px;
		margin: 2rem auto;
		min-height: 50vh;
	}
</style>