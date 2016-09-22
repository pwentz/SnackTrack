<template>
  <div
    class='row
           recipes-container'
  >
    <h2
      class='recipes-header'
    >
      Recipes
    </h2>
    <div
      v-for='validRecipe in $store.state.recipes'
    >
      <div
        v-on:click="mountRecipe(validRecipe)"
        class='recipe
               small-6
               columns'
      >
        <div class='recipe-background'></div>
        <img
          :src='validRecipe.image'
          class='recipe-image'
        >
      </div>


    </div>
  </div>
</template>

<script>
export default {
  props: ['mountRecipe']
}
</script>

<style>
.recipe {
  margin: 0 0 1rem;
  padding: 1rem;
  border: 1px solid hsla(0, 0%, 4%, .25);
  border-radius: 0;
  position: relative;
}

.recipes-header {
  font-family: Pacifico;
  text-align: center;
}

.recipe-background {
  position: absolute;
  background-color: white;
  opacity: 0.9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.recipes-container {
  margin-top: 25px;
}

.recipe-image {
  height: 450px;
  width: 600px;
  z-index: 1;
}
</style>
