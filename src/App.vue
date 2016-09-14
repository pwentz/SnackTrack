<template>
  <div id="app">
    <nav-bar
      :signIn='signInUser'
      :testStore='testThing'
      :signOut='signOutUser'
    >
    </nav-bar>
  </div>
</template>

<script>
require('./env.js')
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  methods: {
    signInUser() {
      this.$store.dispatch('LOGIN')
    },

    signOutUser() {
      this.$store.dispatch('LOGOUT')
    },

    testThing() {
      console.log(this.$store.state.signedIn)
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
