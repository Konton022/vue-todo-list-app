import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
    namespaced: true,
    state() {
        return {};
    },
    actions: {
        async login(_, { email, password }) {
            const auth = getAuth();
            const data = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log('data', data);
            this.$router.push('/todoapp');
        },
    },
    mutations: {},
    getters: {},
};
