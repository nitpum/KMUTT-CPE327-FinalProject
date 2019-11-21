<template>
  <v-card flat>
    <v-card-text class="text--primary pb-0">
      Cloud Services ({{ services.length }})
    </v-card-text>

    <v-card-text class="pt-0">
      <v-row>
        <v-col 
          cols="12"
          v-for="(service, i) in services"
          :key="'service-' + i"
        >
          <service
            :value="service"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import Service from '@/components/cloud/Service'

export default {
  components: {
    Service
  },
  data: () => ({
    n: 3
  }),
  computed: {
    ...mapState({
      services: state => state.cloud.services
    })
  }
}
</script>