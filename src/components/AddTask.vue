<template>
	<form action="" class="todoForm">
		<input 
			type="text" 
			placeholder="Enter your task..." 
			:value='inputTask' 
			@input='handleInputTask'
			@keypress:Enter="handleSubmit"
		>
		<button class="Submit" v-on:click="handleSubmit">Add task</button>
	</form>
</template>

<script>
export default {
	props: ['inputTask', 'handleInputTask', 'handleSubmit']
}
</script>