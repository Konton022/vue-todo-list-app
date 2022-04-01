<template>
	<div class="wrapper">
	<AddTask :inputTask=inputTask :handleInputTask='handleInputTask' :handleSubmit='handleSubmit'/>
	<TodoList :todos='todos' :todoCounter='todoCounter'/>
	</div>
</template>

<script>
import AddTask from "@/components/AddTask.vue"
import TodoList from "@/components/TodoList.vue"

export default {
	data(){
		return {
			todos:[{id:333,
			title:'test message',
			isDone: true}],
			inputTask: ''
		}
	
	},
	components: {
		AddTask, TodoList

	},
	methods: {
		handleInputTask(event) {
			this.inputTask = event.target.value;
		},
		handleSubmit (event) {
			event.preventDefault()
			if(this.inputTask) {
					this.todos.push({
					id: Math.floor(Math.random()*1000),
					title: this.inputTask,
					isDone: false
				})
				this.inputTask = ''}
			
			}
	},
	computed: {
		todoCounter() {
			return this.todos.length
		}
	}

}
</script>

<style scoped>
	.wrapper{
		box-shadow: 0 0 5px rgb(151, 144, 144);
		max-width: 900px;
		margin: 1rem auto;
		padding: 1rem;
		/* min-height: 50vh; */
	}
</style>