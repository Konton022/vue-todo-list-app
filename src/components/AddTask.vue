<template>
	<form action="" class="todoForm" @submit.prevent="addNewTask">
		<input class="input_task" 
			type="text" 
			placeholder="Enter your task..." 
			v-model="inputTask" 
		>
		<button class="submit btn">
			<img class="btn__img" src="https://img.icons8.com/material-outlined/48/000000/add.png"/>
		</button>
	</form>
</template>

<script>
export default {
	// props: ["inputTask", "handleInputTask", "handleSubmit"]
	data(){
		return {
			inputTask: ""
		}
	}, methods: {
        addNewTask() {
			if(this.inputTask){
				this.$store.commit("addNewTask", this.inputTask)
				this.inputTask = ""
			}
			
		}	

	}
}
</script>

<style scoped>
form {
	
	display: flex;
	justify-content: space-between;
	align-content:flex-end;
	height: 5rem;
	margin: 0.5rem;
}

.input_task {
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

.btn {
	height: 40px;
	width: 40px;
	border: none;
	background: none;
	box-sizing: content-box;
	padding: 0;
	padding-right: 0.5rem;
	cursor: pointer;
}
.btn__img {
	width: 100%;
}
</style>