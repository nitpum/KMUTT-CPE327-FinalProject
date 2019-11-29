<template>
  <v-container fill-height fluid>
    <v-row class="bg">
      <v-col cols="12">
        <v-row>
          <div class="login-card">
            <p class="title-card">Sign In</p>
          </div>
          <!-- <span style="font-size:300px">login card</span> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'home'
}
</script>

<style>
.bg {
  z-index: 0;
  margin-top: -15px;
  height: 120%;
  background-color: #f2f5f9;
}
.login-card {
  margin: 12% 0px 0px 30%;
  width: 40%;
  height: 300px;
  background-color: white;
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.1);
}
.title-card {
  margin-top: 12px;
  font-size: 20px;
  color: #000000;
  text-align: center;
  font-weight: normal;
}
</style>