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
				@dragstart="onDragStart($event, todo.id)"
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
		...mapActions(["setDraggedState"]),
		onDragStart(event, id){
			event.dataTransfer.dropEffect = 'move'
      		event.dataTransfer.effectAllowed = 'move'
			event.dataTransfer.setData("todoId", id)
		},
		onDrop(event, id){
			const draggingId = event.dataTransfer.getData("todoId");
			const fromIndex = this.allTodos.findIndex(item => item.id === draggingId);
			const toIndex = this.allTodos.findIndex(item => item.id === id);
			this.setDraggedState([fromIndex, toIndex])	
		},
	},
	computed: {
		...mapGetters([
			"allTodosCounter", 
			"allTodos"
		]),
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