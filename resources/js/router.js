import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AppView from '../vues/app.vue'

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [{
        path: '/home',
        component: AppView
    }, {
        path: '/product',
        component: AppView
    }, {
        path: '/app',
        component: AppView
    }, {
        path: '/about',
        component: AppView
    }, {
        path: '/',
        redirect: '/home'
    }]
})