<template>
  <div>
    <images />
    <plans class="mt-5" />
    <regions class="mt-5" />
    <optional class="mt-5" />
    <authentication class="mt-5" />
    <finalize class="mt-5" />
    <v-btn depressed color="primary" block class="mt-5">
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
  }
}
</script>
