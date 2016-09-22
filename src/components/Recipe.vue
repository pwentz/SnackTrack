<template>
  <div
    class='row'
  >
    <div
      class='callout
             small-12
             columns
             small-centered
             recipe-instructions'
    >
      <h3
        id='recipe-header'
      >
        {{ this.recipe.title }}
      </h3>
      <div
        class='row'
      >

        <div
          class='small-6
                 columns'
        >
          <ul
            class='recipe-instructions'
          >
            <li
              v-for='step in formattedInstructions'
            >
              {{ step }}
            </li>
          </ul>
        </div>

        <div
          class='small-6
                 columns'
        >
          <img v-bind:src='inlineImage'>
        </div>
      </div>

      <hr>

      <div
        class='row'
      >
        <div
          class='small-4
                 columns'
        >
          <p
            v-for='ingredient in ingredients'
          >
            {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
          </p>
        </div>
      </div>

    </div>
    <div
      class='row'
    >
      <div
        class='btn-container
               small-3
               columns
               small-centered'
      >
        <button
          class='button
                 info'
          v-on:click='backToRecipes'
        >
          Back to Recipes!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeIngredient from './RecipeIngredient.vue'
export default {
  components: {
    RecipeIngredient
  },
  props: ['recipe', 'ingredients', 'recipeMade', 'backToRecipes'],
  computed: {
    inlineImage() {
      return this.recipe.image
    },
    formattedInstructions() {
      return this.recipe.instructions.split('.')
    }
  }
}
</script>

<style>
.recipe-instructions {
  margin-top: 20px;
}
#recipe-header {
  text-align: center;
  font-family: Pacifico;
}
.btn-container {
  margin: 0 auto;
}
</style>
