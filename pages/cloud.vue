<template>
  <v-container justify="center" align="center" style="max-width: 800px;">
    <div>
      <component :is="title" />
      <breadcrumbs />
      <nuxt-child />
    </div>
  </v-container>
</template>

<script>
import Dashboard from '@/components/cloud/title/Dashboard'
import Breadcrumbs from '@/components/cloud/Breadcrumbs'

export default {
  components: {
    Dashboard,
    Breadcrumbs
  },
  data: () => ({
    title: 'Dashboard'
  })
}
</script>
