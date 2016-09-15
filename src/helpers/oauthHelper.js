const api = require('./ajax')
import Vue from 'vue'

class OauthHelper {
  constructor() {
    this.scopes = 'profile email'
    this.auth2
    this.state
  }

  handleOauth(state) {
    this.state = state
    gapi.load('client:auth2', this.initOauth.bind(this))
  }

  initOauth() {
    gapi.client.setApiKey(process.env.google_api_key)
    gapi.auth2.init({
      client_id: process.env.google_client_id,
      scope: this.scopes
    })
    .then( () => {
      this.auth2 = gapi.auth2.getAuthInstance();
      this.signIn()
    })
  }

  signIn() {
    this.auth2.signIn();
    let userId = this.auth2.currentUser.get().getBasicProfile().Eea
    let userName = this.auth2.currentUser.get().getBasicProfile().getGivenName()
    api.setCurrentUser(userId, userName).
      then(response => {
        Vue.set(this.state, 'currentUser', userId)
        Vue.set(this.state, 'pantryIngredients', response.body)
        console.log(this.state.pantryIngredients)
      })
  }

  signOut() {
    this.auth2.signOut();
  }

}
module.exports = OauthHelper
