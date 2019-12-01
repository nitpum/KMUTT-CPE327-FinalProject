<template>
  <div>
    <v-breadcrumbs class="p-0" :items="breadcrumbs" divider=">" />
    <h2 v-if="ticket">{{ticket.subject}}</h2>
    <v-row>
      <v-col class="col-md-8 col-sm-12">
        <template v-if="ticket">
          <SupportCard
            :avatar="avatar"
            :fullname="fullname"
            :created="ticket.created"
            :content="ticket.description"
          />
          <SupportCard
            v-for="(comment, i) in comments"
            :key="'comment-' + i"
            :fullname="comment.fullname"
            :avatar="comment.avatar"
            :created="comment.created"
            :content="comment.content"
          />
          <form v-if="ticket.status === 'open'" @submit.prevent="submit">
            <v-card class="mb-4">
              <v-card-text>
                <v-textarea label="Reply" v-model="replyContent" outlined required />
                <v-file-input
                  :rules="uploadRules"
                  accept="image/png, image/jpeg, image/bmp"
                  label="Add image file or drop file here"
                  outlined
                  @change="upload"
                />
              </v-card-text>
              <v-card-actions class="d-flex flex-row-reverse">
                <v-btn type="submit" color="primary" depressed>Submit</v-btn>
              </v-card-actions>
            </v-card>
          </form>
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
import SupportCard from '@/components/support/SupportCard'
import Faq from '@/components/support/Faq'

export default {
  components: {
    Faq,
    SupportCard
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
    },
    comments() {
      return this.ticket.comments
        ? this.ticket.comments.map(comment =>
            comment.self === true
              ? { ...comment, fullname: this.fullname, avatar: this.avatar }
              : comment
          )
        : []
    }
  },
  mounted() {
    this.id = this.$route.params.id
  },
  data() {
    return {
      id: '',
      breadcrumbs: [
        { text: 'Support', to: '/support', exact: true },
        { text: 'Tickets', to: '/support/tickets', exact: true },
        { text: 'View ticket', disbled: true }
      ],
      uploadRules: [
        value =>
          !value ||
          value.size < 2000000 ||
          'Image size should be less than 2 MB!'
      ],
      replyContent: '',
      replyImage: ''
    }
  },
  methods: {
    upload(file) {
      var reader = new FileReader()
      var self = this
      reader.onloadend = function() {
        self.replyImage = reader.result
      }
      reader.readAsDataURL(file)
    },
    submit() {
      const ran = Math.floor(Math.random() * 101)
      this.$store.commit('support/ADD_TICKET_COMMENT', {
        index: this.id,
        comment: {
          self: true,
          content: this.replyContent,
          image: this.replyImage,
          created: moment().format('MMMM D, Y')
        }
      })
      if (ran >= 50) {
        this.$store.commit('support/ADD_TICKET_COMMENT', {
          index: this.id,
          comment: {
            avatar:
              'https://pbs.twimg.com/profile_images/888432310504370176/mhoGA4uj_400x400.jpg',
            fullname: 'Ewan React',
            content: 'Hmmm. Interesting.',
            created: moment().format('MMMM D, Y')
          }
        })
      }
      this.replyContent = ''
      this.replyImage = ''
    }
  }
}
</script>
