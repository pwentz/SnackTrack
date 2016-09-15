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
    let quantity = state.addedIngredientQuantity
    api.addIngredient(id, quantity, state.currentUser).
      then(response => {
        Vue.set(state, 'pantryIngredients', response.body)
      })
  },

  ADD_INGREDIENT_ID (state, id) {
    Vue.set(state, 'addedIngredientId', id)
  },

  ADD_INGREDIENT_QUANTITY (state, quantity) {
    Vue.set(state, 'addedIngredientQuantity', quantity)
  }

}
module.exports = mutations
