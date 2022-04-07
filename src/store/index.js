import { createStore } from 'vuex';

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
});

export default store;
