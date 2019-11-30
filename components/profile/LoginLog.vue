<template>
  <v-card>
    <v-card-title>
      Login Log
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">No.</th>
            <th class="text-left">Status</th>
            <th class="text-left">IP</th>
            <th class="text-left">Country</th>
            <th class="text-left">Date</th>
            <th class="text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in logs" :key="item.no">
            <td>{{ item.no }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.ip }}</td>
            <td>{{ item.country }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      logs: state => state.profile.logs
    })
  }
}
</script>
