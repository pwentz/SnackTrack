<template>
  <div>
    <div
      class='row'
    >
      <h5
        class='p-ingredient-name'
      >
        {{ this.name }}
      </h5>
      <div
        class='small-4
               columns'
      >
        <img v-bind:src="url">
      </div>

      <div
        class='small-8
               columns
               p-ingredient-details'
      >

        Quantity: {{ this.amount }}

        <a href='#'
           class='pantry-x'
           v-on:click='removeIngredient(id)'
        >
          <i class='fi-x'></i>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'amount', 'image', 'removeIngredient', 'id'],
  computed: {
    url() {
      return `https://spoonacular.com/cdn/ingredients_100x100/${this.image}`
    }
  }
}
</script>

<style>
.pantry-x, .pantry-x:hover {
  color: maroon;
  margin-left: 15px;
}
.p-ingredient-details {
  font-family: Raleway;
}
.p-ingredient-name {
  font-family: Raleway;
  text-align: center;
}
</style>
