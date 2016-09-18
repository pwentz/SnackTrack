<template>
  <div :style='pantryPresence'>
    {{this.amount}} {{ this.name }}
  </div>
</template>

<script>
export default {
  props: ['name', 'amount'],
  computed: {
    pantryPresence() {
      let names = this.$store.state.pantryIngredients.map(item => item.name)
      if (names.indexOf(this.name) === -1) {
        return 'color:maroon;'
      }
      else {
        return 'color:green;'
      }
    }
  }
}
</script>

<style>

</style>
