<template>
		<ul 
			v-if="allTodosCounter" 
			@dragover.prevent 
			@dragenter.prevent
			
		>
			<TodoItem 
				v-for="todo in allTodos" 
				:key="todo.id" 
				:todo = "todo"
				draggable="true"
				@dragstart="onDragStart($event, todo)"
				@drop="onDrop($event, todo.id)"
			/>
			<hr />
			<li >
				Total tasks: <b>{{allTodosCounter}}</b>
			</li>
		</ul>
		<div v-else class="todo__empty_block">Nothing to do. Add new task!</div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue"
import { mapGetters, mapActions } from "vuex"
export default {

	components: {
		TodoItem
	},
	methods:{
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
		},
	},
	computed: {
		...mapGetters([
			"allTodosCounter", 
			"allTodos"
		]),
		...mapActions(["setDraggedState"])
	}
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