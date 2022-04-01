<template>
		<li >
            <div class="todo_item">
                <input type="checkbox" :checked="isDone"/>
                <p class="todo_title">{{title}}</p>
                <button class="remove_btn">
                    <img class="remove_img" src="https://img.icons8.com/windows/32/000000/delete-forever.png" alt=""/>
                </button>
            </div>
			
		</li>

</template>

<script>
export default {
    props:[ 'title', 'id', 'isDone']
}
</script>

<style scoped>
    .todo_item {
        background-color: #eceaea;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem;
        padding: 0.5rem;
        
    }
    .todo_title {
        font-weight: 700;
        text-transform: uppercase;
        word-break: break-all;
        text-align: left;
        margin: 0 0.5rem;
        
    }
    .remove_btn{
        height: 32px;
        width: 32px;
        background-color: transparent; 
        padding: 0;
        margin: 0;
        border: none;
    }
    .remove_img{
        object-fit: cover;
        object-position: center;
    }
    
</style>