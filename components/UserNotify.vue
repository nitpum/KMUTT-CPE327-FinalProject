<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="150" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text>
        <v-avatar size="36px">
          <v-icon>mdi-bell-outline</v-icon>
        </v-avatar>
        <!-- <v-icon right>{{ menu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon> -->
      </v-btn>
    </template>

    <v-card class="card">
      <v-list dense>
        <!-- noti 1 -->
        <v-list-item>
          <div class="noti-card">
            <p class="noti-card-content noti-card-title">System</p>
            <p
              class="noti-card-content noti-card-body"
            >Sakhon Nakhon 1 will down todat due to blackout</p>
            <p class="noti-card-content noti-card-time">November 27, 2019 21:09</p>
          </div>
        </v-list-item>
        <!-- noti 2 -->
        <v-list-item>
          <div class="noti-card">
            <p class="noti-card-content noti-card-title">System</p>
            <p class="noti-card-content noti-card-body">ubuntu-s-1vcpu-1gb-sg1 is ready</p>
            <p class="noti-card-content noti-card-time">November 27, 2019 21:09</p>
          </div>
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
.noti-card-body {
}
.noti-card-time {
  font-size: 14px;
  color: rgba(102, 102, 102, 0.7);
}
</style>

<script>
export default {
  data: () => ({
    menu: false
  })
}
</script>
