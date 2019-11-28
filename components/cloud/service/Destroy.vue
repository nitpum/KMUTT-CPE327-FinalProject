<template>
  <v-row>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>Destory Service</v-card-title>
        <v-card-text>
          This is <span class="text--primary">irrevisble</span>.
          We will destroy your Service and all associated backups. All Service data will be scrubbed and irretrievable.
        </v-card-text>
        <v-card-text>
          <v-dialog v-model="dialog" width="400">
            <template #activator="{ on }">
              <v-btn v-on="on" color="error" outlined large>
                Destroy
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="d-flex mb-3">
                Destroy Service
                <v-icon class="ml-auto" @click="dialog = false">
                  mdi-close
                </v-icon>
              </v-card-title>
              <v-card-text>
                Are you sure would like to permanetly delete Ubuntu-s-1vcpu-1gb-sg1-01 ?
                <br /><br />
                Snapshots created from this Service will not be deleted and will continue to be charged. Snapshots must be deleted seperatedly.
              </v-card-text>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-btn block depressed @click="dialog = false">
                      cancel
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn block depressed color="error">
                      confirm
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>