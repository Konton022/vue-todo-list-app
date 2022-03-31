<template>
	<ul v-if='todos.length'>
		<li v-for='todo in todos' :key='todo.id'>
			{{todo.id}}	{{todo.title}} {{todo.isDone}}
		</li>
	</ul>
	<div v-else>Nothing to do. Add new task</div>
	<!-- <div>{{todos}}</div> -->
</template>
<script>

export default {
	props: ['todos'],
	components: {

	},
}
</script>