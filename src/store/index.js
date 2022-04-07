import { createStore } from 'vuex';
import { nanoid } from 'nanoid';

const store = createStore({
    state() {
        return {
            todos: [
                {
                    id: Math.floor(Math.random() * 1000),
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
            state.todos.filter((todo) => todo.id !== id);
        },
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
