<template>
  <div id='pantry-ingredients'>
    <div
      data-dropdown='pantry-dropdown'
      aria-controls='pantry-dropdown'
      aria-expanded='false'
    >
      <div
        id='pantry-dropdown'
        data-dropdown-content
        aria-hidden='true'
      >
        <div
          class='callout
                 pantry-item'
          v-for='ingredient in $store.state.pantryIngredients'
        >
          <pantry-ingredient
            :name='ingredient.name'
            :quantity='ingredient.quantity'
            :image='ingredient.image'
          >
          </pantry-ingredient>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PantryIngredient from './PantryIngredient.vue'
export default {
  components: {
    PantryIngredient
  }
}
</script>

<style>
#pantry-ingredients {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  margin-top: 65px;
  margin-right: 150px;
}
.pantry-item {
  width: 250px;
  height: 100px;
}
.pantry-item h5 {
  text-align: center;
}
</style>
