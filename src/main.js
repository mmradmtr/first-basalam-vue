import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import { store } from './store'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter, axios, VueAxios)

const router = new VueRouter({
  mode: "history",
  routes,
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
