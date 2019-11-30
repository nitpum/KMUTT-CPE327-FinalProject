<template>
  <v-card>
    <v-card-title>
      Cost trend
    </v-card-title>
    <v-card-text>
      <line-chart :chartdata="data" :options="options" :height="100" />
    </v-card-text>
  </v-card>
</template>

<script>
import LineChart from '@/components/chart/Line'

export default {
  components: {
    LineChart
  },
  data: () => ({
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Cost',
          backgroundColor: '#E2F5FA',
          borderColor: '#41C3E0',
          data: new Array(7)
            .fill(1)
            .map(val => (Math.random() * 100).toFixed(2))
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      tooltips: { enable: false }
    }
  })
}
</script>
