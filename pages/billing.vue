<template>
  <v-container justify="center" align="center" style="max-width: 800px;">
    <div>
      <h1 class="headline">Billing</h1>
      <v-tabs class="mt-3 tab-bar" background-color="transparent">
        <v-tab
          v-for="(tab, i) in menu"
          :key="'tab-' + i"
          :to="'/billing' + tab.to"
          exact
        >{{ tab.name }}</v-tab>
      </v-tabs>
      <nuxt-child />
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        name: 'Overview',
        to: '/'
      },
      {
        name: 'Payment Method',
        to: '/payment-method'
      },
      {
        name: 'Invoices',
        to: '/invoices'
      }
    ]
  })
}
</script>