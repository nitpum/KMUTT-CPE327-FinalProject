<template>
  <v-row>
    <v-col cols="12">
      <sign-in-method />
    </v-col>
    <v-col cols="12">
      <login-log />
    </v-col>
  </v-row>
</template>

<script>
import SignInMethod from '@/components/profile/SignInMethod'
import LoginLog from '@/components/profile/LoginLog'

export default {
  components: {
    SignInMethod,
    LoginLog
  }
}
</script>
