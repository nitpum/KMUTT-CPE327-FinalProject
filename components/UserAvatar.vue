<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="150"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text>
        <v-avatar size="36px">
          <v-img :src="$store.state.profile.avatar" />
        </v-avatar>
        <v-icon right>
          {{ menu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list dense>
        <v-list-item @click="sendFeedback = true">
          <v-list-item-title>
            <v-icon left small>mdi-message-draw</v-icon>Send feedback
          </v-list-item-title>
        </v-list-item>
        <send-feedback v-model="sendFeedback" />
        <v-divider />
        <v-list-item to="/">
          <v-list-item-title>
            <v-icon left small>mdi-logout</v-icon>Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style scoped>
.line {
  width: 100%;
  border-bottom: 0.5px solid rgba(102, 102, 102, 0.5);
}
</style>

<script>
import SendFeedback from './SendFeedback'

export default {
  components: {
    SendFeedback
  },
  data: () => ({
    menu: false,
    sendFeedback: false
  })
}
</script>
