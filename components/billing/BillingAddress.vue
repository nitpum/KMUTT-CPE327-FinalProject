<template>
  <v-card>
    <v-row align="start">
      <v-col class="pt-0" cols="12" sm="8">
        <v-card-title>
          Billing Address
        </v-card-title>
        <v-card-text v-if="baExists">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, neque consequuntur similique ad nisi at accusamus quas, ipsum earum minima reprehenderit itaque? Necessitatibus explicabo esse culpa totam quis in laboriosam!
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card-text class="d-flex flex-column">
          <v-btn v-if="baExists" color="primary" depressed large block>
            Edit
          </v-btn>
          <v-btn v-else color="primary" depressed large block>
            Add
          </v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  computed: {
    baExists() {
      return true
    }
  }
}
</script>