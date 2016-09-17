<template>
  <div class='food-search'>

    <input
      type='text'
      v-on:keyup="searchForFood($event)"
      data-dropdown='food-dropdown'
      aria-controls='food-dropdown'
      aria-expanded='false'
    >
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
  props: ['searchForFood', 'addToPantry']
}
</script>

<style>
.food-search {
  width: 350px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
