<template>
  <v-app>
    <drawer v-model="drawer" />
    <toolbar @toggle-drawer="drawer = !drawer" />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

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
