<template>
  <div class='nav-bar-primary'>
    <div class='row'>
      <div class='small-12
                  columns'
      >

        <ul class='dropdown
                   menu
                   align-right'
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

          <ul class='menu'>
            <li>
              <a href='#'
                 v-on:click='testStore'
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
</template>

<script>
export default {
  props: ['signIn', 'signOut', 'testStore']
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
