import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import {store} from './store'
import {routes} from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter, axios, VueAxios)

//add public method
Vue.mixin({
    methods: {
        fMoney: (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
})
/*var fMoney = function (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}*/


const router = new VueRouter({
    mode: "history",
    routes,
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
