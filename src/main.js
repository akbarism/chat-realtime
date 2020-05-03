import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './components/firebaseInit'
import store from './store/index'


let app
firebase.auth().onAuthStateChanged(function() {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
