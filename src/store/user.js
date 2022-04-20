import { auth } from '@/firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

const user = {
    namespaced: true,
    state() {
        return {
            user: null,
            isUserAuth: false,
        };
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log('user state was changed:', state.user);
        },
        setUserAuth(state, payload) {
            state.isUserAuth = payload;
            console.log('isAuth state was changed:', state.isUserAuth);
        },
    },
    actions: {
        async signUp({ commit }, { email, password }) {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (res) {
                commit('setUser', res.user);
                commit('setUserAuth', true);
            } else {
                throw new Error('could not complete signUp');
            }
        },
        async signIn({ commit }, { email, password }) {
            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res) {
                commit('setUser', res.user);
                commit('setUserAuth', true);
            } else {
                throw new Error('could not complete signIn');
            }
        },
        async logOut({ commit }) {
            await signOut(auth);
            commit('setUser', null);
            commit('setUserAuth', false);
        },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
};

export default user;
