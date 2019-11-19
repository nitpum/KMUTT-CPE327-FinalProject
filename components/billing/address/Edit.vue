<template>
  <v-dialog v-model="dialog" width="600px">
    <template #activator="{ on }">
      <v-btn v-on="on" color="primary" depressed large block>
        {{ exist ? 'Edit' : 'Add' }}
      </v-btn>
    </template>

    <v-card style="padding: 24px">
      <div class="d-flex mb-6">
          Billing Address
        <v-icon class="ml-auto" @click="close">
          mdi-close
        </v-icon>
      </div>

      <v-form v-model="valid" ref="form">
        <v-text-field
          v-model="name"
          label="Full name"
          outlined
          dense
          :rules="[required]"
        />
        <v-text-field
          v-model="addr1"
          label="Address 1"
          outlined
          dense
          hint="Street and number, P.O. box, c/o."
          :rules="[required]"
        />
        <v-text-field
          v-model="addr2"
          label="Address 2"
          outlined
          dense
          hint="Apartment, suite, unit, building, floor, etc."
          :rules="[required]"
        />
        <v-text-field
          v-model="country"
          label="Country"
          outlined
          dense
          :rules="[required]"
        />

        <div class="d-flex flex-row-reverse">
          <v-btn color="primary" :disabled="!valid" depressed @click="save">
            save
          </v-btn>
          <v-btn color="primary" class="mr-3" outlined @click="close">
            close
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    dialog: false,
    valid: false,
    name: '',
    addr1: '',
    addr2: '',
    country: '',
    required: v => !!v || 'Required'
  }),
  watch: {
    dialog(val) {
      if (!val) {
        this.$refs.form.reset()
      }
    }
  },
  methods: {
    close() {
      this.dialog = false
    },
    save() {
      this.$store.commit('billing/SET_ADDRESS', {
        name: this.name,
        addr1: this.addr1,
        addr2: this.addr2,
        country: this.country
      })
      this.close()
    }
  },
  computed: {
    ...mapGetters({
      exist: 'billing/addressExist'
    })
  }
}
</script>