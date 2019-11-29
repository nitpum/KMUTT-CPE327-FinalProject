<template>
  <v-row>
    <v-col cols="12">
      <current-usage />
    </v-col>
  </v-row>
</template>

<script>
import CurrentUsage from '@/components/billing/CurrentUsage'

export default {
  head() {
    return {
      title: 'Profile'
    }
  },
  components: {
    CurrentUsage
  }
}
</script>
