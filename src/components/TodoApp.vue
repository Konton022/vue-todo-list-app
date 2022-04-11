<template>
	<div class="wrapper">
	<AddTask />
	<TodoList />
	</div>
</template>

<script>
import {mapActions} from "vuex"
import AddTask from "@/components/AddTask.vue"
import TodoList from "@/components/TodoList.vue"

export default {
	mounted() {
		this.getTodosFromLocalStorage();
	},
	components: {
		AddTask, 
		TodoList,
	},

	methods: {
		...mapActions(["getTodosFromLocalStorage"]),
	}	
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