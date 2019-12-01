<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Frequency Ask Questions</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item
      v-for="(item, i) in list"
      :key="`list-${i}`"
      :to="`/support/article/${item.id}`"
      class="white"
    >
      <v-list-item-content class="white">
        <v-list-item-title class="primary--text white">{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import API from '@/api/support/faq'

export default {
  name: 'Faq',
  computed: {
    list() {
      return API
    }
  }
}
</script>
