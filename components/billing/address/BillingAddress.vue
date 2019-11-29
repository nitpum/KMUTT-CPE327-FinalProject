<template>
  <v-card>
    <v-row align="start">
      <v-col class="pt-0" cols="12" sm="8">
        <v-card-title>
          Billing Address
        </v-card-title>
        <v-card-text v-if="exist">
          {{ address.name }}<br />
          {{ address.addr1 }}<br />
          {{ address.addr2 }}<br />
          {{ address.country }}
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card-text class="d-flex flex-column">
          <edit />
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Edit from './Edit'
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    Edit
  },
  computed: {
    ...mapState({
      address: state => state.billing.address
    }),
    ...mapGetters({
      exist: 'billing/addressExist'
    })
  }
}
</script>