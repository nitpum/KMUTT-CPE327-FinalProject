<template>
  <v-container class="main" fluid>
    <v-row no-gutters>
      <!-- <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>One of three columns</v-card>
      </v-col>-->
      <v-col cols="2">
        <router-link to="/" style="cursor:pointer">
          <logo />
        </router-link>
      </v-col>
      <v-col cols="7">
        <v-row justify="start" fluid no-gutters>
          <router-link to="/">
            <span class="menu-item">Home</span>
          </router-link>
          <span class="menu-item">Pricing</span>
          <span class="menu-item">Doc</span>
          <router-link tag="span" class="menu-item" to="/support">Support</router-link>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-row justify="center">
          <router-link to="/signin">
            <v-btn class="navbar-btn" color="primary" outlined>Sign in</v-btn>
          </router-link>
          <div style="width: 20px"></div>
          <router-link to="/signup">
            <v-btn class="navbar-btn" color="primary" depressed>Sign up</v-btn>
          </router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.main {
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
  background-color: white;
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
  cursor: pointer;
}
.navbar-btn {
  padding: 0px 30px 0px 30px !important;
  font-size: 14px !important;
  text-transform: capitalize;
}
</style>
