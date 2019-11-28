<template>
  <v-container class="main" fluid>
    <v-row no-gutters>
      <!-- <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>One of three columns</v-card>
      </v-col>-->
      <v-col cols="2">
        <img class="logo-icon" :src="require('@/assets/icons/logo.svg')" alt />
        <span class="logo-text">LMS</span>
      </v-col>
      <v-col cols="7">
        <v-row justify="start" fluid no-gutters>
          <span class="menu-item">Home</span>
          <span class="menu-item">Pricing</span>
          <span class="menu-item">Doc</span>
          <span class="menu-item">Support</span>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-row justify="center">
          <v-btn class="navbar-btn" color="primary" outlined>Sign in</v-btn>
          <div style="width: 20px"></div>
          <v-btn class="navbar-btn" color="primary" depressed>Sign up</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.main {
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
.menu-item {
  font-weight: normal;
  font-family: 'Roboto';
  line-height: 36px;
  margin-right: 30px;
  font-size: 18px;
}
.menu-item:hover {
  color: #3c9d9b;
}
.logo-text {
  color: #3c9d9b;
  font-size: 24px;
  line-height: 36px;
}
.logo-icon {
  /* width: 20%; */
  height: 85%;
  margin-top: -10px;
  vertical-align: middle;
}
.navbar-btn {
  font-family: Roboto;
  font-weight: normal;
  padding: 0px 30px 0px 30px !important;
  text-transform: capitalize;
}
</style>