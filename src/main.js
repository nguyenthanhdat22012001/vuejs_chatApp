import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import axios from 'axios'
import * as firebase from "firebase/app";

//install icon
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// install vue router
Vue.use(VueRouter)

//install firebase
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyCquOIm4_RCrxw74mwK1ZEiI9AeTH1jbY8",
  authDomain: "chat-app-vuejs-d13da.firebaseapp.com",
  projectId: "chat-app-vuejs-d13da",
  storageBucket: "chat-app-vuejs-d13da.appspot.com",
  messagingSenderId: "414986061746",
  appId: "1:414986061746:web:2cd9a78f75daa3817d86ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false





import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Register from './components/Register.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home ,name:'Home'},
  { path: '/register', component: Register ,name:'register'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
