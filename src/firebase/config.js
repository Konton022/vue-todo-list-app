import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCvXMvfVQ9SECVrwVJxt_fCLGlUWyApr0k',
    authDomain: 'vue-firebase-project-d18cf.firebaseapp.com',
    projectId: 'vue-firebase-project-d18cf',
    storageBucket: 'vue-firebase-project-d18cf.appspot.com',
    messagingSenderId: '943588443680',
    appId: '1:943588443680:web:81d950dcccea6af7fdde45',
};

//init firebase
initializeApp(firebaseConfig);

//init auth
const auth = getAuth();

export { auth };
