<template>
  <div
    id='most-recent-container'
    class='row'
  >
    <div
      class='callout
             pantry-item'
    >
      <h5
        class='p-ingredient-name'
      >
        {{ ingredient.name }}
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

        Quantity: {{ this.$store.state.mostRecentAmount }}

        <a href='#'
           class='pantry-x'
           v-on:click='removeIngredient(ingredient.id)'
        >
          <i class='fi-x'></i>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['ingredient'],
  computed: {
    url() {
      return `https://spoonacular.com/cdn/ingredients_100x100/${this.ingredient.image}`
    }
  }
}
</script>

<style>
#most-recent-container {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  margin-top: 65px;
  margin-right: 150px;
  background-color: lightgrey;
}
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
.pantry-item {
  width: 350px;
  height: 150px;
}
.pantry-item h5 {
  text-align: center;
}
</style>
