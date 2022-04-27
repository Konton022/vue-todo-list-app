import { createApp } from 'vue';
import store from './store/index';
import router from './router/index';
import App from './App.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';

onAuthStateChanged(auth, (user) => {
    if (user) {
        store.commit('user/setUser', user);
        store.commit('user/setUserAuth', true);
        store.dispatch('todos/subscribeToFirebase');
        // store.dispatch('todos/setFilteredTodoAction');
        router.push('/todoapp');
    } else {
        router.push('/');
    }
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
