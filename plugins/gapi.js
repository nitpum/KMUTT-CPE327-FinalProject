export default ({ store }) => {
  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = 'https://apis.google.com/js/api.js'
  script.onload = () => {
    const { gapi } = window
    gapi.load('client:auth2', async () => {
      await gapi.client.init({
        apiKey: process.env.GAPI_KEY,
        clientId: process.env.GAPI_CLIENT_ID,
        scope: 'profile'
      })

      const auth2 = gapi.auth2.getAuthInstance()

      /* auto update signin status */
      auth2.isSignedIn.listen(status => store.commit('profile/SIGN_IN', status))
    })
  }
  document.head.appendChild(script)
}
