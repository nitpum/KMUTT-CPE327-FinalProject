<template>
  <div>
    <images v-model="image" />
    <plans v-model="plan" class="mt-5" />
    <regions v-model="region" class="mt-5" />
    <optional class="mt-5" />
    <authentication class="mt-5" />
    <finalize :instances.sync="instances" :hostname.sync="hostname" class="mt-5" />
    <v-btn depressed color="primary" block class="mt-5" @click="create">
      Create cloud service
    </v-btn>
  </div>
</template>

<script>
import Images from '@/components/cloud/create/Images'
import Plans from '@/components/cloud/create/Plans'
import Regions from '@/components/cloud/create/Regions'
import Optional from '@/components/cloud/create/Optional'
import Authentication from '@/components/cloud/create/Authentication'
import Finalize from '@/components/cloud/create/Finalize'

export default {
  components: {
    Images,
    Plans,
    Regions,
    Optional,
    Authentication,
    Finalize
  },
  data: () => ({
    image: {
      distro: '',
      version: ''
    },
    plan: {},
    region: {
      region: '',
      server: 0
    },
    instances: 1,
    hostname: ''
  }),
  methods: {
    create() {
      this.$store.commit('cloud/ADD_SERVICE', {
        name: this.hostname,
        image: this.image.distro + ' ' + this.image.version,
        region: this.region.region + '-' + this.region.server,
        cpu: this.plan.vCPUs,
        memory: this.plan.memory,
        storage: this.plan.ssd,
        price: `($${this.plan.price}/mo)`,
        ipv4: '192.81.217.239'
      })
      this.$router.push('/cloud')
    }
  }
}
</script>
