import Vue from 'vue'
const OauthHelper = require('./../helpers/oauthHelper')
const oauth = new OauthHelper
const api = require('./../helpers/ajax')

const mutations = {

  LOGIN (state) {
    oauth.handleOauth(state)
    Vue.set(state, 'signedIn', true)
  },

  LOGOUT (state) {
    oauth.signOut()
    Vue.set(state, 'signedIn', false)
  },

  FOOD_SEARCH (state, event) {
    Vue.set(state, 'searchTerm', event.target.value)
    api.fetchIngredients(event.target.value).
      then(response => {
        Vue.set(state, 'searchResults', response.body)
      })
  },

  FOOD_DROPDOWN (state) {
    Vue.set(state, 'foodDropDown', true)
  },

  FOOD_ROLLUP (state) {
    Vue.set(state, 'foodDropDown', false)
  },

  EXPAND_PANTRY (state) {
    Vue.set(state, 'pantryExpanded', true)
  },

  RETRACT_PANTRY (state) {
    Vue.set(state, 'pantryExpanded', false)
  },

  ADD_TO_PANTRY (state) {
    let id = oauth.auth2.currentUser.get().getBasicProfile().Eea
    let amount = state.addedIngredientAmount
    api.addIngredient(state.addedIngredientId, amount, id).
      then(response => {
        Vue.set(state, 'pantryIngredients', response.body)
      })
  },

  ADD_INGREDIENT_ID (state, id) {
    Vue.set(state, 'addedIngredientId', id)
  },

  ADD_INGREDIENT_AMOUNT (state, amount) {
    Vue.set(state, 'addedIngredientAmount', amount)
  },

  LOAD_RECIPES (state, ingredients) {
    api.fetchRecipes(ingredients).
      then(response => {
        Vue.set(state, 'recipes', response.body)
      })
  },

  REMOVE_FROM_PANTRY (state, ingredientId) {
    let id = oauth.auth2.currentUser.get().getBasicProfile().Eea
    api.
      destroyPantryIngredient(ingredientId, id).
      then(response => {
        Vue.set(state, 'pantryIngredients', response.body)
      })
  },

  MOUNT_RECIPES (state) {
    Vue.set(state, 'recipesMounted', true)
  },

  DISMOUNT_SEARCH (state) {
    Vue.set(state, 'searchMounted', false)
  },

  DISMOUNT_RECIPES (state) {
    Vue.set(state, 'recipesMounted', false)
  },

  MOUNT_SEARCH (state) {
    Vue.set(state, 'searchMounted', true)
  },

  REMOVE_BY_RECIPE (state, ingredients) {
    let id = oauth.auth2.currentUser.get().getBasicProfile().Eea
    api.
      updatePantryIngredients(ingredients, id).
      then(response => {
        Vue.set(state, 'pantryIngredients', response.body)
      })
  },

  MOUNT_RECIPE (state, recipe) {
    api.
      getRecipe(recipe.spoon_id).
      then(response => {
        Vue.set(state, 'mountedRecipe', response.body)
        Vue.set(state, 'mountedIngredients', response.body.recipe_ingredients)
        console.log(response.body.recipe_ingredients)
        Vue.set(state, 'recipeIsMounted', true)
      })
  },

  DISMOUNT_RECIPE (state) {
    Vue.set(state, 'recipeIsMounted', false)
  }
}
module.exports = mutations
