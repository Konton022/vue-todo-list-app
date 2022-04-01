<template>
		<li >
            <div class="todo_item">
                <input type="checkbox" :checked="isDone" @change="handleCheck(id)"/>
                <p class="todo_title " :class="{text_through : isDone}">{{title}}</p>
                <button class="remove_btn" @click="handleRemoveTask(id)">
                    <img class="remove_img" src="https://img.icons8.com/windows/32/000000/delete-forever.png" alt=""/>
                </button>
            </div>
			
		</li>

</template>

<script>
export default {
    props:[ 'title', 'id', 'isDone', 'handleCheck', "handleRemoveTask"]
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
        border: 2rx solid black;
        border-radius: 4px;
        box-sizing: content-box;
        cursor: pointer;
        
    }
    .remove_btn:hover{
        border: 2px solid red;
        

    }


    .remove_img{
        object-fit: cover;
        object-position: center;

    }
    .text_through {
        text-decoration: line-through;
        color: #0175ff;
    }
    
</style>