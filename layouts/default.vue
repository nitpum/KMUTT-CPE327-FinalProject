<template>
  <v-app>
    <drawer v-model="drawer" />
    <toolbar @toggle-drawer="drawer = !drawer" />
    <v-content class="content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
a {
  text-decoration: none;
}
</style>

<style scoped>
.content {
  background-color: #f2f5f9;
}
</style>

<script>
import Drawer from '@/components/Drawer'
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    Drawer,
    Toolbar
  },
  data: () => ({
    drawer: null
  })
}
</script>
