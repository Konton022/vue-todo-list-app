import { nanoid } from 'nanoid';

import {
    ref,
    push,
    onValue,
    update,
    remove,
    query,
    equalTo,
    // limitToFirst,
    get,
    orderByChild,
} from 'firebase/database';
import { database } from '@/firebase/config';

const todos = {
    namespaced: true,
    state() {
        return {
            todos: {},
            isLoading: true,
        };
    },
    actions: {
        subscribeToFirebase({ commit, rootGetters }) {
            commit('setLoadingStatus', true);
            const uid = rootGetters['user/getUserUid'];
            const todoRef = ref(database, `user/${uid}/todos`);
            onValue(todoRef, (snapshot) => {
                const data = snapshot.val();
                // console.log('data', data);
                const updatedTodos = data ? data : {};
                commit('updateTodos', updatedTodos);
                commit('setLoadingStatus', false);
            });
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
            };
            const uid = rootGetters['user/getUserUid'];
            push(ref(database, `user/${uid}/todos/`), { ...todo });
        },
        setTodoDoneAction({ state, rootGetters }, key) {
            // console.log('key', key);
            const todo = state.todos[key];
            // console.log('todo', todo);
            const uid = rootGetters['user/getUserUid'];
            update(ref(database, `user/${uid}/todos/${key}`), {
                isDone: !todo.isDone,
            });
        },
        setTodoEditAction({ state, rootGetters }, key) {
            // console.log('key', key);
            const todo = state.todos[key];
            // console.log('todo', todo);
            const uid = rootGetters['user/getUserUid'];
            update(ref(database, `user/${uid}/todos/${key}`), {
                isEdit: !todo.isEdit,
            });
        },
        removeTodoAction({ rootGetters }, key) {
            const uid = rootGetters['user/getUserUid'];
            remove(ref(database, `user/${uid}/todos/${key}`));
        },
        setEditedTodoAction({ rootGetters }, { value, key }) {
            const uid = rootGetters['user/getUserUid'];
            // const todo = state.todos[key];
            update(ref(database, `user/${uid}/todos/${key}`), {
                title: value,
                isEdit: false,
            });
        },
        setFilteredTodoAction({ rootGetters, commit }, filter) {
            console.log(filter);
            commit('setLoadingStatus', true);
            const uid = rootGetters['user/getUserUid'];
            const que = query(
                ref(database, `user/${uid}/todos/`),
                orderByChild('isDone'),
                equalTo(filter == 'done' ? true : false)
            );
            get(que).then((snapshot) => {
                commit('updateTodos', snapshot.val());
                commit('setLoadingStatus', false);
            });
        },
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos;
        },
        setLoadingStatus(state, value) {
            state.isLoading = value;
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
        getLoadingStatus(state) {
            return state.isLoading;
        },
    },
};
export default todos;
