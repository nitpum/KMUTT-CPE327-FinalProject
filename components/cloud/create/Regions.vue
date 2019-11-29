<template>
  <div>
    <div class="d-flex">
      <div class="title">
        Select a region
      </div>
    </div>
    <v-row>
      <v-col
        v-for="(region, i) in regions"
        :key="'region-' + i"
        class="d-flex"
        cols="6"
        sm="3"
      >
        <region
          :img="region.image"
          :title="region.title"
          :servers="region.servers"
          :selected.sync="selected"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Region from './Region'

export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        region: '',
        server: 0
      })
    }
  },
  components: {
    Region
  },
  data: () => ({
    regions: [
      {
        image: 'Flag_of_Japan.png',
        title: 'Tokyo',
        servers: 2
      },
      {
        image: 'singapore-flag-icon.png',
        title: 'Singapore',
        servers: 1
      },
      {
        image: 'Flag_of_the_United_States.png',
        title: 'San Francisco',
        servers: 3
      },
      {
        image: 'Flag_of_the_United_States.png',
        title: 'New York',
        servers: 2
      },
      {
        image: 'thailand-flag-icon.png',
        title: 'Sakon Nakhon',
        servers: 2
      }
    ]
  }),
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
