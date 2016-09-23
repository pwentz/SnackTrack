<template>
  <div class='nav-bar-container'>
    <div class='nav-bar-primary'>
      <div class='row'>
        <div class='small-12
                    columns'
        >

          <ul class='dropdown menu
                     align-right'
              data-dropdown-menu
          >


            <li class='user-info'
                v-if='$store.state.signedIn'
            >
              <a href="#"
                 v-on:click='signOut'
              >
                Logout
              </a>

            </li>

            <li class='user-info'
                v-else
            >
              <a href='#'
                 v-on:click='signIn'
              >
                <i class='fi-social-google-plus'></i>
                Login
              </a>
            </li>

            <li v-if='$store.state.signedIn'
                data-dropdown='pantry-dropdown'
                aria-controls='pantry-dropdown'
                aria-expanded='false'
            >
              <a href='#'
                 v-on:click="adjustPantryState"
              >Pantry</a>
            </li>

            <ul class='menu'>
              <li>
                <a href='#'
                   v-on:click="mountSearch"
                   class='menu-text'
                >
                  SnackTrack
                </a>
              </li>
            </ul>

          </ul>
        </div>
      </div>
    </div>
    <recent-ingredient
        v-if='$store.state.pantryExpanded'
        :removeIngredient='removeIngredient'
        :ingredient='$store.state.mostRecentIngredient'
    >
    </recent-ingredient>
  </div>
</template>

<script>
import RecentIngredient from './RecentIngredient.vue'
export default {
  components: {
    RecentIngredient
  },
  props: ['signIn', 'signOut', 'adjustPantryState', 'removeIngredient', 'mountSearch']
}
</script>

<style>
.nav-bar-primary {
  background-color: #b3d6ff;
}
.nav-bar-primary a {
  color: black;
  text-align: center;
  font-family: Raleway;
}

.nav-bar-primary li, .nav-bar-primary ul {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 15px;
}
.menu-text {
  font-family: Raleway;
  font-size: 20px;
  font-weight: 800;
}
</style>
