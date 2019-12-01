export default ({ redirect }) => {
  const { profile } = JSON.parse(localStorage.getItem('data'))
  if (!profile.signedIn) {
    return redirect('/signin')
  }
}
