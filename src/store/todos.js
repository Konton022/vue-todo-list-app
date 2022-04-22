import { nanoid } from 'nanoid';

import { ref, push, onValue } from "firebase/database"
import { database } from '@/firebase/config';

const todos = {
    namespaced: true,
    state() {
        return {
            todos: [
                {
                    id: nanoid(4),
                    title: 'hello world from VUE!',
                    isDone: false,
                    isEdit: false,
                },
            ],
        };
    },
    actions: {

        subscribeToFirebase({commit, rootGetters}){
            const uid = rootGetters['user/getUserUid'];
            const todoRef = ref(database, `user/${uid}/todos`);
            onValue(todoRef, (snapshot) => {
                const data = snapshot.val()
                console.log(data);
                const updatedTodos = Object.values(data)
                commit('updateTodos', updatedTodos)

            })
        },

        getTodosFromLocalStorage({ commit }) {
            if (localStorage.todos) {
                commit('updateTodos', JSON.parse(localStorage.todos));
            }
        },
        setDraggedState({ commit, state }, [fromIndex, toIndex]) {
            // console.log('drag', fromIndex, toIndex);
            const currentItem = state.todos[fromIndex];
            const currentTodos = state.todos;
            // console.log(currentItem);
            // console.log(currentTodos);
            currentTodos.splice(fromIndex, 1);
            currentTodos.splice(toIndex, 0, currentItem);
            commit('updateTodos', currentTodos);
        },
        addNewTaskAction({ rootGetters }, task) {
            const todo = {
                id: nanoid(4),
                title: task,
                isDone: false,
                isEdit: false,
            }
            const uid = rootGetters['user/getUserUid'];
            console.log(uid);
            push(ref(database, `user/${uid}/todos/`),{...todo})
            // commit('addNewTask', todo);

        },
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos;
        },
        addNewTask(state, newTask) {
            state.todos.push(newTask);
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
        allTodos: (state) => {
            return state.todos;
        },
        allTodosCounter(state) {
            return state.todos.length;
        },
        filteredTodos: (state) => (filter) => {
            switch (filter) {
                case 'done':
                    return state.todos.filter((item) => item.isDone === true);
                case 'undone':
                    return state.todos.filter((item) => item.isDone === false);
                default:
                    return state.todos;
            }
        },
    },
};
export default todos;
