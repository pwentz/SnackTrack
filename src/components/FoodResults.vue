<template>
  <div
    id='food-dropdown'
    data-dropdown-content
    aria-hidden='true'
  >
    <div
      class='ingredient
             callout'
      v-for='ingredient in $store.state.searchResults'
    >

      <searched-ingredients
        :name='ingredient.name'
        :image='ingredient.image'
        :id='ingredient.id'
        :addIngredient='addIngredient'
      >
      </searched-ingredients>

    </div>
  </div>
</template>

<script>
import SearchedIngredients from './SearchedIngredients.vue'
export default {
  components: {
    SearchedIngredients
  },
  props: ['addIngredient']
}
</script>

<style>
.ingredient {
  width: 350px;
  margin: 0 auto;
  height: 150px;
}
</style>
