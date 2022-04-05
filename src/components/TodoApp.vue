<template>
	<div class="wrapper">
	<AddTask 
		:inputTask=inputTask 
		:handleInputTask="handleInputTask" 
		:handleSubmit="handleSubmit"
	/>
	<TodoList 
		:todos="todos"
		:todoCounter="todoCounter" 
		:handleCheck="handleCheck"
		:handleRemoveTask="handleRemoveTask"
		:handleEditTask = "handleEditTask"
		:handleSubmitEditTask = "handleSubmitEditTask"
		:onDragStart = "onDragStart"
		:onDrop = "onDrop"	
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
				id: Math.floor(Math.random()*1000),
				title:"hello world from vue!",
				isDone: false,
				isEdit: false,
			}],
			inputTask: ""
		}
	},
	mounted() {
		if(localStorage.todos) {
			this.todos = JSON.parse(localStorage.getItem("todos"))
		}
	},
	components: {
		AddTask, TodoList,
	},
	methods: {
		handleInputTask(event) {
			this.inputTask = event.target.value;
		},
		handleSubmit(event) {
			event.preventDefault()
			if(this.inputTask.trim()) {
					this.todos.push({
					id: Math.floor(Math.random()*1000),
					title: this.inputTask,
					isDone: false,
					isEdit: false,
				})
				this.inputTask = ""
			}
			this.saveToLocalStorage();
			
		},
		handleCheck(id) {
			for(let todo of this.todos){
				if (todo.id === id) {
					todo.isDone=!todo.isDone
				}
			}
			this.saveToLocalStorage();
		},
		handleRemoveTask(id) {
			const newTodos = this.todos.filter(item => item.id !== id);
			this.todos = newTodos;
			this.saveToLocalStorage();
		},
		handleEditTask(id) {
			for( let todo of this.todos){
				if (todo.id === id ) {
					todo.isEdit = !todo.isEdit
				}
			}
		},
		handleSubmitEditTask(id, value){
			for (let todo of this.todos){
				if (todo.id === id) {
					todo.title = value
					todo.isEdit = false
					todo.isDone = false
				}
			}
			this.saveToLocalStorage();
		}, 
		saveToLocalStorage() {
			localStorage.setItem("todos", JSON.stringify(this.todos))
		},
		onDragStart(event, item){
			event.dataTransfer.dropEffect = 'move'
      		event.dataTransfer.effectAllowed = 'move'
			event.dataTransfer.setData("todoId", item.id.toString())
		},
		onDrop(event, id){
			const draggingId = parseInt(event.dataTransfer.getData("todoId"))
			const fromIndex = this.todos.findIndex(item => item.id === draggingId);
			const toIndex = this.todos.findIndex(item => item.id === id);
			const currentItem = this.todos[fromIndex]
			this.todos.splice(fromIndex, 1)
			this.todos.splice(toIndex, 0, currentItem)
			this.saveToLocalStorage()			
		},
	},
	computed: {
		todoCounter() {
			return this.todos.length
		}
	},
}
</script>

<style scoped>
	.wrapper{
		box-shadow: 0 0 5px rgb(151, 144, 144);
		max-width: 900px;
		margin: 1rem auto;
		padding: 1rem;
	}
</style>