<template>
  <!-- <h1>Home</h1> -->
  <v-container fluid>
    <v-row>
      <v-row class="banner" no-gutters fluid justify="start">
        <v-col class="title" cols="6">
          <p class="title-text">The World Fastest</p>
          <p class="title-text">Cloud Service</p>
          <span class="title-sub-text">Deploy in seconds</span>
          <div style="height:10px"></div>
          <div>
            <v-btn class="big-btn" color="primary" depressed>Try free 30 days with 100$</v-btn>
          </div>
        </v-col>
        <v-col cols="6">
          <img src="@/assets/images/home-banner.png" alt />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'home'
}
</script>

<style>
.banner {
  margin: 0px;
  margin-top: -15px;
  box-sizing: border-box;
  min-height: 200px;
  background-color: white;
  z-index: 0;
}

.title {
  margin-top: 10%;
}
.title-text {
  font-size: 32px;
  font-weight: normal;
  margin-left: 50px;
}
.title-sub-text {
  margin-left: 50px;
  font-size: 18px;
  font-weight: 300;
}
.big-btn {
  margin-left: 50px;
  /* padding: 200px; */
  text-transform: unset;
}
</style>
