<template>
  <div>
    <div class="title">Choose an Image</div>
    <v-tabs class="tab-bar" background-color="transparent">
      <v-tab>Distribution</v-tab>
      <v-tab>Marketplace</v-tab>
    </v-tabs>
    <v-row>
      <v-col v-for="(image, i) in images" :key="'image-' + i" cols="6" sm="3">
        <distro
          :logo="image.logo"
          :distro="image.distro"
          :versions="image.versions"
          :selected.sync="selected"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Distro from './Distro'

export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        distro: '',
        version: ''
      })
    }
  },
  components: {
    Distro
  },
  data: () => ({
    images: [
      {
        logo: 'cof_white-orange_hex.png',
        distro: 'Ubuntu',
        versions: ['18.04.3 (LTS)', '16.04.6 (LTS)']
      },
      {
        logo: 'freebsd-logo-png-transparent.png',
        distro: 'FreeBSD',
        versions: ['12.1', '12.0', '11.3']
      },
      {
        logo: 'Fedora_logo.png',
        distro: 'Fedora',
        versions: ['31']
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
