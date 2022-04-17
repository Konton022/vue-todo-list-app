import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
            console.log('user action');
            // setTimeout(() => {
            //     commit('setUser', { email, password });
            // }, 2000);
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (res) {
                commit('setUser', res.user.uid);
            } else {
                throw new Error('could not complete signUp');
            }
        },
    },
    getters: {},
};
