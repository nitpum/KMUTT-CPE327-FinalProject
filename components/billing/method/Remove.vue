<template>
  <v-dialog v-model="dialog" width="300">
    <template #activator="{ on }">
      <v-btn v-on="on" class="mt-3" color="danger" outlined large block>
        Remove
      </v-btn>
    </template>

    <v-card class="pt-6">
      <v-card-text>
        Remove payment method?
      </v-card-text>
      <v-card-actions class="d-flex flex-row-reverse">
        <v-btn color="primary" text @click="remove">
          remove
        </v-btn>
        <v-btn color="primary" text @click="dialog = false">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    remove() {
      this.$store.commit('billing/REMOVE_METHOD')
    }
  }
}
</script>