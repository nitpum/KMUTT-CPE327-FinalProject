<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab>Graph</v-tab>
      <v-tab>Access</v-tab>
      <v-tab>Power</v-tab>
      <v-tab>Destroy</v-tab>
    </v-tabs>
    <v-container class="tab-content px-6 py-3">
      <component :is="content[tab]" />
    </v-container>
  </div>
</template>

<style scoped>
.tab-content {
  background-color: white;
}
</style>

<script>
import Graph from '@/components/cloud/service/Graph'
import Access from '@/components/cloud/service/Access'
import Power from '@/components/cloud/service/Power'
import Destroy from '@/components/cloud/service/Destroy'

export default {
  components: {
    Graph,
    Access,
    Power,
    Destroy
  },
  data: () => ({
    tab: null,
    content: ['Graph', 'Access', 'Power', 'Destroy']
  }),
}
</script>
