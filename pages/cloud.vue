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
import Service from '@/components/cloud/title/Service'
import Breadcrumbs from '@/components/cloud/Breadcrumbs'

export default {
  components: {
    Dashboard,
    Create,
    Service,
    Breadcrumbs
  },
  computed: {
    title() {
      switch(this.$route.name) {
        case 'cloud': return 'Dashboard'
        case 'cloud-create': return 'Create'
        case 'cloud-id': return 'Service'
        default: return 'Dashboard'
      }
    }
  }
}
</script>
