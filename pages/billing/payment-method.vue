<template>
  <v-row>
    <v-col cols="12">
      <payment-method />
    </v-col>
    <v-col cols="12">
      <billing-address />
    </v-col>
  </v-row>
</template>

<script>
import PaymentMethod from '@/components/billing/method/PaymentMethod'
import BillingAddress from '@/components/billing/address/BillingAddress'

export default {
  components: {
    PaymentMethod,
    BillingAddress
  }
}
</script>