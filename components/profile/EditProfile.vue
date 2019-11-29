<template>
  <v-dialog v-model="dialog" width="600">
    <template #activator="{ on }">
      <v-btn v-on="on" color="primary" large outlined>
        <v-icon left>
          mdi-pencil
        </v-icon>
        edit profile
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Edit Profile
        <v-icon class="ml-auto" @click="close">
          mdi-close
        </v-icon>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="First Name" outlined dense hide-details />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Last Name" outlined dense hide-details />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Email" outlined dense hide-details />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Telephone" outlined dense hide-details />
            </v-col>
            <v-col cols="12" sm="6">
              <v-textarea label="Address" outlined dense hide-details />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Company (Optional)"
                outlined
                dense
                hide-details
              />
            </v-col>
          </v-row>
        </v-form>
        <div class="d-flex flex-row-reverse">
          <v-btn color="primary" depressed class="ml-3">
            save
          </v-btn>
          <v-btn color="primary" outlined>
            cancel
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

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
