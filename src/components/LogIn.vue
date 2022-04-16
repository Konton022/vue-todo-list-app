<template>
	<div class="container">

		<h1>login please</h1>
		<form action="" @submit.prevent="singInUser">
			<input type="mail" v-model="email">
			<input type="password" v-model="password">
			<button>submit</button>
		</form>

		<div>{{email}}</div>
		<div>{{password}}</div>

	</div>
</template>

<script>

import {mapActions} from "vuex"
export default {
	data(){
		return {
			email: "",
			password: ""
		}
	},
	methods: {
		...mapActions({login:'auth/login'}),
		
		async singInUser(){
			await this.login(this.userData)	
		},
	},
	computed:{
		userData(){
			return {
				email: this.email,
				password: this.password}
		}
	}
}
</script>

<style scoped>

	.container {
		min-height: 72vh;
	}

</style>
