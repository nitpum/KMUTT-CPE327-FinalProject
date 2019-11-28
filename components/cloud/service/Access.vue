<template>
  <v-row>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>Console Access</v-card-title>
        <v-card-text>
          This will open up a console VNC connection to your Cloud service and is the equivalent of pluging a monitor and keyboard directly to your virtual server
        </v-card-text>
        <v-card-text>
          <v-btn color="primary" depressed large>
            Launch Console
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>Reset root password</v-card-title>
        <v-card-text>
          The new root password will be emailed to you within a few minutes.
          If the email dosen’t arrive please contact our
          <router-link to="/support">support</router-link>
        </v-card-text>
        <v-card-text>
          <v-btn depressed large>
            Reset Root Password
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>