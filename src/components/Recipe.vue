<template>
  <div>
    <div
      class='recipe
             small-6
             columns'
    >
      <div class='recipe-background'></div>
      <div class='row'>
        <h3>{{ this.title }}</h3>
        <div class='small-6 columns'>
          <ul
            class='recipe-ingredient-container'
          >
            <li
              v-for='ingredient in ingredients'
            >

              <recipe-ingredient
                :name='ingredient.name'
                :amount='ingredient.amount'
              >
              </recipe-ingredient>

            </li>
          </ul>
        </div>
        <div
          class='small-6
                 columns'
        >
          <button
            v-on:click='recipeMade(ingredients)'
            class='button
                   info'
          >
            Click me!
          </button>
        </div>
      </div>
    </div>
    <img
      :src='recipeImage'
      class='recipe-image'
    >
  </div>
</template>

<script>
import RecipeIngredient from './RecipeIngredient.vue'
export default {
  components: {
    RecipeIngredient
  },
  props: ['id', 'title', 'image', 'readyTime', 'ingredients', 'recipeMade'],
  computed: {
    recipeImage() {
      return this.image
    }
  }
}
</script>

<style>
.recipe {
  height: 450px;
  width: 600px;
  margin: 0 0 1rem;
  padding: 1rem;
  border: 1px solid hsla(0, 0%, 4%, .25);
  border-radius: 0;
  position: relative;
}

.recipe-background {
  position: absolute;
  background-color: white;
  opacity: 0.6;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.recipe-ingredient-container {
  list-style-type: none;
}

.recipe-image {
  height: 450px;
  width: 600px;
  z-index: 50;
}
</style>
