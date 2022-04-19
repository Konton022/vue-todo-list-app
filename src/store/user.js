import { auth } from '@/firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import store from '.';

export default {
    namespaced: true,
    state() {
        return {
            user: null,
        };
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log('user state was changed:', state.user);
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
            } else {
                throw new Error('could not complete signUp');
            }
        },
        async signIn({ commit }, { email, password }) {
            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res) {
                commit('setUser', res.user);
            } else {
                throw new Error('could not complete signIn');
            }
        },
        async logOut({ commit }) {
            await signOut(auth);
            commit('setUser', null);
        },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
};

const unsub = onAuthStateChanged(auth, (user) => {
    // this.$store.commit('setAuthIsReady', true);
    store.user.commit('setUser', user);
    unsub();
});
