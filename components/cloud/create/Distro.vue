<template>
  <v-card>
    <v-card-text class="text-center">
      <v-img 
        :class="img"
        :src="require('@/assets/images/' + logo)"
      />
      {{ distro }}
    </v-card-text>
    <v-divider />
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-card-text class="d-flex" v-on="on" style="cursor: pointer;">
          <div v-if="isSelected">
            {{ selected.version }}
          </div>
          <div v-else>
            Select version
          </div>
          <div class="ml-auto">
            <v-icon>
              mdi-chevron-down
            </v-icon>
          </div>
        </v-card-text>
      </template>
      <v-list>
        <v-list-item
          v-for="(version, i) in versions"
          :key="'version-' + i"
          @click="select(version)"
        >
          <v-list-item-title>{{ version }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-card>
</template>

<style scoped>
.unselected {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 60%;
}
</style>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: ''
    },
    distro: {
      type: String,
      default: ''
    },
    versions: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Object,
      default: () => ({
        distro: '',
        version: ''
      })
    }
  },
  computed: {
    isSelected() {
      return this.selected.distro === this.distro
    },
    img() {
      return ['ma-6'].concat(this.isSelected ? [] : ['unselected'])
    }
  },
  methods: {
    select(version) {
      this.$emit('update:selected', {
        distro: this.distro,
        version: version
      })
    }
  }
}
</script>
