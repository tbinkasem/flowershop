import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/sign-up', component: SignUp, name: 'SignUp' },
        { path: '/sign-in', component: SignIn, name: 'SignIn' }
    ],
});

export default router;
