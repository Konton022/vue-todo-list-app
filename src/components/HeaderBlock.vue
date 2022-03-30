<template>
<div class="header">
	<div class="header__logo">todo list app</div>
	<div class="header__contacts">
		<a href="https://t.me/KonstantinSavelev">
			<img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-telegram-messenger-privately-held-company-with-cloud-based-instant-messaging-logo-bold-tal-revivo.png"/>
		</a>
	</div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
	.header{
		display: flex;
		justify-content: space-between;
		align-content: center;
		padding: 1rem 0;
		border-bottom: 1px solid black;
	}
	.header__logo {
		font-size: 2rem;

	}

	.header__contacts img{
		width: 2rem;
	}
</style>