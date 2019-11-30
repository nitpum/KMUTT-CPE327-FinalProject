<template>
  <div>
    <v-breadcrumbs class="p-0" :items="breadcrumbs" divider=">" />
    <v-row>
      <v-col class="col-md-8 col-sm-12">
        <form action="#" method="post" @submit="save">
          <v-card>
            <v-card-title class="display-1">Create new ticket</v-card-title>
            <v-card-text>
              <v-select v-model="ticketCase" :items="cases" label="Ticket case" outlined required></v-select>
              <v-text-field v-model="subject" label="Subject" outlined required />
              <v-textarea
                v-model="description"
                outlined
                name="input-7-4"
                label="Description"
                required
              />
              <v-file-input label="Add Attachments file or drop file here" outlined />
            </v-card-text>
            <v-card-actions class="d-flex flex-row-reverse">
              <v-btn type="submit" color="primary" class="ml-3" depressed large>Submit</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-col>
      <v-col class="col-md-4 col-sm-12">
        <Faq />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Faq from '@/components/support/Faq'

export default {
  layout: 'support',
  components: {
    Faq
  },
  data() {
    return {
      cases: ['Account', 'Billing', 'Cloud', 'App & Service'],
      ticketCase: null,
      subject: '',
      description: '',
      breadcrumbs: [
        { text: 'Support', href: '/support' },
        { text: 'Tickets', href: '/support/tickets' },
        { text: 'Create new ticket', disbled: true }
      ]
    }
  },
  methods: {
    save(e) {
      e.preventDefault()

      this.$store.commit('support/ADD_TICKET', {
        subject: this.subject,
        case: this.case,
        description: this.description,
        status: 'open',
        created: new Date(),
        priority: 'Normal'
      })
      this.$store.dispatch('snackbars/success', 'Created ticket')
      this.$router.push('/support/tickets')
    },
    ...mapMutations({
      createTicket: 'supoort/ADD_TICKET'
    })
  }
}
</script>
