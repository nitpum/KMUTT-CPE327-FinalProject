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
import Create from '@/components/cloud/title/Create'
import Breadcrumbs from '@/components/cloud/Breadcrumbs'

export default {
  components: {
    Dashboard,
    Create,
    Breadcrumbs
  },
  computed: {
    title() {
      switch(this.$route.name) {
        case 'cloud': return 'Dashboard'
        case 'cloud-create': return 'Create'
        default: 'return Dashboard'
      }
    }
  }
}
</script>
