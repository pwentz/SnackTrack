<template>
  <div class='food-search'>

    <input
      type='text'
      v-on:keyup="searchForFood($event)"
      placeholder='Search by food...'
      data-dropdown='food-dropdown'
      aria-controls='food-dropdown'
      aria-expanded='false'
    >

    <div class='row'>
      <div
        class='small-5
               columns
               small-centered'
      >
        <button class='button
                       recipe-button'
                v-on:click='fetchRecipes'
        >
          Get Recipes!
        </button>
    </div>

    <food-results
      v-if='$store.state.foodDropDown'
      :addIngredient='addToPantry'
    >
    </food-results>

  </div>
</template>

<script>
import FoodResults from './FoodResults.vue'
export default {
  components: {
    FoodResults
  },
  props: ['searchForFood', 'addToPantry', 'fetchRecipes']
}
</script>

<style>
.food-search {
  width: 350px;
  margin: 0 auto;
  margin-top: 50px;
}
.recipe-button {
  margin: 0 auto;
  font-family: Raleway;
  background-color: #b3d6ff;
  color: black;
}
.recipe-button:hover {
  background-color: #ffae00;
  color: black;
}
</style>
