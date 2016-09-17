<template>
  <div>
    <div
      class='row'
    >
      <div
        class='small-4
               columns'
      >
        <img v-bind:src="url">
      </div>

      <div
        class='small-4
               columns'
      >
        <h5>{{ this.name }}</h5>
      </div>

      <div
        class='small-4
               columns
               p-ingredient-details'
      >

        <div
          class='row'
        >
          <p>{{ this.quantity }}</p>
        </div>

        <div
          class='row'
        >
          <div>
            <a href='#'
               class='pantry-x'
            >
              <i class='fi-x'></i>
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'quantity', 'image'],
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
}
</style>
