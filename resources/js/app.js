import Vue from 'vue'
import router from './router.js'
import App from '../vues/app.vue'

const app = new Vue(Vue.util.extend({
    router
}, App))

app.$mount('#app');