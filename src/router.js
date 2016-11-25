import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import App from './pages/App.vue'
import About from './pages/About.vue'

const routes = [{
    name: 'index',
    path: '/',
    component: Home
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
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router