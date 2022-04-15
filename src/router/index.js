import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '../components/LogIn';
import TodoApp from '../components/TodoApp';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: LogIn },
        { path: '/todoapp', component: TodoApp },
    ],
});

export default router;
