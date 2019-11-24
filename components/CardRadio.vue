<template>
  <v-card
    class="d-flex align-center pa-3"
    :style="style"
    outlined
    @click="select"
  >
    <div class="flex-shrink-1 mr-3">
      <v-icon :color="selected && 'primary'" left>mdi-radiobox-{{ icon }}</v-icon>
    </div>
    <div class="flex-grow-1">
      <div class="font-weight-bold">{{ label }}</div>
      <div v-if="hint" class="caption">{{ hint }}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    setValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    selected() {
      return this.setValue === this.value
    },
    icon() {
      return this.selected ? 'marked' : 'blank'
    },
    style() {
      return this.selected && {
        border: '1px solid ' + this.$vuetify.theme.themes.light.primary
      }
    }
  },
  methods: {
    select() {
      this.$emit('input', this.setValue)
    }
  }
}
</script>