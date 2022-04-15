<template>
	<div class="container">

		<h1>login please</h1>
		<form action="" @submit.prevent="sendUserData">
			<input type="mail" v-model="mail">
			<input type="password" v-model="password">
			<button>submit</button>
		</form>

		<div>{{mail}}</div>
		<div>{{password}}</div>

	</div>
</template>

<script>
export default {
	data(){
		return {
			mail: "",
			password: ""
		}
	},
	methods: {
		sendUserData(){
			
		}
	}
}
</script>

<style scoped>
	.container {
		min-height: 75vh;
	}
</style>
