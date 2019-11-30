<template>
  <div>
    <div class="d-flex">
      <div class="title">Choose a plan</div>
      <a href="/support" target="blank" class="help ml-auto d-flex align-center">
        Help me choose
        <v-icon right color="primary">mdi-alert-circle-outline</v-icon>
      </a>
    </div>
    <v-tabs v-model="selectedTab" background-color="transparent">
      <v-tab>All type</v-tab>
      <v-tab v-for="tab in tabs.slice(1)" :key="'tab-' + tab">{{ tab }}</v-tab>
    </v-tabs>

    <v-radio-group v-model="selected">
      <v-data-table
        :headers="headers"
        :items="plans"
        :search="tabs[selectedTab]"
        item-key="id"
        show-select
        single-select
        hide-default-footer
        disable-sort
        :custom-filter="planFilter"
        style="width: 115%"
      >
        <template v-slot:item.data-table-select="{ item }">
          <v-radio color="primary" :value="item.id" />
        </template>
        <template v-slot:item.price="{ value }">
          ${{ value }}/mo
          <br />
          ${{ (value / 720).toFixed(3) }}/hr
        </template>
      </v-data-table>
    </v-radio-group>

    <div class="caption" v-if="currentPlan">
      Currently selected:
      {{ currentPlan.type }} /
      {{ currentPlan.memory }} /
      {{ currentPlan.vCPUs }}
    </div>
  </div>
</template>

<style scoped>
.help {
  text-decoration: none;
}
</style>

<script>
export default {
  data: () => ({
    selectedTab: 0,
    tabs: ['.*', 'Standard', 'Optimize'],
    plans: [
      {
        id: 1,
        type: 'Standard',
        cpuType: 'Shared CPU',
        vCPUs: '1 vCPU',
        memory: '1 GB',
        ssd: '25 GB',
        transfer: '1 TB',
        price: 5
      },
      {
        id: 2,
        type: 'Standard',
        cpuType: 'Shared CPU',
        vCPUs: '1 vCPU',
        memory: '2 GB',
        ssd: '50 GB',
        transfer: '2 TB',
        price: 10
      }
    ],
    selected: 0,
    headers: [
      {
        text: 'Type',
        value: 'type'
      },
      {
        text: 'CPU-Type',
        value: 'cpuType'
      },
      {
        text: 'vCPUs',
        value: 'vCPUs'
      },
      {
        text: 'Memory',
        value: 'memory'
      },
      {
        text: 'SSD',
        value: 'ssd'
      },
      {
        text: 'Transfer',
        value: 'transfer'
      },
      {
        text: 'Price',
        value: 'price'
      }
    ]
  }),
  watch: {
    currentPlan(val) {
      this.$emit('input', val)
    }
  },
  computed: {
    currentPlan() {
      return this.plans.find(({ id }) => id === this.selected)
    }
  },
  methods: {
    planFilter(value, search, item) {
      return new RegExp(search).test(item.type)
    }
  }
}
</script>