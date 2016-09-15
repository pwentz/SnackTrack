import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

class Ajax {
  fetchIngredients(searchTerm) {
    return Vue.http.get(
      `http://localhost:3000/ingredients/search.json?search=${searchTerm}`
    )
  }

  addIngredient(ingredientId, quantity, currentUser) {
    return Vue.http.post(
      `http://localhost:3000/api/v1/user_ingredients/${ingredientId}/add_to_pantry.json`,
      { 'googleId': currentUser, 'quantity': quantity }
    )
  }

  setCurrentUser(userId, userName) {
    return Vue.http.post(
      'http://localhost:3000/api/v1/users/sign_in.json',
      { 'googleId': userId, 'userName': userName }
    )
  }
}

module.exports = new Ajax()
