<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="'header-' + header.key"
            class="text-center"
          >{{ header.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in invoices" :key="item.id">
          <td
            v-for="header in headers.slice(0, -1)"
            :key="['invoice', item.id, header.key].join('-')"
            class="text-center"
          >{{ item[header.key] }}</td>
          <td>
            <a href="/invoice.pdf" text color="primary" class="text-center" download>Download</a>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        name: 'ID',
        key: 'id'
      },
      {
        name: 'Status',
        key: 'status'
      },
      {
        name: 'Type',
        key: 'type'
      },
      {
        name: 'Description',
        key: 'desc'
      },
      {
        name: 'Date',
        key: 'date'
      },
      {
        name: 'Amount',
        key: 'amount'
      },
      {
        name: '',
        key: 'download'
      }
    ],
    invoices: [
      {
        id: '0',
        status: 'Success',
        type: 'Payment',
        desc: 'Payment',
        date: 'May 23, 2019',
        amount: '$8.03'
      },
      {
        id: '1',
        status: 'Success',
        type: 'Payment',
        desc: 'Payment',
        date: 'May 23, 2019',
        amount: '$8.03'
      }
    ]
  })
}
</script>
