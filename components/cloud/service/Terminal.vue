<template>
  <v-dialog v-model="dialog" persistent width="800">
    <v-card>
      <v-card-title>
        VNC
        <v-icon class="ml-auto" @click="close">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <div class="terminal">
          <div ref="terminal" />
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
output {
  white-space: pre;
  tab-size: 2 !important;
}
</style>

<style scoped>
.terminal {
  background: rgba(0, 0, 0);
  height: 600px;
  overflow: auto;
}
</style>

<script>
import { createTerminal } from 'terminatorator'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    inited: false,
    bash: `Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 4.15.0-64-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed Oct  9 15:14:26 UTC 2019

  System load:                    0.04
  Usage of /:                     85.0% of 57.98GB
  Memory usage:                   72%
  Swap usage:                     25%
  Processes:                      136
  Users logged in:                0
  IP address for eth0:            128.199.2XX.XX
  IP address for docker0:         172.17.0.1
  IP address for br-bc8676eecb20: 172.18.0.1

  => / is using 85.0% of 57.98GB
`
  }),
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
    },
    enter() {
      this.command = ''
    }
  },
  watch: {
    dialog(val) {
      if (val && !this.inited) {
        this.$nextTick(function() {
          createTerminal(this.$refs.terminal, {
            welcome: this.bash,
            theme: 'modern',
            history: 'cli-history',
            user: 'user'
          })
          this.inited = true
        })
      }
    }
  }
}
</script>
