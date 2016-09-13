class Ajax {
  oauthRequest() {
    this.$http.get(
      'http://localhost:3000/snack-track/google-oauth'
    )
  }
}

export default Ajax
