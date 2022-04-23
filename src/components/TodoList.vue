<template>
		<div v-if="loadingStatus" class="loading">
			loading.....
		</div>
		<div v-else class="loaded">
			<div class="filter_wrapper">
				<div class="filteredTodos">
					<span>Filter:</span>
					<input type="radio" value="all" v-model="filter" checked>
					<label>all</label>
					<input type="radio" value="done" v-model="filter">
					<label>done</label>
					<input type="radio" value="undone" v-model="filter">
					<label>undone</label>
				</div>
			</div>
			
			<ul 
				v-if="allTodosCounter" 
				@dragover.prevent 
				@dragenter.prevent
				
			>
				<TodoItem
					v-for="(value, key) in allTodos"
					:key="key" 
					:todo = "value"
					:todoKey = "key"
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
		</div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue"
import { mapGetters, mapActions } from "vuex"
export default {
	data(){
		return {
			filter: 'all',
		}
	},
	components: {
		TodoItem
	},
	methods:{
		...mapActions({setDraggedState:"todos/setDraggedState"}),
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
		...mapGetters({
			allTodos:"todos/allTodos",
			filteredTodos:"todos/filteredTodos",
			loadingStatus: "todos/getLoadingStatus",
		}

		),
		allTodosCounter() {
			return Object.keys(this.allTodos).length
			//return this.filteredTodos(this.filter).length
		}
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
	.filter_wrapper {
		display: flex
	}
	.filteredTodos {
		margin: 8px;
	}
	
</style>