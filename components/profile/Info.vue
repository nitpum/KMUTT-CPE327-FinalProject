<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="3">
          <v-avatar width="100%" height="auto">
            <v-img :src="avatar" />
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="9">
          <div class="title text--primary mt-0">{{ name }}</div>
          <v-row>
            <v-col cols="12" sm="6">
              <p v-for="item in [email, tel, company]">
                <b>{{ item.name }}:</b>
                {{ item.value }}
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <b>Address:</b>
              {{ address.value }}
            </v-col>
          </v-row>
          <v-btn color="primary" large outlined>
            <v-icon left>mdi-image</v-icon>edit picture
          </v-btn>
          <edit-profile />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
p {
  line-height: 0.65;
}
</style>

<script>
import { mapState } from 'vuex'
import EditProfile from './EditProfile'

export default {
  components: {
    EditProfile
  },
  computed: {
    ...mapState({
      avatar: state => state.profile.avatar,
      firstname: state => state.profile.firstname,
      lastname: state => state.profile.lastname
    }),
    name() {
      return this.firstname + ' ' + this.lastname
    },
    email() {
      return {
        name: 'Email',
        value: this.$store.state.profile.email
      }
    },
    tel() {
      return {
        name: 'Tel',
        value: this.$store.state.profile.tel
      }
    },
    company() {
      return {
        name: 'Company',
        value: this.$store.state.profile.company
      }
    },
    address() {
      return {
        name: 'Address',
        value: this.$store.state.profile.address
      }
    }
  }
}
</script>
