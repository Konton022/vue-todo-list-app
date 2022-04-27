<template>
		<div v-if="loadingStatus" class="loading">
			<img src="../assets/preloader.gif"  class="preloader_img" alt="">
		</div>
		<div v-else class="loaded">
			<div class="filter_wrapper">
				<div class="filteredTodos">
					<span>Filter:</span>

					<label v-for="{id, name, checked} in getFilters" :key="id">
					
						<input type="radio" :value="name" @change="setFilteredTodo(name)" :checked="checked">
					{{name}}
					</label> 
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
import { mapGetters, mapActions, mapMutations } from "vuex"
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
			setFilteredTodo: "todos/setFilteredTodoAction"
			}
		),
		...mapMutations({
			setCheckedFilter: "todos/setCheckedFilter"
		})

	},
	computed: {
		...mapGetters({
			allTodos:"todos/allTodos",
			// filteredTodos:"todos/filteredTodos",
			loadingStatus: "todos/getLoadingStatus",
			getTodoFilter: "todos/getTodoFilter",
			getFilters: "todos/getFilterArr",
			checkedFilter: "todos/getCheckedFilter"
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