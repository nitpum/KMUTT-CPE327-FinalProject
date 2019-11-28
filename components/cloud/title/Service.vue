<template>
  <div class="d-flex align-center">
    <v-avatar class="service" size="64">
      <v-icon large>
        mdi-server-network
      </v-icon>
      <div class="dot" />
    </v-avatar>
    <div class="ml-5">
      <div class="title">
        Ubuntu-s-1vcpu-1gb-sg1-01
      </div>
      <div class="caption grey--text text--darken-1">
        1GB Memory / 25GB Disk / SG1 - Ubuntu 18.04.3 (LTS) x64
      </div>
    </div>
    <div class="ml-auto">
      <v-switch color="primary" hide-details />
    </div>
  </div>
</template>

<style scoped>
.service {
  border: 1px solid #BDBDBD;
}
.dot {
  position: absolute;
  background-color: var(--v-primary-base);
  right: 4.5%;
  bottom: 4.5%;
  height: 12px;
  width: 12px;
  border-radius: 50%;
}
</style>
