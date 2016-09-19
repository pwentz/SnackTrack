import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

class Ajax {
  fetchIngredients(searchTerm) {
    return Vue.http.get(
      `http://localhost:3000/api/v1/ingredients/search.json?search=${searchTerm}`
      // `https://snacktrackapi.herokuapp.com/api/v1/ingredients/search.json?search=${searchTerm}`
    )
  }

  addIngredient(ingredientId, amount, currentUser) {
    return Vue.http.post(
      `http://localhost:3000/api/v1/pantry_ingredients/${ingredientId}.json`,
      // `https://snacktrackapi.herokuapp.com/api/v1/pantry_ingredients/${ingredientId}.json`,
      { 'googleId': currentUser, 'amount': amount }
    )
  }

  setCurrentUser(userId, userName) {
    return Vue.http.post(
      'http://localhost:3000/api/v1/users/sign_in.json',
      // `https://snacktrackapi.herokuapp.com/api/v1/users/sign_in.json`,
      { 'googleId': userId, 'userName': userName }
    )
  }

  fetchRecipes(ingredients) {
    return Vue.http.get(
      'http://localhost:3000/api/v1/recipes/search.json',
      // `https://snacktrackapi.herokuapp.com/api/v1/recipes/search.json`,
      { 'params': { 'ingredients': ingredients } }
    )
  }

  destroyPantryIngredient(ingredientId, googleId) {
    return Vue.http.delete(
      `http://localhost:3000/api/v1/pantry_ingredients/${ingredientId}.json`,
      // `https://snacktrackapi.herokuapp.com/api/v1/pantry_ingredients/${ingredientId}.json`,
      { 'params': { 'googleId': googleId } }
    )
  }

  updatePantryIngredients(ingredients, googleId) {
    return Vue.http.patch(
      `http://localhost:3000/api/v1/pantry_ingredients.json`,
      // `https://snacktrackapi.herokuapp.com/api/v1/pantry_ingredients.json`,
      { 'googleId': googleId, 'recipe_ingredients': ingredients }
    )
  }

  getRecipe(id) {
    return Vue.http.get(
      `http://localhost:3000/api/v1/recipes/${id}.json`
    )
  }
}

module.exports = new Ajax()
