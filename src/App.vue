<template>
  <div id="app">
    <nav-bar
      :signIn='signInUser'
      :testStore='testThing'
      :signOut='signOutUser'
      :removeIngredient='handleDelete'
      :mountSearch='mountSearch'
    >
    </nav-bar>
    <h1 class='header'
        v-if='$store.state.searchMounted'
    >
      Let's get cooking...
    </h1>

    <food-search
      v-if='$store.state.searchMounted'
      :searchForFood='searchForFood'
      :addToPantry='addToPantry'
      :fetchRecipes='fetchRecipes'
    >
    </food-search>

    <recipes
      v-if='recipesMounted'
      :mountRecipe='mountRecipe'
    >
    </recipes>

    <recipe
      :recipe='mountedRecipe'
      :ingredients='mountedIngredients'
      :backToRecipes='recipeIndex'
      v-if='recipeIsMounted'
    >
    </recipe>

  </div>
</template>

<script>
require('./env.js')
import NavBar from './components/NavBar.vue'
import FoodSearch from './components/FoodSearch.vue'
import Recipes from './components/Recipes.vue'
import Recipe from './components/Recipe.vue'

export default {
  components: {
    NavBar,
    FoodSearch,
    Recipes,
    Recipe
  },

  vuex: {
    getters: {
      searchTerm: state => state.searchTerm,
      pantryIngredients: state => state.pantryIngredients,
      recipes: state => state.recipes,
      mountedRecipe: state => state.mountedRecipe,
      mountedIngredients: state => state.mountedIngredients,
      recipeIsMounted: state => state.recipeIsMounted,
      recipesMounted: state => state.recipesMounted,
      searchMounted: state => state.searchMounted
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
        console.log(obj.amount)
        console.log(obj.image)
      })
    },

    addToPantry(id, amount) {
      this.$store.dispatch('ADD_INGREDIENT_ID', id)
      this.$store.dispatch('ADD_INGREDIENT_AMOUNT', amount)
      this.$store.dispatch('ADD_TO_PANTRY')
    },

    fetchRecipes() {
      this.$store.dispatch('LOAD_RECIPES', this.pantryIngredients)
      this.recipes.forEach(recipe => {
        console.log(recipe)
      })
    },

    recipeIndex() {
      this.$store.dispatch('DISMOUNT_RECIPE')
      this.$store.dispatch('MOUNT_RECIPES')
      this.$store.dispatch('DISMOUNT_SEARCH')
    },

    mountRecipe(recipe) {
      this.$store.dispatch('DISMOUNT_RECIPES')
      this.$store.dispatch('DISMOUNT_SEARCH')
      this.$store.dispatch('MOUNT_RECIPE', recipe)
    },

    mountSearch() {
      this.$store.dispatch('DISMOUNT_RECIPES')
      this.$store.dispatch('DISMOUNT_RECIPE')
      this.$store.dispatch('MOUNT_SEARCH')
    },

    handleDelete(ingredientId) {
      this.$store.dispatch('REMOVE_FROM_PANTRY', ingredientId)
    },

    handleRecipe(ingredients) {
      let names = this.pantryIngredients.map(i => i.name)
      let recipeIngredients = ingredients.filter(item => {
        return names.indexOf(item.name) !== -1
      })
      if (confirm("Log recipe as eaten? If yes, we will remove the necessary ingredients from your pantry")) {
        this.$store.dispatch('REMOVE_BY_RECIPE', recipeIngredients)
      }
    },
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
