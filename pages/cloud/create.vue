<template>
  <div>
    <images />
    <plans class="mt-5" />
    <regions class="mt-5" />
    <optional class="mt-5" />
    <authentication class="mt-5" />
  </div>
</template>

<script>
import Images from '@/components/cloud/create/Images'
import Plans from '@/components/cloud/create/Plans'
import Regions from '@/components/cloud/create/Regions'
import Optional from '@/components/cloud/create/Optional'
import Authentication from '@/components/cloud/create/Authentication'

export default {
  components: {
    Images,
    Plans,
    Regions,
    Optional,
    Authentication
  }
}
</script>
