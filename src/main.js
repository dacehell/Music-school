import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

let app = '';

Firebase.auth().onAuthStateChanged(()  =>{
  if(!app){
    
  app = new Vue({
      Firebase,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})