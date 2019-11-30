<template>
  <DefaultLayout>
    <v-container justify="center" align="center" style="max-width: 1024px;">
      <h1>Support</h1>
      <nuxt />
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/default'
import { mapState } from 'vuex'

export default {
  components: {
    DefaultLayout
  }
}
</script>
