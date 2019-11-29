<template>
  <div>
    <div class="title">
      Authentication
    </div>
    <v-row>
      <v-col cols="12" sm="6">
        <card-radio
          v-model="selected"
          label="SSH keys"
          hint="A more secure authentication method"
          set-value="ssh"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <card-radio
          v-model="selected"
          label="One-time password"
          hint="Emails a one-time root password to you (less secure)"
          set-value="otp"
        />
      </v-col>
    </v-row>
    <new-ssh-key v-if="selected === 'ssh'" />
  </div>
</template>

<script>
import CardRadio from '@/components/CardRadio'
import NewSshKey from './NewSshKey'

export default {
  components: {
    CardRadio,
    NewSshKey
  },
  data: () => ({
    selected: null
  })
}
</script>