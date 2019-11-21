<template>
  <v-card>
    <v-card-title>
      Current Usage
    </v-card-title>
    <v-card-text>
      <div>
        {{ currentBill }}
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
import { mapGetters } from 'vuex'
import moment from 'moment'
import CurrentUsageReport from './CurrentUsageReport'

export default {
  directives: {
    moment
  },
  components: {
    CurrentUsageReport
  },
  data: () => ({
    month: 'Oct',
    year: 2019,
  }),
  computed: {
    ...mapGetters({
      cost: 'billing/currentUsage'
    }),
    currentBill() {
      return moment().format('MMM, YYYY')
    }
  }
}
</script>