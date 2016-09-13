import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})
