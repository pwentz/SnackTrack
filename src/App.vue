<template>
  <div id="app">
    <nav-bar
      :signIn='handleOauth'
      :signOut='signOutUser'
    >
    </nav-bar>
  </div>
</template>

<script>
require('./env.js')
import NavBar from './components/NavBar.vue'
import Ajax from './ajax.js'
const api = new Ajax
const clientId = process.env.google_client_id
const apiKey = process.env.google_api_key
const scopes = 'profile email'
let auth2

export default {
  components: {
    NavBar
  },
  data() {
    return {
    }
  },
  methods: {
    handleOauth() {
      gapi.load('client:auth2', this.initOauth)
    },

    initOauth() {
      gapi.client.setApiKey(apiKey)
      gapi.auth2.init({
        client_id: clientId,
        scope: scopes
      })
      .then( () => {
        auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn();
      })
    },

    signOutUser() {
      auth2.signOut();
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
