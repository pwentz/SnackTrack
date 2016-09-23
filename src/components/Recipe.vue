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
      <h2
        id='recipe-header'
      >
        {{ this.recipe.title }}
      </h2>
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
          <img v-bind:src='inlineImage'
               id='recipe-image'
          >
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
        class='small-2
               small-centered
               columns'
      >
        <button
          class='button
                 eat-button'
          v-on:click='recipeMade(ingredients)'
          v-on:mouseenter="$store.dispatch('EXPAND_PANTRY')"
          v-on:mouseleave="$store.dispatch('RETRACT_PANTRY')"
        >
          Eat
        </button>
      </div>
    </div>

    <div
      class='row'
    >
      <div
        class='btn-container
               small-2
               columns
               small-centered'
      >
        <button
          class='button
                 recipes-index-button
                 info'
          v-on:click='backToRecipes'
        >
          <i class='fi-arrow-left'></i> Recipes
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
  font-family: Raleway;
}
#recipe-header {
  text-align: center;
  font-family: Pacifico;
}
.btn-container {
  margin: 0 auto;
}
#recipe-image {
  border-radius: 12px;
}
.recipes-index-button {
  background-color: #b3d6ff;
  color: black;
  font-family: Raleway;
}
.recipes-index-button:hover {
  color: black;
  background-color: #ffae00;
}
.eat-button {
  color: black;
  background-color: #ffae00;
  font-family: Raleway;
}
.eat-button:hover {
  color: white;
  background-color: maroon;
}
</style>
