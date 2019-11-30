<template>
  <v-app-bar dense fixed app>
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="$emit('toggle-drawer')" />

    <v-spacer />

    <!-- <v-toolbar-items>
      <v-btn text>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
    </v-toolbar-items>-->
    <v-toolbar-items>
      <user-notify />
    </v-toolbar-items>
    <v-toolbar-items>
      <user-avatar />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import UserAvatar from './UserAvatar'
import UserNotify from './UserNotify'

export default {
  components: {
    UserAvatar,
    UserNotify
  }
}
</script>