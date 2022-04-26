import { createStore } from 'vuex';

// import { nanoid } from 'nanoid';
import todos from './todos';
import user from './user';

const store = createStore({
    modules: {
        user,
        todos,
    },
});

// store.subscribe((mutations, state) => {

//     localStorage.setItem('todos', JSON.stringify(state.todos.todos));
// });

export default store;
