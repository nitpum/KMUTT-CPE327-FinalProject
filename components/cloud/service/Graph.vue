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
    </v-col>
    <v-col cols="12">
      Network usage
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    period: 6,
    periods: [
      {
        text: '6 hours',
        value: 6
      }
    ]
  })
}
</script>