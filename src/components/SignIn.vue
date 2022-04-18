<template>
	<div class="container">

		<h1>Sign In please</h1>
		<form action="" @submit.prevent="signInUser">
			<input type="mail" v-model="email">
			<input type="password" v-model="password">
			<button>SignIn</button>
		</form>
		<div> Are you not registered? SIGN UP please 
			<router-link to="/signup">here</router-link>
		 </div>
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
		...mapActions({signIn: 'user/signIn'}),

		async signInUser(){
			try {
				await this.signIn(this.userData)
				this.email = ""
				this.password = ""		
				this.$router.push('/todoapp')
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
