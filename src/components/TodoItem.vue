<template>
		<li draggable="true">
            <div class="todo_item">
                <div v-if="todo.isEdit" class="todo_edit">
                    <input
                        class="todo_input"
                        type="text"  
                        v-model = "currentValueTask"
                        @keypress.enter="submitEditTask([todo.id, currentValueTask])"
                    >
                </div>
                <div v-else class="todo_message">
                    <input  
                        type="checkbox" 
                        :checked="todo.isDone" 
                        @change="checkTodoDone(todo.id)"
                    />
                    <div 
                        class="todo_title" 
                        :class="{text_through : todo.isDone}" 
                        @click="checkTodoDone(todo.id)"
                    >
                        {{todo.title}}
                    </div>
                </div>
                <div class="todo_actions">
                    <div class="drag">
                        <img draggable="false" class="drag_img" src="https://img.icons8.com/fluency-systems-regular/48/000000/resize-four-directions.png"/>
                    </div>
                    <div @click="onEditTask(todo.id)" class="edit">
                        <img draggable="false" class="edit_img" src="https://img.icons8.com/glyph-neue/64/000000/edit.png" alt=""/>
                    </div>
                    <div class="remove" @click="removeTask(todo.id)">
                        <img draggable="false" class="remove_img" src="https://img.icons8.com/windows/32/000000/delete-forever.png" alt=""/>
                    </div>
                </div>
            </div>
		</li>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    props:[ 
        "todo"
    ], 
    data() {
        return {
            currentValueTask: this.todo.title
        }
    }, 
    methods: {
        ...mapMutations([
            "removeTask", 
            "onEditTask",
            "submitEditTask",
            "checkTodoDone"
        ])
    }
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
    .todo_edit {
        width: 100%;
    }
    .todo_input {
        font: inherit;
        border: none;
        width: 90%; 
        padding: 5px 2px;   
    }
    
    .todo_message {
        display: flex;
        justify-content:last baseline;
    }
    .todo_actions{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .drag, .edit, .remove{
        height: 32px;
        width: 32px;
        border-radius: 4px;
        cursor: pointer;
        margin: 0 0.3rem;    
    }
    .drag {
        cursor: move;
    }
    .drag:hover {
        box-shadow: 0 0 5px #0175ff;
    }
    .edit:hover {
        box-shadow: 0 0 5px #0175ff;
    }
    .remove:hover{
        box-shadow: 0 0 5px red;
    }

    .drag_img, .edit_img, .remove_img {
        width: 100%;
        object-fit: cover;
    }

    .text_through {
        text-decoration: line-through;
        color: #0175ff;
    }
    @media (max-width: 400px) {
        .todo_title {
            font-size:0.8rem;
        }
        .drag, .edit, .remove{
        height: 24px;
        width: 24px;
        margin: 0 0.1rem;    
        }
    }    
</style>