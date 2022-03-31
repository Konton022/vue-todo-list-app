<template>
	<ul>
		<li v-for='todo in todos' :key='todo.id'>
			{{todo}}
		</li>
	</ul>
</template>
<script>

export default {
	props: ['todos'],
	components: {

	},
}
</script>