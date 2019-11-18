<template>
  <v-dialog v-model="dialog" width="600px">
    <template #activator="{ on }">
      <v-btn v-on="on" color="primary" depressed large block>
        Edit
      </v-btn>
    </template>

    <v-sheet style="padding: 24px">
      <div class="d-flex mb-3">
          Payment Method
        <v-icon class="ml-auto" @click="dialog = false">
          mdi-close
        </v-icon>
      </div>
      <v-form>
        <v-row class="mt-6">
          <v-col class="py-0" cols="12">
            <v-text-field
              v-model="no"
              v-mask="'####-####-####-####'"
              label="Credit card number"
              outlined
              dense
            />
          </v-col>
          <v-col class="py-0" cols="6">
            <v-text-field
              v-model="exp"
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
            <v-btn color="primary" depressed small>
              save
            </v-btn>
            <v-btn color="primary" class="mr-3" outlined small>
              close
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
  </v-dialog>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: {
    mask,
  },
  data: () => ({
    dialog: false,
    no: '',
    exp: '',
    code: '',
    name: ''
  })
}
</script>