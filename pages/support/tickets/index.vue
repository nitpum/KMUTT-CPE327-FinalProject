<template>
  <div>
    <v-breadcrumbs class="p-0" :items="breadcrumbs" divider=">" />
    <v-row align="center">
      <v-col class="col-sm-9">
        <v-tabs class="mt-3" background-color="transparent">
          <v-tab v-for="(tab, i) in menu" :key="'tab-' + i" @click="tab.click" exact>{{ tab.name }}</v-tab>
        </v-tabs>
      </v-col>
      <v-col class="col-sm-3">
        <v-btn color="primary" depressed to="/support/tickets/new">Create new ticket</v-btn>
      </v-col>
    </v-row>
    <v-card v-for="(ticket, i) in filteredTicket" :key="'ticket-'+ i" :to="`/support/tickets/${i}`">
      <v-row>
        <v-col class="col-sm-10">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">#{{i}}</div>
              <v-list-item-title class="headline mb-1">{{ticket.subject}}</v-list-item-title>
              <v-list-item-subtitle>{{ ticket.created }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col class="col-sm-2">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="overline mb-4">status</div>
              <v-list-item-title
                class="headline mb-1"
                :class="{'primary--text': ticket.status === 'open'}"
              >{{ticket.status.toUpperCase()}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  mounted() {
    this.filter = (this.$route.query && this.$route.query.filter) || ''
  },
  computed: {
    filteredTicket() {
      return this.$store.state.support.tickets
        .filter(item => (this.filter ? item.status === this.filter : true))
        .map(ticket => ({
          ...ticket,
          created: moment(ticket).format('D/M/YY')
        }))
    }
  },
  data() {
    return {
      filter: '',
      breadcrumbs: [
        { text: 'Support', href: '/support' },
        { text: 'Tickets', href: '/support/tickets', disabled: true }
      ],
      menu: [
        {
          name: 'All',
          click: () => {
            this.filter = ''
          }
        },
        {
          name: 'Open',
          click: () => {
            this.filter = 'open'
          }
        },
        {
          name: 'Closed',
          click: () => {
            this.filter = 'closed'
          }
        }
      ],
      ...mapState({
        tickets: state => state.support.ticket
      })
    }
  }
}
</script>
