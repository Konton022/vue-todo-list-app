<template>
		<div v-if="loadingStatus" class="loading">
			<img src="../assets/preloader.gif"  class="preloader_img" alt="">
		</div>
		<div v-else class="loaded">
			<div class="filter_wrapper">
				<div class="filteredTodos">
					<span>Filter:</span>
					<input type="radio" value="all" v-model="filter">
					<label>all</label>
					<input type="radio" value="done" v-model="filter">
					<label>done</label>
					<input type="radio" value="undone" v-model="filter">
					<label>undone</label>
				</div>
			</div>
			
			<ul 
				v-if="allTodosCounter" 					
			>
				<TodoItem
					v-for="(value, key) in allTodos"
					:key="key" 
					:todo = "value"
					:todoKey = "key"
				/>
					{{getTodoFilter}}
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
			filter: 'all'
		}
	},
	watch: {
		filter(){
			this.setFilteredTodo(this.filter)
		}
	},
	components: {
		TodoItem
	},
	methods:{
		...mapActions(
			{
				//setDraggedState:"todos/setDraggedState", 
				setFilteredTodo: "todos/setFilteredTodoAction"
			}
		),

	},
	computed: {
		...mapGetters({
			allTodos:"todos/allTodos",
			// filteredTodos:"todos/filteredTodos",
			loadingStatus: "todos/getLoadingStatus",
			getTodoFilter: "todos/getTodoFilter"
		}

		
		),
		allTodosCounter() {
			return Object.keys(this.allTodos).length
			//return this.filteredTodos(this.filter).length
		},
		
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
	.filter_wrapper {
		display: flex
	}
	.filteredTodos {
		margin: 8px;
	}
	.preloader_img {
		width: 2rem;
		padding: 3rem;
	}
	
</style>