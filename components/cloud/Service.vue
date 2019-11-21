<template>
  <v-card outlined>
    <v-row @click="toggle">
      <v-col class="flex-grow-0 flex-shrink-1">
        <v-icon right color="primary">
          mdi-circle-medium
        </v-icon>
      </v-col>

      <v-col>
        <div class="flex-grow-1 flex-shrink-0 d-flex">
          <div class="mr-7">
            <v-icon large>
              mdi-server-network
            </v-icon>
          </div>
          <div>
            <router-link class="service-name" to="/">
              {{ value.name }}
            </router-link>
            <div class="service-spec">
              {{ value.region }} / {{ value.memory }} / {{ value.storage }} Disk
            </div>
          </div>
        </div>
        <v-expand-transition>
          <v-row v-show="detail">
            <v-col cols="6">
              <div class="d-flex">
                <div class="spec-key">Image</div>
                <div class="spec-value">{{ value.image }}</div>
              </div>
              <div class="d-flex">
                <div class="spec-key">Size</div>
                <div class="spec-value">
                  {{ value.cpu }}<br />
                  {{ value.memory }} / {{ value.storage }} Disk<br />
                  {{ value.price }}
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="d-flex">
                <div class="spec-key">Region</div>
                <div class="spec-value">{{ value.region }}</div>
              </div>
              <div class="d-flex">
                <div class="spec-key">IPv4</div>
                <div class="spec-value">{{ value.ipv4 }}</div>
              </div>
            </v-col>
          </v-row>
        </v-expand-transition>
      </v-col>

      <v-col class="flex-grow-0 flex-shrink-1">
        <v-icon left>
          {{ detail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        </v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.service-name {
  text-decoration: none;
}
.service-spec {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 0.75rem;
  color: #666666;
}
.spec-key {
  flex: 1 1;
  font-weight: 500;
  color: #666666;
}
.spec-value {
  flex: 1 1;
  align-items: flex-end;
  color: #666666;
}
</style>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        name: '',
        image: '',
        region: '',
        cpu: '',
        mem: '',
        storage: '',
        price: '',
        ipv4: ''
      })
    }
  },
  data: () => ({
    detail: false
  }),
  methods: {
    toggle() {
      this.detail = !this.detail
    }
  }
}
</script>