<template>
		<ul 
			v-if="allTodosCounter" 
			@dragover.prevent 
			@dragenter.prevent
			
		>
			<TodoItem 
				v-for="todo in allTodos" 
				:key="todo.id" 
				:title = "todo.title" 
				:id="todo.id" 
				:isDone="todo.isDone" 
				:isEdit="todo.isEdit"
				:handleCheck="handleCheck"
				:handleRemoveTask="handleRemoveTask"
				:handleEditTask = "handleEditTask"
				:handleSubmitEditTask = "handleSubmitEditTask"
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
import { mapGetters } from "vuex"
export default {
	// props: [
	// 	"todos", 
	// 	"todoCounter", 
	// 	"handleCheck", 
	// 	"handleRemoveTask", 
	// 	"handleEditTask", 
	// 	"handleSubmitEditTask",
	// 	"onDragStart",
	// 	"onDrop"
	// ],
	components: {
		TodoItem
	},
	methods:{
		
	},
	computed: {
		...mapGetters([
			"allTodosCounter", 
			"allTodos"
		])

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