import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '../components/LogIn';
import TodoApp from '../components/TodoApp';

const router = createRouter({
    base: 'https://konton022.github.io/vue-todo-list-app/',
    history: createWebHistory('/vue-todo-list-app/'),
    routes: [
        { path: '', component: LogIn },
        { path: '/todoapp', component: TodoApp },
    ],
});

export default router;
