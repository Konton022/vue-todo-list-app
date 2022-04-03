<template>
	<div class="wrapper">
	<AddTask 
		:inputTask=inputTask 
		:handleInputTask='handleInputTask' 
		:handleSubmit='handleSubmit'
	/>
	<TodoList 
		:todos='todos' 
		:todoCounter='todoCounter' 
		:handleCheck="handleCheck"
		:handleRemoveTask="handleRemoveTask"
		:handleEditTask = "handleEditTask"
		:changeEditTask = "changeEditTask"
	/>
	</div>
</template>

<script>
import AddTask from "@/components/AddTask.vue"
import TodoList from "@/components/TodoList.vue"

export default {
	data(){
		return {
			todos:[{
				id:333,
				title:'hello world from vue!',
				isDone: false,
				isEdit: false,
			}],
			inputTask: '',
			editTask: ''
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
			if(this.inputTask.trim()) {
					this.todos.push({
					id: Math.floor(Math.random()*1000),
					title: this.inputTask,
					isDone: false,
					isEdit: false,
				})
				this.inputTask = ''
			}
			
		},
		handleCheck(id) {
			for(let todo of this.todos){
				if (todo.id === id) {
					todo.isDone=!todo.isDone
				}
			}
		},
		handleRemoveTask (id) {
			const newTodos = this.todos.filter(item => item.id !== id);
			this.todos = newTodos;
		},
		handleEditTask (id) {
			for( let todo of this.todos){
				if (todo.id === id ) {
					todo.isEdit = !todo.isEdit
				}
			}
		},
		changeEditTask (todoText){
			console.log (todoText)
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