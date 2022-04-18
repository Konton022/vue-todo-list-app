<template>
<div class="header__wrapper">
	<div class="header__logo">Vue todo App</div>
	<dir class="header_userInfo">You are logined as... {{user()}}</dir>
	<div class="header__contacts">
		<a href="https://github.com/Konton022/vue-todo-list-app" target="_blank">
			<img class="header_img" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt=""/>
		</a>
		<a href="https://t.me/KonstantinSavelev" target="_blank">
			<img class="header_img" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-telegram-messenger-privately-held-company-with-cloud-based-instant-messaging-logo-bold-tal-revivo.png" alt=""/>
		</a>
	</div>
</div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {

methods:{
	user(){
		return this.userEmail? this.userEmail: null
	}
},

computed: {
	...mapGetters({userEmail: 'user/getUserEmail'})

}
}
</script>

<style scoped>
	.header__wrapper{
		display: flex;
		justify-content: space-between;
		align-content: center;
		padding: 1rem 0;
		margin: 0 auto;

	}
	.header__logo {
		font-size: 2rem;
		font-weight: 700;

	}
	.header_img {
		width: 2rem;
		margin-left: 0.3rem;
	}
	@media (max-width:400px) {
		.header__logo {
			font-size: 1.5rem;
		}
		.header_img{
			width: 1.5rem;
			margin-left: 0.2rem;
		}
	}
</style>