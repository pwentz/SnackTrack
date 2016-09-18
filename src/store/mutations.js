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

  PANTRY_EXPANDED (state, turnout) {
    Vue.set(state, 'pantryExpanded', turnout)
  },

  ADD_TO_PANTRY (state) {
    let id = state.addedIngredientId
    let amount = state.addedIngredientAmount
    api.addIngredient(id, amount, state.currentUser).
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
    api.
      destroyPantryIngredient(ingredientId, state.currentUser).
      then(response => {
        Vue.set(state, 'pantryIngredients', response.body)
      })
  },

  RENDER_RECIPES (state) {
    Vue.set(state, 'recipesRendered', !state.recipesRendered)
  },

  REMOVE_BY_RECIPE (state, ingredients) {
    api.
      updatePantryIngredients(ingredients, state.currentUser).
      then(response => {
        Vue.set(state, 'pantryIngredients', response.body)
      })
  }

}
module.exports = mutations
