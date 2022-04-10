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
    actions: {
        setTodosToLocalStorage() {
            console.log('set to localStorage');
            localStorage.setItem('todos', JSON.stringify(this.$state.todos));
        },
        getTodosFromLocalStorage({ commit }) {
            console.log('action local store');
            if (localStorage.todos) {
                const todos = JSON.parse(localStorage.todos);
                commit('updateTodos', todos);
            }
        },
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos;
        },
        addNewTask(state, newTask) {
            state.todos.push({
                id: nanoid(4),
                title: newTask,
                isDone: false,
                isEdit: false,
            });
        },
        removeTask(state, id) {
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        onEditTask(state, id) {
            state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.isEdit = !todo.isEdit;
                }
                return todo;
            });
        },
        submitEditTask(state, [todoId, value]) {
            state.todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.title = value;
                    todo.isEdit = !todo.isEdit;
                    todo.isDone = false;
                }
                return todo;
            });
        },
        checkTodoDone(state, id) {
            state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            });
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
