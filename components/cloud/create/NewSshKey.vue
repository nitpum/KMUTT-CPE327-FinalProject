<template>
  <v-dialog v-model="dialog" width="800">
    <template #activator="{ on }">
      <v-btn v-on="on" depressed color="primary">
        New SSH Key
      </v-btn>
    </template>
    <v-card>
      <v-icon class="close-btn" @click="dialog = false">mdi-close</v-icon>
      <v-card-text class="pt-5">
        <v-row>
          <v-col cols="12" sm="7">
            <div class="title mb-3">
              Add public SSH key
            </div>
            <v-textarea
              outlined
              placeholder="SSH key content"
              rows="12"
              hide-details
              class="mb-3"
            />
            <v-btn block color="primary" @click="dialog = false">
              Add SSH Key
            </v-btn>
          </v-col>
          <v-col cols="12" sm="5">
            <div class="title mb-3">
              SSH Key
            </div>
            <div>
              Follow these instructions to create or add SSH keys on Linux, MacOS & Windows.
              Windows users without 
              <a href="https://www.openssh.com/" target="blank">OpenSSH</a>
              can install and use
              <a href="https://www.putty.org/" target="blank">PuTTY</a>
              instead
            </div>
            <div class="mt-5 text--primary">
              Create a new key pair, if needed
            </div>
            <div class="mt-2">
              Open a terminal and run the following command:
            </div>
            <v-sheet class="terminal pa-3 mt-2" color="#F6F6F6">
              ssh-keygen
            </v-sheet>
            <div class="mt-2">
              You will be prompted to save and name the key.
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
.close-btn {
  position: absolute;
  right: 16px;
  top: 16px;
}
a {
  text-decoration: none;
}
.terminal {
  font-family: monospace, monospace;
}
</style>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>
