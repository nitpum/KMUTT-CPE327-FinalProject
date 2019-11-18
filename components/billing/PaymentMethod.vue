<template>
  <v-card>
    <v-row align="start">
      <v-col class="pt-0" cols="12" sm="8">
        <v-card-title>
          Payment Method
        </v-card-title>
        <v-card-text v-if="cardExist">
          <div>
            {{ card.type }} card
          </div>
          <div>
            Ending in {{ card.ending }}
          </div>
          <div>
            Expires on {{ card.expires }}
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card-text v-if="cardExist" class="d-flex flex-column">
          <edit-payment-method />
          <v-btn class="mt-3" color="danger" outlined large block @click="remove">
            Remove
          </v-btn>
        </v-card-text>
        <v-card-text v-else class="d-flex flex-column">
          <edit-payment-method mode="add" />
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import EditPaymentMethod from './EditPaymentMethod'

export default {
  components: {
    EditPaymentMethod
  },
  computed: {
    ...mapGetters({
      card: 'billing/method',
      cardExist: 'billing/cardExist'
    })
  },
  methods: {
    remove() {
      this.$store.commit('billing/REMOVE_METHOD')
    }
  }
}
</script>