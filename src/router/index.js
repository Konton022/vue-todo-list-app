import { createRouter, createWebHashHistory } from 'vue-router';
import LogIn from '../components/LogIn';
import TodoApp from '../components/TodoApp';
import PageNotFounded from '../components/PageNotFounded';

const router = createRouter({
    history: createWebHashHistory('/vue-todo-list-app/'),
    routes: [
        { path: '/', component: LogIn },
        { path: '/todoapp/', component: TodoApp },
        { path: '/:pathMatch(.*)', component: PageNotFounded },
    ],
});

export default router;
