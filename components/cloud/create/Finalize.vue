<template>
  <div>
    <div class="title">
      Finalize and Create
    </div>
    <v-row>
      <v-col cols="12" sm="6">
        <div class="subtitle-1">
          How many Cloud services ?
        </div>
        <div class="caption">
          Deploy multiple Cloud services with the same configuration
        </div>
        <v-card outlined class="d-flex">
          <v-btn class="flex-shrink-1" depressed color="primary" @click="decrease">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <div class="flex-grow-1 align-self-center text-center">
            {{ instances }} instance{{ instances !== 1 ? 's' : ''}}
          </div>
          <v-btn class="flex-shrink-1" depressed color="primary" @click="increase">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="subtitle-1">
          Choose hostname
        </div>
        <div class="caption">
          Your Cloud service name can only contain alphanumeric character, dashes, and perriods
        </div>
        <v-text-field outlined dense :rules="hostnameRules" />
      </v-col>
    </v-row>
  </div>
</template>

<style>
.input {
  text-align: center
}
</style>

<script>
export default {
  data: () => ({
    instances: 1,
    hostnameRules: [
      v => /^([a-z]|\d|-|\.)+$/.test(v) || 'Invalid hostname'
    ]
  }),
  methods: {
    decrease() {
      this.instances = Math.max(1, this.instances - 1)
    },
    increase() {
      this.instances += 1
    }
  }
}
</script>