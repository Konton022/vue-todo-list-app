import { createStore } from 'vuex';
// import { nanoid } from 'nanoid';
import todos from './todos';
import user from './user';

const store = createStore({
    modules: {
        todos,
        user,
    },
});

store.subscribe((mutations, state) => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
});
export default store;
