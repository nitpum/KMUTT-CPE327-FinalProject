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

<style scoped>
.content {
  background-color: #F2F5F9;
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
