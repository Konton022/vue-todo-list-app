<template>
<div class="header__wrapper">
	<div class="header__logo">Vue todo App</div>
	<div v-if="user" class="header__contacts">
		<div class="header_userInfo"><span>{{setUserName()}}</span></div>
		<button @click="logOut" class="btn">logout</button>
		<!-- <a href="https://github.com/Konton022/vue-todo-list-app" target="_blank">
			<img class="header_img" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt=""/>
		</a>
		<a href="https://t.me/KonstantinSavelev" target="_blank">
			<img class="header_img" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-telegram-messenger-privately-held-company-with-cloud-based-instant-messaging-logo-bold-tal-revivo.png" alt=""/>
	
		</a> -->
		</div>
		<div v-else>	
			<router-link to="/">login</router-link>
		</div>
	
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {

methods:{
	...mapActions({logOut: 'user/logOut'}),
	setUserName(){
		if(this.user) {
			return this.user.displayName
		} 
	}
},

computed: {
	...mapGetters({user: 'user/getUser'})
}
}
</script>

<style scoped>
	a {
		color:#0175ff;
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

	.header__wrapper{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-content: center;
		padding: 1rem 0;
		margin: 0 auto;
		align-items:center;

	}
	.header__logo {
		font-size: 2rem;
		font-weight: 700;


	}
	.header__contacts{
		display: flex;
		align-items: right;
	}

	.header_userInfo{
		margin: 0 1rem;
	}
	.header_userInfo span{
		color: #0175ff;
		font-weight: 700;
	}
	.btn {
		border: none;
		border-radius: 3px;
		background-color: rgb(157, 157, 157);;
		color: white;
		font-weight: 700;
		padding: 5px

	}
	.header_img {
		width: 2rem;
		margin-left: 0.3rem;
	}
	@media (max-width:500px) {
		.header__logo {
			font-size: 1.5rem;
			margin: 0 auto;
		}
		.header_img{
			width: 1.5rem;
			margin-left: 0.2rem;
		}
	}
</style>