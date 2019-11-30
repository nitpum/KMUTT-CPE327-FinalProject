<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="150" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text>
        <v-avatar size="36px">
          <v-icon>mdi-bell-outline</v-icon>
        </v-avatar>
      </v-btn>
    </template>

    <v-card class="card">
      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="'noti-' + i">
          <div class="noti-card">
            <p class="noti-card-content noti-card-title">
              {{ item.title }}
            </p>
            <p class="noti-card-content noti-card-body"            >
              {{ item.body }}
            </p>
            <p class="noti-card-content noti-card-time">
              {{ item.time }}
            </p>
          </div>
        </v-list-item>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style scoped>
.card {
  width: 400px;
}
.noti-card {
  padding: 12px;
  width: 100%;
  border: 0.5px solid rgba(102, 102, 102, 0.11);
  border-radius: 3px;
  margin: 6px 0px 6px;
}
.noti-card-content {
  width: 80%;
  margin: 6px 0px 0px 12px;
}
.noti-card-title {
  color: rgb(102, 102, 102);
  font-size: 16px;
}
.noti-card-time {
  font-size: 14px;
  color: rgba(102, 102, 102, 0.7);
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    menu: false
  }),
  computed: {
    ...mapState({
      items: state => state.notification.items
    })
  }
}
</script>
