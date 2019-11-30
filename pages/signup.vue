<template>
  <v-container fill-height fluid>
    <v-row class="bg">
      <v-col cols="12">
        <v-row>
          <div class="login-card-signup">
            <p class="title-card">Sign Up</p>
            <div class="input-card">
              <input class="input" type="text" placeholder="Full Name" />
              <input class="input" type="email" placeholder="Email Address" />
              <input class="input" type="password" placeholder="Password" />
              <v-btn class="navbar-btn input" color="primary">Create Account</v-btn>
              <p class="sep-card">or sign up with</p>
              <v-btn style="margin-top: -10px;" class="navbar-btn input" outlined>
                <img class="logo" :src="require('@/assets/icons/google.svg')" alt />
                Google
              </v-btn>
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
.login-card-signup {
  margin: 15% 0px 0px 30%;
  width: 40%;
  height: 450px;
  background-color: white;
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.1);
}
.title-card {
  margin-top: 36px;
  font-size: 24px;
  color: #000000;
  text-align: center;
  font-weight: normal;
}
.input-card {
  padding: 0px 50px 0px 50px;
}
.input {
  width: 100%;
  font-size: 13px;
  padding: 9px;
  height: 34px;
  background: #ffffff;
  border: 0.5px solid #9b9b9b;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 25px;
}
.sep-card {
  text-align: center;
  padding: 10px 0px 0px 10px;
  color: #9b9b9b;
}

.logo {
  width: 20px;
  margin: 0px;
  margin-right: 6px;
}
</style>