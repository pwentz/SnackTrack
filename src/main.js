import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueResource from 'vue-resource'
import state from './store/state.js'
import mutations from './store/mutations.js'

Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

new Vue({
  el: '#app',
  store,
  render: (h) => h(App)
})
