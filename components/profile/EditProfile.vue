<template>
  <v-dialog v-model="dialog" width="600">
    <template #activator="{ on }">
      <v-btn v-on="on" color="primary" large outlined>
        <v-icon left>mdi-pencil</v-icon>edit profile
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Edit Profile
        <v-icon class="ml-auto" @click="close">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="firstname"
                label="First Name"
                outlined
                dense
                hide-details
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="lastname"
                label="Last Name"
                outlined
                dense
                hide-details
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="email"
                type="email"
                label="Email"
                outlined
                dense
                hide-details
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="tel"
                type="tel"
                label="Telephone"
                outlined
                dense
                hide-details
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-textarea
                v-model="address"
                label="Address"
                outlined
                dense
                hide-details
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="company"
                label="Company (Optional)"
                outlined
                dense
                hide-details
              />
            </v-col>
          </v-row>
        </v-form>
        <div class="d-flex flex-row-reverse">
          <v-btn color="primary" depressed class="ml-3" @click="save"
            >save</v-btn
          >
          <v-btn color="primary" outlined @click="close">cancel</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    address: '',
    company: ''
  }),
  watch: {
    dialog(val) {
      if (val) this.load()
      else this.$refs.form.reset()
    }
  },
  methods: {
    load() {
      this.firstname = this.$store.state.profile.firstname
      this.lastname = this.$store.state.profile.lastname
      this.email = this.$store.state.profile.email
      this.tel = this.$store.state.profile.tel
      this.address = this.$store.state.profile.address
      this.company = this.$store.state.profile.company
    },
    close() {
      this.dialog = false
    },
    save() {
      this.$store.dispatch('profile/edit', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        tel: this.tel,
        address: this.address,
        company: this.company
      })
      this.close()
    }
  }
}
</script>
