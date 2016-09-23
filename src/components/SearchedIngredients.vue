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
      <h5>{{ ingredient.name }}</h5>
      <button
        v-on:click="addIngredient(ingredient, amount)"
        class='success
               add-button
               button'
      >
       Add!
      </button>
    </div>

    <div
      class='small-3
             columns'
    >
      <div
        class='row
               amount-count'
      >
        <i class='fi-plus'
           v-on:click='++amount'
        ></i>
        <h4>{{ amount }}</h4>
        <i class='fi-minus'
          v-on:click='--amount'
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 1
    }
  },
  props: ['ingredient', 'addIngredient'],
  computed: {
    url() {
      return `https://spoonacular.com/cdn/ingredients_100x100/${this.ingredient.image}`
    }
  }
}
</script>

<style>
.fi-plus {
  color: green;
}
.fi-minus {
  color: maroon;
}
.amount-count h4 {
  font-family: Raleway;
}
.food-name h5 {
  font-family: Raleway;
  text-align: center;
}
.add-button {
  margin-top: 10px;
}
</style>
