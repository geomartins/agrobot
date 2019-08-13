import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Loader from './views/errors/Loader'
import { store } from './store/store'
import VueSweetalert2 from 'vue-sweetalert2'
import VueApexCharts from 'vue-apexcharts'
import VeeValidate from 'vee-validate'
import Connection from './views/layouts/Connection'
import axios from 'axios'

axios.defaults.baseURL = 'https://lumen.lilycourt.ng/'
axios.defaults.headers.get['Accepts'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'


axios.interceptors.request.use(config => {
  return config;
})

axios.interceptors.response.use(res => {
  return res;
})



import {routes} from './routes'

Vue.component('apexchart', VueApexCharts)
Vue.component('custom-loader', Loader)
Vue.component('custom-connection', Connection)


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSweetalert2)
Vue.use(VeeValidate, {
  validity: true
});

Vue.use(axios)


const router = new VueRouter({
  routes,
  store,
  mode: 'history'
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



