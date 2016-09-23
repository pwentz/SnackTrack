const state = {
  searchResults: [],
  recipes: [],
  pantryIngredients: [],
  mountedIngredients: [],
  mostRecentIngredient: {},
  mostRecentAmount: 0,
  mountedRecipe: {},
  recipeIsMounted: false,
  signedIn: false,
  foodDropDown: false,
  mostRecentExpanded: false,
  pantryMounted: false,
  recipesMounted: false,
  searchMounted: true,
  searchTerm: '',
  currentUser: '',
  recentIngredientAmount: ''
}
module.exports = state
