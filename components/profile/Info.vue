<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="3">
          <v-hover #default="{ hover }">
            <v-avatar width="100%" height="auto" style="cursor: pointer" @click="editAvatar">
              <v-img :src="avatar">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex mt-auto transition-fast-in-fast-out justify-center edit-avatar"
                  >EDIT</div>
                </v-expand-transition>
              </v-img>
            </v-avatar>
          </v-hover>
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
              <span style="white-space: pre;">{{ address.value }}</span>
            </v-col>
          </v-row>
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
.edit-avatar {
  height: 28px;
  width: 100%;
  padding: 6px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
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
  },
  methods: {
    editAvatar() {
      const input = document.createElement('input')
      input.type = 'file'
      input.click()
    }
  }
}
</script>
