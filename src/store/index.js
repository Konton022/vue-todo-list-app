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
        getTodosFromLocalStorage({ commit }) {
            if (localStorage.todos) {
                commit('updateTodos', JSON.parse(localStorage.todos));
            }
        },
        setDraggedState({ commit }, [fromIndex, toIndex]) {
            const currentItem = this.getters.allTodos[fromIndex];
            const currentTodos = this.getters.allTodos
            currentTodos.splice(fromIndex, 1)
			currentTodos.splice(toIndex, 0, currentItem)
            commit('updateTodos', currentTodos);
        },
        addNewTaskAction({commit}, task){
            commit("addNewTask", task)
        }
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
        filteredTodos: state => filter => {
            switch (filter) {
                case "done":
                        return state.todos.filter(item => item.isDone === true)
                case "undone":
                    return state.todos.filter(item => item.isDone === false)
                default:
                    return state.todos
            }
        }
    },
});

store.subscribe((mutations, state) => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
});
export default store;
