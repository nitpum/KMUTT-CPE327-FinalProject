<template>
  <form action="/support/article" method="get">
    <v-text-field v-model="searchValue" name="search" solo placeholder="Enter you question here" />
  </form>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  computed: {
    searchValue: {
      get() {
        return this.search
      },
      set(val) {
        this.$emit('onSearch', val)
      }
    }
  }
}
</script>
