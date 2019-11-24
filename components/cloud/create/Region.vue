<template>
  <v-card width="100%">
    <v-card-text class="text-center">
      <v-img 
        class="ma-3"
        :aspect-ratio="3 / 2"
        :src="require('@/assets/images/' + img)"
      />
      {{ title }}
    </v-card-text>
    <v-divider />
    <v-row class="ml-auto mr-auto" style="width: 100%">
      <template
        v-for="i in servers"
      >
        <v-divider v-if="i !== 1" vertical />
        <v-col
          :key="title + '-' + i"
          class="text-center"
        >
          {{ i }}
        </v-col>
      </template>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    servers: {
      type: Number,
      default: 1
    }
  }
}
</script>