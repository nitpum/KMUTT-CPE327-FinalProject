<template>
  <v-dialog v-model="dialog" width="400">
    <template #activator="{ on }">
      <v-btn class="btn" v-on="on" color="primary" small depressed
        >change</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        Change Password
        <v-icon class="ml-auto" @click="close">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field type="password" label="Old Password" outlined dense />
          <v-text-field type="password" label="New Password" outlined dense />
          <v-text-field
            type="password"
            label="Confirm Password"
            outlined
            dense
          />
        </v-form>
        <div class="d-flex flex-row-reverse">
          <v-btn color="primary" depressed class="ml-3">save</v-btn>
          <v-btn color="primary" @click="close" outlined>cancel</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.btn {
  width: 110px;
}
</style>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    close() {
      this.dialog = false
    }
  }
}
</script>
