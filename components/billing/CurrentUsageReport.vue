<template>
  <v-dialog v-model="dialog" width="600">
    <template #activator="{ on }">
      <v-btn v-on="on" depressed large color="primary">
        View Report
      </v-btn>
    </template>
    <v-sheet style="padding: 24px">
      <div class="d-flex mb-3">
          Current Usage
        <v-icon class="ml-auto" @click="dialog = false">
          mdi-close
        </v-icon>
      </div>
      <div class="pa-6">
        <div
          v-for="(project, i) in projects"
          :key="'project-' + i"
          class="d-flex grey--text text--darken-1"
        >
          <div>{{ project.name }}</div>
          <div class="ml-auto">${{ project.cost }}</div>
        </div>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    dialog: false
  }),
  computed: {
    ...mapState({
      projects: state => state.billing.currentUsage
    })
  }
}
</script>