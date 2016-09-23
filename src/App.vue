<template>
  <div id="app">
    <nav-bar
      :signIn='signInUser'
      :adjustPantryState='handlePantry'
      :signOut='signOutUser'
      :mountSearch='mountSearch'
    >
    </nav-bar>
    <h1 class='header'
        v-if='$store.state.searchMounted'
    >
      Let's get cookin'!
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
      :recipeMade='handleRecipe'
      v-if='recipeIsMounted'
    >
    </recipe>

    <pantry
      v-if='pantryMounted'
      :ingredients='pantryIngredients'
      :removeIngredient='handleDelete'
    >
    </pantry>

    <introduction
      v-if='introductionMounted'
    >
    </introduction>


  </div>
</template>

<script>
require('./env.js')
import Introduction from './components/Introduction.vue'
import Pantry from './components/Pantry.vue'
import NavBar from './components/NavBar.vue'
import FoodSearch from './components/FoodSearch.vue'
import Recipes from './components/Recipes.vue'
import Recipe from './components/Recipe.vue'

export default {
  components: {
    NavBar,
    FoodSearch,
    Recipes,
    Pantry,
    Recipe,
    Introduction
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
      searchMounted: state => state.searchMounted,
      mostRecentExpanded: state => state.mostRecentExpanded,
      pantryMounted: state => state.pantryMounted,
      introductionMounted: state => state.introductionMounted
    }
  },

  methods: {
    signInUser() {
      this.$store.dispatch('LOGIN')
      this.$store.dispatch('MOUNT_SEARCH')
      this.$store.dispatch('DISMOUNT_INTRODUCTION')
    },

    signOutUser() {
      this.$store.dispatch('LOGOUT')
    },

    searchForFood(event) {
      if (event.target.value === '') {
        console.log('NO REQUEST')
        this.$store.dispatch('FOOD_ROLLUP')
        this.$store.dispatch('RETRACT_MOST_RECENT')
      }
      else {
        this.$store.dispatch('FOOD_SEARCH', event)
        this.$store.dispatch('FOOD_DROPDOWN')
        this.$store.dispatch('EXPAND_MOST_RECENT')
      }
    },

    addToPantry(ingredient, amount) {
      this.$store.dispatch('SET_RECENT_AMOUNT', amount)
      this.$store.dispatch('ADD_RECENT_INGREDIENT', ingredient)
      this.$store.dispatch('ADD_TO_PANTRY')
    },

    fetchRecipes() {
      this.$store.dispatch('LOAD_RECIPES', this.pantryIngredients)
      this.$store.dispatch('DISMOUNT_SEARCH')
      this.$store.dispatch('RETRACT_MOST_RECENT')
      this.$store.dispatch('MOUNT_RECIPES')
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
      this.$store.dispatch('MOUNT_PANTRY', false)
      this.$store.dispatch('RETRACT_MOST_RECENT')
      this.$store.dispatch('FOOD_ROLLUP')
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
        this.$store.dispatch('LOAD_RECIPES', this.pantryIngredients)
        this.$store.dispatch('MOUNT_RECIPES')
        this.$store.dispatch('DISMOUNT_RECIPE')
        this.$store.dispatch('RETRACT_MOST_RECENT')
      }
    },

    handlePantry() {
      if (this.pantryMounted) {
        this.$store.dispatch('MOUNT_SEARCH')
        this.$store.dispatch('MOUNT_PANTRY', false)
      }
      else {
        this.$store.dispatch('DISMOUNT_SEARCH')
        this.$store.dispatch('DISMOUNT_RECIPES')
        this.$store.dispatch('DISMOUNT_RECIPE')
        this.$store.dispatch('RETRACT_MOST_RECENT')
        this.$store.dispatch('MOUNT_PANTRY', true)
      }
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  position: relative;
}
.app-background {
  background-image: url('../assets/food_background.jpg');
  background-position: center;
  background-attachment: fixed;
}
.header {
  font-family: Pacifico;
  text-align: center;
  margin-top: 50px;
  font-size: 72px;
}

</style>
