<template>
	<div class="wrapper">
			<form action="" @submit.prevent="signInUser">
					<h2>Sign In please</h2>	
					<input type="mail" v-model="email" placeholder="@email">
					<input type="password" v-model="password" placeholder="password">
					<button>submit</button>
				<div> Are you not registered? SIGN UP please 
					<router-link to="/signup">here</router-link>
				</div>
				<div v-if="error" class="error">{{error}}</div>
			</form>
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
	.wrapper {
		display: flex;
		justify-content: center;
		min-height: inherit;
		align-items: center;
	}
	h2{
		color: #0175ff
	}
	form {
		box-shadow: 0 0 5px rgb(201, 195, 195);
		width: 430px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-items: center;
	}
	input {
		display: block;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		width:90%;
		height: 36px;
		border: none;	
		border-bottom: 1px solid rgb(151,144,144);
		padding: 2px 7px;
		margin: 0.7rem auto;
		box-sizing: border-box;
	}
	button {
		display: block;
		width: 90%;
		margin: 2rem auto;
		border: none;
		border-radius: 3px;
		background-color: #0175ff;
		padding: 7px 10px;
		color: whitesmoke;	
		font-weight: 700;
		text-transform: capitalize;
	}

	a {
		color: #0175ff;
		font-size: 1rem;
		font-weight: 700;
		text-decoration: none;
	}
	a:visited{
		color:#0175ff;
	}
	a:hover{
		text-decoration: underline;
	}
	@media (max-width: 500px) {
		form{
			width: 95vw;
		}
	}
</style>
