<template>
  <v-card class="mb-4">
    <v-list-item>
      <v-list-item-avatar color="grey">
        <v-avatar v-if="avatar">
          <img :src="avatar" alt="John" />
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ fullname }}</v-list-item-title>
        <v-list-item-subtitle>{{ createdDate }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>{{ content }}</v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    fullname: {
      type: String,
      default: ''
    },
    created: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    createdDate() {
      return this.created
        ? moment(this.created).format('MMMM D, Y')
        : moment().format('MMMM D, Y')
    }
  }
}
</script>
