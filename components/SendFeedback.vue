<template>
  <v-dialog v-model="dialog" persistent width="800">
    <v-card>
      <v-card-title>
        Feedback
        <v-icon class="ml-auto" @click="close">mdi-close</v-icon>
      </v-card-title>
      <v-col>
        <v-textarea
          outlined
          name="input-7-4"
          label="Feedback"
          placeholder="Write your feedback. We are hearing you"
        ></v-textarea>
        <v-row justify="end" fluid no-gutters>
          <v-col cols="3">
            <v-btn @click="close" class="btn" color="primary" outlined
              >Cancel</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="btn" color="primary" depressed>Submit</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<style></style>

<style scoped>
.btn {
  font-size: 14px;
  /* text-transform: capitalize; */
  width: 90%;
  float: right;
}
</style>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    close() {
      this.dialog = false
    }
  }
}
</script>
