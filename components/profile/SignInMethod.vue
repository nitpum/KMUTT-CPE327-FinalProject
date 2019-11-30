<template>
  <v-card>
    <v-card-title>Sign-in method</v-card-title>
    <v-card-text>
      <div class="text--primary">Username</div>
      {{ username }}
    </v-card-text>
    <v-card-text class="d-flex align-center">
      <div>
        <div class="text--primary">Google Sign-in</div>
        {{ googleSignin }}
      </div>
      <div class="ml-auto">
        <v-btn class="btn" color="primary" small depressed>add</v-btn>
      </div>
    </v-card-text>
    <v-divider />
    <v-card-text class="d-flex align-center">
      <div>
        <div class="text--primary">Password</div>
        ********
      </div>
      <div class="ml-auto">
        <change-password />
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.btn {
  width: 110px;
}
</style>

<script>
import { mapState } from 'vuex'
import ChangePassword from './ChangePassword'

export default {
  components: {
    ChangePassword
  },
  computed: {
    ...mapState({
      username: state => state.profile.username,
      googleSignin: state => state.profile.googleSignin
    })
  }
}
</script>
