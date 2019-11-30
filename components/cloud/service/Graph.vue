<template>
  <v-row>
    <v-col cols="12" sm="4" offset-sm="8">
      <v-select
        v-model="period"
        label="Select period"
        :items="periods"
        outlined
        hide-details
      />
    </v-col>
    <v-col cols="12">
      CPU usage
      <!-- <line-chart :chartdata="cpus[period]" /> -->
      <line-chart
        :chartdata="cpu.data[period]"
        :options="cpu.option"
        :height="100"
      />
    </v-col>
    <v-col cols="12">
      Network usage
      <line-chart
        :chartdata="network.data[period]"
        :options="network.option"
        :height="100"
      />
    </v-col>
  </v-row>
</template>

<script>
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateData(min, max, n) {
  let arr = new Array(n).fill(0)
  arr = arr.map(e => getRandomInt(min, max))
  return arr
}
import LineChart from '@/components/chart/Line'
export default {
  components: {
    LineChart
  },
  data: () => ({
    period: 0,
    periods: [
      {
        text: '1 hours',
        value: 0
      },
      {
        text: '6 hours',
        value: 0
      },
      {
        text: '12 hours',
        value: 1
      },
      {
        text: '24 hours',
        value: 2
      }
    ],
    network: {
      option: {
        responsive: true,
        tooltips: { enable: false },
        layout: {
          padding: {
            left: 25,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      },
      data: [
        {
          labels: [...Array(60).keys()].slice(1, 60),
          datasets: [
            {
              label: 'Download',
              backgroundColor: '#E2F5FA',
              borderColor: '#41C3E0',
              data: generateData(0, 1024, 60)
            },
            {
              label: 'Upload',
              backgroundColor: '#CBE2F5',
              borderColor: '#5779DA',
              data: generateData(0, 1024, 60)
            }
          ]
        },
        {
          labels: [...Array(7).keys()].slice(1, 7),
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#E2F5FA',
              borderColor: '#41C3E0',
              data: generateData(0, 100, 7)
            }
          ]
        }
      ]
    },
    cpu: {
      option: {
        legend: {
          display: false
        },
        responsive: true,
        tooltips: { enable: false },
        layout: {
          padding: {
            left: 25,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      },
      data: [
        {
          labels: [...Array(60).keys()].slice(1, 60),
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#E2F5FA',
              borderColor: '#41C3E0',
              data: generateData(0, 100, 60)
            }
          ]
        },
        {
          labels: [...Array(7).keys()].slice(1, 7),
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#E2F5FA',
              borderColor: '#41C3E0',
              data: generateData(0, 100, 7)
            }
          ]
        }
      ]
    }
  })
}
</script>
