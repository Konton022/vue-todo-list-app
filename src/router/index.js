import { createRouter, createWebHashHistory } from 'vue-router';
import LogIn from '../components/LogIn';
import TodoApp from '../components/TodoApp';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: LogIn },
        { path: '/todoapp', component: TodoApp },
    ],
});

export default router;
