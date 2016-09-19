<template>
  <div>
    <div
      v-for='validRecipe in $store.state.recipes'
      class='row'
    >

      <recipe
        :id='validRecipe.id'
        :title='validRecipe.title'
        :readyTime='validRecipe.ready_time'
        :image='validRecipe.image'
        :ingredients='validRecipe.recipe_ingredients'
        :recipeMade='passIngredients'
      >
      </recipe>

    </div>
  </div>
</template>

<script>
import Recipe from './Recipe.vue'
export default {
  props: ['passIngredients'],
  components: {
    Recipe
  }
}
</script>

<style>
</style>
