<template>
  <v-container justify="center">
    <v-row>
      <v-col class="col-sm-5">
        <line-chart :chartdata="chartdata" :options="chartoptions" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import LineChart from '@/components/chart/Line'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      chartdata: {
        labels: ['January', 'February', 'Mar'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#E2F5FA',
            borderColor: '#41C3E0',
            data: [40, 20, 15]
          },
          {
            label: 'Data two',
            backgroundColor: '#CBE2F5',
            borderColor: '#5779DA',
            data: [30, 50, 20]
          }
        ]
      },
      chartoptions: {}
    }
  }
}
</script>
