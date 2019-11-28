<template>
  <v-row>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>Turn off Service</v-card-title>
        <v-card-text>
          When you turn off a Cloud service from the control panel, we first try a graceful shutdown. If that fails, we do a forced shutdown, which may corrupt data
        </v-card-text>
        <v-card-text>
          When a Service off: <br /><br />

          - Its data and IP address are retained its disk, CPU and RAM are reserved<br />
          - You continue to accure its data transfer allowance.
        </v-card-text>
        <v-card-text>
          <v-icon color="error">
            mdi-alert
          </v-icon>
          <b class="text--primary">Warning</b>:
          You still be
          <span class="text--primary">billed</span>
          for a turned off Service. To end billing destroy instead
        </v-card-text>
        <v-card-text>
          <v-btn depressed large>
            Turn off
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>Power cycle</v-card-title>
        <v-card-text>
          A ower cycle will imediately hard reset the server. You should only choose this option when you are unable to reboot the Service from the comandline
        </v-card-text>
        <v-card-text>
          <v-btn depressed large>
            Power Cycle
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
