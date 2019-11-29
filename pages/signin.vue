<template>
  <v-container fill-height fluid>
    <v-row class="bg">
      <v-col cols="12">
        <v-row>
          <div class="login-card">
            <p class="title-card">Sign In</p>
            <div class="input-card">
              <input class="input" type="text" placeholder="Email Address" />
              <input class="input" type="password" placeholder="Password" />
              <v-btn class="navbar-btn input" color="primary">Sign in</v-btn>
            </div>
          </div>
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
  /* z-index: 0; */
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
.input-card {
  padding: 0px 50px 0px 50px;
}
.input {
  width: 100%;
  font-size: 16px;
  padding: 9px;
  height: 34px;
  background: #ffffff;
  border: 1px solid #9b9b9b;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 25px;
}
</style>