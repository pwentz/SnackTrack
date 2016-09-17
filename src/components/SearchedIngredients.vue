<template>
  <div class='row'>
    <div
      class='small-4
             columns'
      >
      <img v-bind:src="url">
    </div>

    <div
      class='small-3
             columns
             food-name'
      >
      <h5>{{ name }}</h5>
    </div>

    <div
      class='small-3
             columns'
      >
        <div
          class='row
                 quantity-count'
        >
          <i class='fi-plus'
             v-on:click='++quantity'
          ></i>
          {{ quantity }}
          <i class='fi-minus'
            v-on:click='--quantity'
          ></i>
        </div>

        <div class='row'>
          <button
            v-on:click="addIngredient(id, quantity)"
            class='success
                   button'
          >
           Add!
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1
    }
  },
  props: ['name', 'image', 'id', 'addIngredient'],
  computed: {
    url() {
      return `https://spoonacular.com/cdn/ingredients_100x100/${this.image}`
    }
  }
}
</script>

<style>
.food-name {
}

.food-name h5 {
  font-family: Raleway;
  text-align: center;
}
</style>
