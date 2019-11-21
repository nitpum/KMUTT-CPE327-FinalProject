<template>
  <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Cloud service',
        disabled: false
      },
      {
        text: 'Dashboard',
        disabled: true
      }
    ]
  })
}
</script>
