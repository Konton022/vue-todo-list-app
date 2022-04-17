<template>
	<div class="container">

		<h1>login please</h1>
		<form action="" @submit.prevent="signUpUser">
			<input type="mail" v-model="email">
			<input type="password" v-model="password">
			<button>SignUp</button>
		</form>

		<div>{{email}}</div>
		<div>{{password}}</div>
		<div v-if="error" class="error">{{error}}</div>
	</div>
</template>

<script>

import {mapActions} from "vuex"

export default {
	data(){
		return {
			email: "",
			password: "",
			error: null
		}
	},
	methods: {
		...mapActions({signUp:'user/signUp'}),
		
		async signUpUser(){
			try {
				await this.signUp(this.userData)
				this.email = ""
				this.password = ""		
				this.$store.router.push('/todoapp')
			} 
			catch (err) {
				this.error = err.message;
			}
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
