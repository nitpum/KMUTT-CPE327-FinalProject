<template>
  <v-row>
    <v-col cols="12">
      <current-usage />
    </v-col>
    <v-col cols="12">
      <cost-trend />
    </v-col>
  </v-row>
</template>

<script>
import CurrentUsage from '@/components/billing/CurrentUsage'
import CostTrend from '@/components/billing/CostTrend'

export default {
  head() {
    return {
      title: 'Profile'
    }
  },
  components: {
    CurrentUsage,
    CostTrend
  }
}
</script>
