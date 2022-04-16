import { createApp } from 'vue';
import store from './store/index';
import router from './router/index';
import App from './App.vue';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: 'AIzaSyCvXMvfVQ9SECVrwVJxt_fCLGlUWyApr0k',
    authDomain: 'vue-firebase-project-d18cf.firebaseapp.com',
    projectId: 'vue-firebase-project-d18cf',
    storageBucket: 'vue-firebase-project-d18cf.appspot.com',
    messagingSenderId: '943588443680',
    appId: '1:943588443680:web:81d950dcccea6af7fdde45',
};
initializeApp(firebaseConfig);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        const app = createApp(App);
        app.use(router);
        app.use(store);
        app.mount('#app');
    }
    console.log('user', user);
});
