import Vue from 'vue'
const OauthHelper = require('./../helpers/oauthHelper')
const oauth = new OauthHelper

const mutations = {

  LOGIN (state) {
    oauth.handleOauth()
    Vue.set(state, 'signedIn', true)
  },

  LOGOUT (state) {
    oauth.signOut()
    Vue.set(state, 'signedIn', false)
  }

}
module.exports = mutations
