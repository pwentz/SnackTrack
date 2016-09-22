<template>
  <div
    class='ingredient-container'
  >
    <div
      class='row'
    >
      <h4
        class='ingredient-header'
      >
        {{ ingredient.name }}
      </h4>
      <p>
        Quantity: {{ ingredient.amount }}
      </p>

      <div
        class='small-4
               ingredient-image-container
               small-centered
               columns'
      >
        <img
          :src='imageUrl'
        >
      </div>

      <div
        class='row'
      >
        <div
          class='small-3
                 small-centered
                 btn-container
                 columns'
        >
          <button
            v-on:click='removeIngredient(ingredient.id)'
            class='button
                   alert'
          >
            <i class='fi-trash'></i>
          </button>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  props: ['ingredient', 'removeIngredient'],
  computed: {
    imageUrl() {
      return `https://spoonacular.com/cdn/ingredients_100x100/${this.ingredient.image}`
    }
  }
}
</script>

<style>
.btn-container {
  margin-top: 20px;
  margin-bottom: 5px;
}
.ingredient-container {
  height: 250px;
}
.ingredient-header, p {
  text-align: center;
  font-family: Raleway;
}
.ingredient-image-container {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
