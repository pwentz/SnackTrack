class OauthHelper {
  constructor() {
    this.scopes = 'profile email'
    this.auth2
  }

  handleOauth() {
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
  }

  signOut() {
    this.auth2.signOut();
  }

}
module.exports = OauthHelper
