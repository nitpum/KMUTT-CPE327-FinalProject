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
export default {
  data: () => ({
    logs: [
      {
        no: 2,
        status: 'success',
        ip: '127.123.111.1',
        country: 'Thailand',
        date: 'May 23, 2019',
        time: '8.03'
      },
      {
        no: 1,
        status: 'fail',
        ip: '127.123.111.1',
        country: 'Thailand',
        date: 'May 23, 2019',
        time: '8.01'
      }
    ]
  })
}
</script>
