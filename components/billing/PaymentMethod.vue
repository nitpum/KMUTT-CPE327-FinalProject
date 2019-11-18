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
          <v-btn class="mt-3" color="danger" outlined large block>
            Remove
          </v-btn>
        </v-card-text>
        <v-card-text v-else class="d-flex flex-column">
          <v-btn color="primary" depressed large block>
            Add card
          </v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import EditPaymentMethod from './EditPaymentMethod'

export default {
  components: {
    EditPaymentMethod
  },
  data: () => ({
    card: {
      type: 'Visa',
      ending: '0000',
      expires: '00/00'
    }
  }),
  computed: {
    cardExist() {
      return !!this.card
    }
  }
}
</script>