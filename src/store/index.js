import { createStore } from 'vuex';
import { nanoid } from 'nanoid';

const store = createStore({
    state() {
        return {
            todos: [
                {
                    id: nanoid(4),
                    title: 'hello world from VUEX!',
                    isDone: false,
                    isEdit: false,
                },
            ],
        };
    },
    mutations: {
        addNewTask(state, newTask) {
            state.todos.push({
                id: nanoid(4),
                title: newTask,
                isDone: false,
                isEdit: false,
            });
        },
        removeTask(state, id) {
            console.log(id);
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        onEditTask(state, id){
            state.todos = state.todos.map( todo => {
                if(todo.id === id) {
                    todo.isEdit = !todo.isEdit
                }
                return todo
            })
        }, 
        submitEditTask(state, todoId, value){
            console.log(todoId, value);
        }
    },
    getters: {
        allTodos(state) {
            return state.todos;
        },
        allTodosCounter(state) {
            return state.todos.length;
        },
    },
});

export default store;
