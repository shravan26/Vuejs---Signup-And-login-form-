import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from  'firebase/app';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCcUZ6v3uQbBmcWz_s6vDiu03e3CGaVW9E",
  authDomain: "simplevueapp-dd0de.firebaseapp.com",
  databaseURL: "https://simplevueapp-dd0de.firebaseio.com",
  projectId: "simplevueapp-dd0de",
  storageBucket: "simplevueapp-dd0de.appspot.com",
  messagingSenderId: "652652061049",
  appId: "1:652652061049:web:f3eeb46014bc9f8a80cfa8",
  measurementId: "G-1JD0H1RNQ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
