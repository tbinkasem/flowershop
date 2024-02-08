import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: '/', component: HomePage, name: 'HomePage' },
        { path: '/sign-up', component: SignUp, name: 'SignUp' },
        { path: '/sign-in', component: SignIn, name: 'SignIn' },
        { path: '/add', component: Add, name: 'Add' },
        { path: '/update/:id', component: Update, name: 'Update' }
    ],

});

export default router;
