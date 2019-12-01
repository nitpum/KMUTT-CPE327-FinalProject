export default ({ store, redirect }) => {
  if (!store.state.profile.signedIn) {
    return redirect('/signin')
  }
}
