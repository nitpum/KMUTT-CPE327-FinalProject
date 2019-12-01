<template>
  <nuxt-child />
</template>

<script>
export default {
  layout({ store }) {
    return store.state.profile.signedIn ? 'default' : 'home'
  }
}
</script>