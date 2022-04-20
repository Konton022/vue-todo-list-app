<template>
	<div class="wrapper">
		<div class="login_form">
			<h2>Sign In please</h2>
			<form action="" @submit.prevent="signInUser">
				<input class="input_login" type="mail" v-model="email" placeholder="email">
				<input class="input_login" type="password" v-model="password" placeholder="password">
				<button>SignIn</button>
			</form>
			<div> Are you not registered? SIGN UP please 
				<router-link to="/signup">here</router-link>
			</div>
			<div v-if="error" class="error">{{error}}</div>
		</div>
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
	h2{
		color: rgb(16, 16, 220)
	}
	.wrapper {
		display: flex;
		justify-content: center;
		min-height: inherit;
		align-items: center;


	}
	.login_form {
		box-shadow: 0 0 5px rgb(201, 195, 195);
		max-width: 70vw;
		padding: 10px;
		display: flex;
		flex-direction: column;

	}
	.login_input {
		display: block;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		width:90%;
		height: 36px;
		border: none;
		box-shadow: 0 0 5px rgb(151, 144, 144);
		padding: 2px 5px;
		margin-right: 0.5rem;
	}

</style>
