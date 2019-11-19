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
          <edit />
          <remove />
        </v-card-text>
        <v-card-text v-else class="d-flex flex-column">
          <edit mode="add" />
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import Edit from './Edit'
import Remove from './Remove'

export default {
  components: {
    Edit,
    Remove
  },
  computed: {
    ...mapGetters({
      card: 'billing/method',
      cardExist: 'billing/cardExist'
    })
  }
}
</script>