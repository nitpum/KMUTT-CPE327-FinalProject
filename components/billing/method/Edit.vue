<template>
  <v-dialog v-model="dialog" width="600px">
    <template #activator="{ on }">
      <v-btn v-on="on" color="primary" depressed large block>
        {{ mode === 'add' ? 'Add card' : 'Edit' }}
      </v-btn>
    </template>

    <v-card style="padding: 24px">
      <div class="d-flex mb-3">
          Payment Method
        <v-icon class="ml-auto" @click="close">
          mdi-close
        </v-icon>
      </div>
      <v-form v-model="valid" ref="form">
        <v-row class="mt-6">
          <v-col class="py-0" cols="12">
            <v-text-field
              v-model="no"
              :rules="ccRules"
              v-mask="'####-####-####-####'"
              label="Credit card number"
              outlined
              dense
              required
            />
          </v-col>
          <v-col class="py-0" cols="6">
            <v-text-field
              v-model="exp"
              :rules="expRules"
              v-mask="'##/##'"
              label="Expiration Date"
              hint="MM/YY"
              outlined
              dense
            />
          </v-col>
          <v-col class="py-0" cols="6">
            <v-text-field
              v-model="code"
              v-mask="'###'"
              label="Security code"
              outlined
              dense
            />
          </v-col>
          <v-col class="py-0" cols="12">
            <v-text-field
              v-model="name"
              label="Cardholder name"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" class="d-flex flex-row-reverse">
            <v-btn color="primary" :disabled="!valid" depressed @click="save">
              save
            </v-btn>
            <v-btn color="primary" class="mr-3" outlined @click="close">
              close
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: {
    mask,
  },
  props: {
    mode: {
      type: String,
      default: 'edit'
    }
  },
  data: () => ({
    dialog: false,
    valid: false,
    no: '',
    exp: '',
    code: '',
    name: '',
    ccRules: [ v => /\d{4}-\d{4}-\d{4}-\d{4}/.test(v) || 'Invalid format' ],
    expRules: [ v => /(1[0-2]|0[1-9])\/\d{2}/.test(v) || 'MM/YY' ]
  }),
  watch: {
    dialog(val) {
      if(!val) {
        this.$refs.form.reset()
      }
    }
  },
  methods: {
    close() {
      this.dialog = false
    },
    save() {
      this.$store.commit('billing/SET_METHOD', {
        number: this.no,
        expires: this.exp
      })
      this.close()
    }
  }
}
</script>