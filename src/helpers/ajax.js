import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

class Ajax {
  fetchIngredients(searchTerm) {
    return Vue.http.get(
      `http://localhost:3000/ingredients/search.json?search=${searchTerm}`
    )
  }

  addIngredient(ingredientId, amount, currentUser) {
    return Vue.http.post(
      `http://localhost:3000/api/v1/pantry_ingredients/${ingredientId}.json`,
      { 'googleId': currentUser, 'amount': amount }
    )
  }

  setCurrentUser(userId, userName) {
    return Vue.http.post(
      'http://localhost:3000/api/v1/users/sign_in.json',
      { 'googleId': userId, 'userName': userName }
    )
  }

  fetchRecipes(ingredients) {
    return Vue.http.get(
      'http://localhost:3000/api/v1/recipes/search.json',
      { 'params': { 'ingredients': ingredients } }
    )
  }

  destroyPantryIngredient(ingredientId, googleId) {
    return Vue.http.delete(
      `http://localhost:3000/api/v1/pantry_ingredients/${ingredientId}.json`,
      { 'params': { 'googleId': googleId } }
    )
  }
}

module.exports = new Ajax()
