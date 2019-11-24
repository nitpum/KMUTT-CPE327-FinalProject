<template>
  <div>
    <images />
    <plans class="mt-5" />
    <regions class="mt-5" />
  </div>
</template>

<script>
import Images from '@/components/cloud/create/Images'
import Plans from '@/components/cloud/create/Plans'
import Regions from '@/components/cloud/create/Regions'

export default {
  components: {
    Images,
    Plans,
    Regions
  }
}
</script>
