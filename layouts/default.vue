<template>
  <v-app>
    <drawer v-model="drawer" />
    <toolbar @toggle-drawer="drawer = !drawer" />
    <v-content class="content">
      <v-container>
        <nuxt v-if="!$slots.default" />
        <slot />
      </v-container>
    </v-content>
    <snackbars />
  </v-app>
</template>

<style>
a {
  text-decoration: none;
}
</style>

<style>
.content {
  background-color: #f2f5f9;
}
.tab-bar {
  border-bottom: #c4c4c4 solid 1px;
}
</style>

<script>
import Drawer from '@/components/Drawer'
import Toolbar from '@/components/Toolbar'
import Snackbars from '@/components/Snackbars'

export default {
  components: {
    Drawer,
    Toolbar,
    Snackbars
  },
  data: () => ({
    drawer: null
  })
}
</script>
