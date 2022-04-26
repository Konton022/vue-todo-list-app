<template>
<div class="header__wrapper">
	<div class="header__logo">Vue todo App</div>
	<div v-if="user" class="header__contacts">
		<div class="header_userInfo"><span>{{setUserName()}}</span></div>
		<img @click="logOut" class="img_out" src="https://img.icons8.com/dotty/80/000000/exit.png"/>
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
		flex-wrap: nowrap;
		align-items:center;
		padding: 0.5rem 0 1rem 0;
		margin: 0 auto;
		align-items:center;

	}
	.header__logo {
		font-size: 2rem;
		font-weight: 700;


	}
	.header__contacts{
		display: flex;
		align-items: center;

	}

	.header_userInfo{
		margin: 0 1rem;
	}
	.header_userInfo span{
		color: #0175ff;
		font-weight: 700;
	}
	.img_out {
		width: 1.5rem;

	}
	.header_img {
		width: 2rem;
		margin-left: 0.3rem;
	}
	@media (max-width:500px) {
		.header__logo {
			font-size: 1.5rem;

		}

	}
</style>