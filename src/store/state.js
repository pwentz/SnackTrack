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
  introductionMounted: true,
  searchMounted: false,
  searchTerm: '',
  currentUser: '',
  recentIngredientAmount: ''
}
module.exports = state
