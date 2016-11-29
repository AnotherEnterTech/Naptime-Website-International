import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import App from './pages/App.vue'
import About from './pages/About.vue'
import Tip from './pages/Tip.vue'

const routes = [{
    name: 'index',
    path: '/',
    redirect: '/home'
}, {
    name: 'home',
    path: '/home',
    component: Home
}, {
    mame: 'product',
    path: '/product',
    component: Product
}, {
    mame: 'app',
    path: '/app',
    component: App
}, {
    mame: 'about',
    path: '/about',
    component: About
}, {
    name: 'tip',
    path: '/tip',
    component: Tip
}]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes
})

export default router
