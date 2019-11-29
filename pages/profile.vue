<template>
  <v-container justify="center" align="center" style="max-width: 800px;">
    <div>
      <h1 class="headline">Profile</h1>
      <v-tabs class="mt-3" background-color="transparent">
        <v-tab
          v-for="(tab, i) in menu"
          :key="'tab-' + i"
          :to="'/profile' + tab.to"
          exact
          >{{ tab.name }}</v-tab
        >
      </v-tabs>
      <nuxt-child />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  head() {
    return {
      title: 'Profile'
    }
  },
  data: () => ({
    menu: [
      {
        name: 'Overview',
        to: '/'
      },
      {
        name: 'Security',
        to: '/security'
      }
    ]
  })
}
</script>
