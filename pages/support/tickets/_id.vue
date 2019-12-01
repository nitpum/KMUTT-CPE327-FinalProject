<template>
  <div>
    <v-breadcrumbs class="p-0" :items="breadcrumbs" divider=">" />
    <h2 v-if="ticket">{{ticket.subject}}</h2>
    <v-row>
      <v-col class="col-md-8 col-sm-12">
        <template v-if="ticket">
          <v-card class="mb-3">
            <v-list-item>
              <v-list-item-avatar color="grey">
                <v-avatar v-if="avatar">
                  <img :src="avatar" alt="John" />
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{ this.fullname }}</v-list-item-title>
                <v-list-item-subtitle>{{ ticket.created}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>{{ ticket.description }}</v-card-text>
          </v-card>
        </template>
        <template v-else>
          <v-card>
            <v-list-item>
              <v-list-item-title class="headline mb-1t">404 Page not found</v-list-item-title>
            </v-list-item>
            <v-card-text>We can't find the page at you request</v-card-text>
          </v-card>
        </template>
      </v-col>
      <v-col v-if="ticket">
        <v-card>
          <v-card-text>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Status</v-list-item-title>
                <v-list-item-subtitle
                  :class="{'primary--text': ticket.status === 'open'}"
                >{{ticket.status.toUpperCase()}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Case</v-list-item-title>
                <v-list-item-subtitle>{{ticket.case || 'General'}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Piority</v-list-item-title>
                <v-list-item-subtitle>{{ticket.priority || 'Normal'}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Assigned to</v-list-item-title>
                <v-list-item-subtitle>{{ticket.assigned || '-'}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-else class="col-md-4 col-sm-12">
        <Faq />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment'
import Faq from '@/components/support/Faq'

export default {
  components: {
    Faq
  },
  computed: {
    ticket() {
      return this.$store.state.support.tickets.length >= this.id &&
        this.$store.state.support.tickets[this.id]
        ? this.$store.state.support.tickets[this.id]
        : null
    },
    avatar() {
      return this.$store.state.profile.avatar || ''
    },
    fullname() {
      return (
        this.$store.state.profile.firstname +
        ' ' +
        this.$store.state.profile.lastname
      )
    }
  },
  mounted() {
    this.id = this.$route.params.id
  },
  data() {
    return {
      id: '',
      breadcrumbs: [
        { text: 'Support', href: '/support' },
        { text: 'Tickets', href: '/support/tickets' },
        { text: 'View ticket', disbled: true }
      ]
    }
  }
}
</script>
