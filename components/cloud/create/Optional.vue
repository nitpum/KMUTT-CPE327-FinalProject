<template>
  <div>
    <div class="title">
      Select an optional
    </div>
    <v-row>
      <v-col 
        v-for="(option, i) in options"
        :key="'option-' + i"
        cols="12"
        sm
      >
        <v-checkbox
          v-model="selected"
          color="primary"
          :label="option"
          :value="option"
          hide-details
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      'Private networking',
      'IPv6',
      'Monitoring'
    ],
    selected: []
  })
}
</script>