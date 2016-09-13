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
              v-if='userValidated'
          >
            <a href="#"
               v-on:click='handleSignOut'
            >
              Logout
            </a>

          </li>

          <li class='user-info'
              v-else
          >
            <a href='#'
               v-on:click='handleSignIn'
            >
              <i class='fi-social-google-plus'></i>
              Login
            </a>
          </li>

          <ul class='menu'>
            <li>
              <a href='http://localhost:3000/recipes'
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
  data() {
    return {
      userValidated: false
    }
  },
  props: ['signIn', 'signOut'],
  methods: {
    handleSignIn() {
      this.userValidated = true
      this.signIn()
    },

    handleSignOut() {
      this.userValidated = false
      this.signOut()
    }
  }
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
