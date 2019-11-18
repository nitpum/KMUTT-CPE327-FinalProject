<template>
  <v-card>
    <v-card-title>
      Current Usage
    </v-card-title>
    <v-card-text>
      <div>
        {{ month }}, {{ year }}
      </div>
      <div class="d-flex flex-row-reverse">
        <current-usage-report />
      </div>
    </v-card-text>
    <div class="current-usage-cost">
      ${{ cost }}
    </div>
  </v-card>
</template>

<style scoped>
.current-usage-cost {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2em;
}
</style>

<script>
import CurrentUsageReport from './CurrentUsageReport'

export default {
  components: {
    CurrentUsageReport
  },
  data: () => ({
    month: 'Oct',
    year: 2019,
    cost: '0.00'
  })
}
</script>