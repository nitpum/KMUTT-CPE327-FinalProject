<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="150" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text>
        <v-avatar size="36px">
          <!-- <v-img :src="$store.state.profile.avatar" /> -->
          <v-icon>mdi-bell-outline</v-icon>
        </v-avatar>
        <!-- <v-icon right>{{ menu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon> -->
      </v-btn>
    </template>

    <v-card>
      <v-list dense>
        <v-list-item>
          <v-list-item-title>Send feedback</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    menu: false
  })
}
</script>
