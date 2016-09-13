<template>
  <div id="app">
    <nav-bar
      :passOauth='handleOauth'
    >
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Api from './ajax.js'

export default {
  components: {
    NavBar
  },
  methods: {
    handleOauth() {
      Api
       .oauthRequest
       .call(this)
       .then(response => {
         console.log(response)
       })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
