<template>
  <!-- <nuxt /> -->
  <v-app>
    <navbar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/home/Navbar'
export default {
  components: { Navbar }
}
</script>