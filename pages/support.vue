<template>
  <v-container justify="center" align="center" style="max-width: 1024px;">
    <h1 class="headline">Support</h1>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout({ store }) {
    return store.state.profile.signedIn ? 'default' : 'home'
  }
}
</script>