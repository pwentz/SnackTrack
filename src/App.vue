<template>
  <div id="app">
    <nav-bar
      :signIn='signInUser'
      :testStore='testThing'
      :signOut='signOutUser'
    >
    </nav-bar>
    <h1 class='header'>
      Let's get cooking...
    </h1>
    <food-search
      :searchForFood='searchForFood'
      :addToPantry='addToPantry'
    >
    </food-search>
  </div>
</template>

<script>
require('./env.js')
import NavBar from './components/NavBar.vue'
import FoodSearch from './components/FoodSearch.vue'

export default {
  components: {
    NavBar,
    FoodSearch
  },
  vuex: {
    getters: {
      searchTerm: state => state.searchTerm,
      pantryIngredients: state => state.pantryIngredients
    }
  },
  methods: {
    signInUser() {
      this.$store.dispatch('LOGIN')
    },

    signOutUser() {
      this.$store.dispatch('LOGOUT')
    },

    searchForFood(event) {
      if (event.target.value === '') {
        console.log('NO REQUEST')
        this.$store.dispatch('FOOD_ROLLUP')
        this.$store.dispatch('PANTRY_EXPANDED', false)
      }
      else {
        this.$store.dispatch('FOOD_SEARCH', event)
        this.$store.dispatch('FOOD_DROPDOWN')
        this.$store.dispatch('PANTRY_EXPANDED', true)
      }
    },

    testThing() {
      console.log(this.$store.state.currentUser)
      this.pantryIngredients.forEach(obj => {
        console.log(obj.name)
        console.log(obj.quantity)
        console.log(obj.image)
      })
    },

    addToPantry(id, quantity) {
      this.$store.dispatch('ADD_INGREDIENT_ID', id)
      this.$store.dispatch('ADD_INGREDIENT_QUANTITY', quantity)
      this.$store.dispatch('ADD_TO_PANTRY')
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  position: relative;
}
.background {
  background-image: url('../assets/food-background.jpg');
  background-position: center;
  opacity: 0.6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
.header {
  font-family: Pacifico;
  text-align: center;
  margin-top: 50px;
  font-size: 72px;
}

</style>
