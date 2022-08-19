import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import {store} from './Store/store.js'
import {routes} from './Routes/routes.js'

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  //aqui se pone las rutas
  routes,
  mode:"history"
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
