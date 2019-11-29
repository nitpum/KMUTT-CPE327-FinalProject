<template>
  <v-card width="100%" :style="selectedRegion">
    <v-card-text class="text-center">
      <v-img 
        class="ma-3"
        :aspect-ratio="3 / 2"
        contain
        :src="require('@/assets/images/' + img)"
      />
      {{ title }}
    </v-card-text>
    <v-divider />
    <div class="d-flex">
      <template
        v-for="i in servers"
      >
        <v-divider v-if="i !== 1 && !isServerSelected(i)" vertical />
        <div
          :key="title + '-' + i"
          class="text-center flex-grow-1 py-1"
          :style="selectedServer(i)"
          @click="select(i)"
        >
          {{ i }}
        </div>
      </template>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    servers: {
      type: Number,
      default: 1
    },
    selected: {
      type: Object,
      default: () => ({
        region: '',
        server: 0
      })
    }
  },
  computed: {
    isServerSelected() {
      return (i) => this.selected.region === this.title && i === this.selected.server
    },
    selectedRegion() {
      return this.selected.region === this.title && {
        border: '1px solid ' + this.$vuetify.theme.themes.light.primary
      }
    },
    selectedServer() {
      return (i) => this.isServerSelected(i)
        ? {
          backgroundColor: this.$vuetify.theme.themes.light.primary,
          color: 'white'
        }
        : {
          cursor: 'pointer'
        }
    }
  },
  methods: {
    select(i) {
      this.$emit('update:selected', {
        region: this.title,
        server: i
      })
    }
  }
}
</script>