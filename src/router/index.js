import { createRouter, createWebHashHistory } from 'vue-router';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import TodoApp from '../components/TodoApp';
import PageNotFounded from '../components/PageNotFounded';

const router = createRouter({
    history: createWebHashHistory('/vue-todo-list-app/'),
    routes: [
        { path: '/', component: SignIn },
        { path: '/signup', component: SignUp },
        { path: '/todoapp/', component: TodoApp },
        { path: '/:pathMatch(.*)', component: PageNotFounded },
    ],
});

export default router;
