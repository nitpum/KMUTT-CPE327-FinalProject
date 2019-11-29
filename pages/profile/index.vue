<template>
  <v-row>
    <v-col cols="12">
      <info />
    </v-col>
    <v-col cols="12">
      <e-mail />
    </v-col>
    <v-col cols="12">
      <deactivate-account />
    </v-col>
  </v-row>
</template>

<script>
import Info from '@/components/profile/Info'
import EMail from '@/components/profile/EMail'
import DeactivateAccount from '@/components/profile/DeactivateAccount'

export default {
  components: {
    Info,
    EMail,
    DeactivateAccount
  }
}
</script>
