// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
    namespaced: true,
    state() {
        return {
            user: null,
        };
    },
    actions: {},
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log('user state was changed:', state.user);
        },
    },
    actions:{
        signUp({commit}, {email, password}){
            console.log('user action');
            commit("setUser", {email, password})
        }
    }
    getters: {},
};
