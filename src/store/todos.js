import { nanoid } from 'nanoid';

import {
    ref,
    push,
    onValue,
    update,
    remove,
    query,
    equalTo,
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
            filterArr: [
                { id: 0, name: 'all', checked: true },
                { id: 1, name: 'done', checked: false },
                { id: 2, name: 'undone', checked: false },
            ],
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
        setFilteredTodoAction({ rootGetters, commit }) {
            // console.log(filter);
            const currentFilter = rootGetters['todos/getCheckedFilter'];
            console.log(currentFilter);
            // commit('updateTodoFilter', filter);
            const uid = rootGetters['user/getUserUid'];
            let que = null;
            switch (currentFilter.name) {
                case 'done':
                    que = query(
                        ref(database, `user/${uid}/todos/`),
                        orderByChild('isDone'),
                        equalTo(true)
                    );
                    break;
                case 'undone':
                    que = query(
                        ref(database, `user/${uid}/todos/`),
                        orderByChild('isDone'),
                        equalTo(false)
                    );
                    break;
                default:
                    que = query(
                        ref(database, `user/${uid}/todos/`),
                        orderByChild('isDone')
                    );
                    break;
            }

            get(que).then((snapshot) => {
                commit('updateTodos', snapshot.val());
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
        updateTodoFilter(state, value) {
            state.todoFilter = value;
        },
        setCheckedFilter(state, value) {
            const checked = state.filterArr.map((item) => {
                item.name === value
                    ? (item.checked = true)
                    : (item.checked = false);
            });
            state.checked = checked;
        },
    },
    getters: {
        allTodos: (state) => {
            return state.todos;
        },
        getLoadingStatus(state) {
            return state.isLoading;
        },
        getTodoFilter(state) {
            return state.todoFilter;
        },
        getFilterArr(state) {
            return state.filterArr;
        },
        getCheckedFilter(state) {
            return state.filterArr.filter((item) => item.checked == true);
        },
    },
};
export default todos;
