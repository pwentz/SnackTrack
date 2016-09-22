<template>
  <div>
    <div
      v-for='validRecipe in $store.state.recipes'
      class='row'
    >
      <div
        v-on:click="mountRecipe(validRecipe)"
        class='recipe
               small-6
               columns'
      >
        <div class='recipe-background'></div>
        <div class='row'>
          <h3>{{ validRecipe.title }}</h3>
          <div class='small-6 columns'>
          </div>
          <div
            class='small-6
                   columns'
          >
          </div>
        </div>
      </div>
      <img
        :src='validRecipe.image'
        class='recipe-image'
      >


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
