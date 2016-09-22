<template>
  <div
    class='row'
    id='pantry-container'
  >

    <div
      class='small-10
             small-centered
             columns'
    >
      <div
        v-for='ingredient in ingredients'
        class='small-4
               callout
               end
               columns'
      >

        <pantry-ingredient
          :ingredient='ingredient'
          :removeIngredient='removeIngredient'
        >
        <pantry-ingredient>

      </div>
    </div>


  </div>
</template>

<script>
import PantryIngredient from './PantryIngredient.vue'
export default {
  components: {
    PantryIngredient
  },
  props: ['ingredients', 'removeIngredient']
}
</script>

<style>
#pantry-container {
  margin-top: 15px;
}
</style>
