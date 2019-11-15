<template>
  <v-navigation-drawer
    fixed
    app
    dark
    permanent
    color="#23374D"
  >
    <div class="logo">
      LWS
    </div>

    <v-list style="margin-top: 28px;">
      <v-list-item
        v-for="(item, i) in items"
        :key="'menu-' + i"
        :to="item.to"
        link
        class="drawer-menu"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="copyright">
        Lamo Web Service © 2019
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Cloud Service',
        to: '/'
      },
      {
        title: 'Profile',
        to: '/profile'
      },
      {
        title: 'Billing'
      },
      {
        title: 'Support'
      }
    ]
  })
}
</script>

<style>
.logo {
  font-family: Roboto;
  font-size: 28px;
  color: #ffffff;
  margin-left: 64px;
}
.drawer-menu {
  padding-left: 64px;
}
.copyright {
  color: #DADADA;
  text-align: center;
  margin-bottom: 24px;
}
</style>