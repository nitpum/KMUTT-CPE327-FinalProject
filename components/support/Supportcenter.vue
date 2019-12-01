<template>
  <v-container justify="center">
    <v-row justify="center">
      <v-col class="col-md-8 col-sm-12 text-center">
        <h2>How can we help you?</h2>
        <p class="font-weight-light">Ask us any question at all!</p>
        <Search />
      </v-col>
    </v-row>
    <v-row align-content="stretch">
      <v-col v-for="(suggestion, i) in suggestions" :key="`suggestion-${i}`" class="col-sm-3">
        <v-card :to="suggestion.to" class="primary--text text-center">
          <v-card-text>
            <v-icon class="display-4 primary--text">{{suggestion.icon}}</v-icon>
            <p class="primary--text">{{ suggestion.title }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-sm-12 col-md-6">
        <Faq />
      </v-col>
      <v-col class="col-sm-12 col-md-6">
        <v-card v-for="(quick, i) in quick_link" :key="`quick-${i}`" class="mb-2" :to="quick.to">
          <v-card-text class="purple--text headline">
            <v-icon class="purple--text headline mr-1">{{ quick.icon }}</v-icon>
            {{ quick.title }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Faq from '@/components/support/Faq'
import Search from '@/components/support/Search'

export default {
  components: {
    Faq,
    Search
  },
  data() {
    return {
      suggestions: [
        {
          icon: 'mdi-account-outline',
          title: 'Your account',
          to: '/support/article?filter=account'
        },
        {
          icon: 'mdi-credit-card-outline',
          title: 'Billing',
          to: '/support/article?filter=billing'
        },
        {
          icon: 'mdi-cloud-outline',
          title: 'Cloud service',
          to: '/support/article?filter=cloud'
        },
        {
          icon: 'mdi-package-variant-closed',
          title: 'App & Software',
          to: '/support/article?filter=app_service'
        }
      ],
      quick_link: [
        {
          icon: 'mdi-message-outline',
          title: 'Contact support',
          to: '/support/tickets/new'
        },
        {
          icon: 'mdi-book-outline',
          title: 'My ticket',
          to: '/support/tickets'
        },
        {
          icon: 'mdi-star-outline',
          title: 'Leave feedback'
        }
      ]
    }
  },
  methods: {
    search() {}
  }
}
</script>
