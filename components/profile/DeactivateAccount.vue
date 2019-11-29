<template>
  <v-card class="d-flex align-center">
    <div class="flex-grow-1">
      <v-card-title>
        Deactivate Account
      </v-card-title>
      <v-card-text>
        This will remove your account and disable your account
      </v-card-text>
    </div>
    <div class="flex-shrink-1">
      <v-card-text>
        <v-dialog v-model="dialog" width="400">
          <template #activator="{ on }">
            <v-btn v-on="on" color="error" outlined large>
              deactivate
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              Deactivate account
              <v-icon class="ml-auto" @click="dialog = false">
                mdi-close
              </v-icon>
            </v-card-title>
            <v-card-text>
              <p>
                If you would like to give us feedback on what we can do to
                improve, please take this very brief survey
              </p>

              <p class="font-weight-bold">Deactive all account data?</p>

              <p>
                When deactivating your account, you can purge all of your
                account data.
              </p>
            </v-card-text>
            <v-card-text>
              <v-btn block color="error" depressed large>
                Deactivate Account
              </v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>
