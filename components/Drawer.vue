<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    app
    dark
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
  props: {
    value: {
      type: Boolean,
      default: null
    }
  },
  data: () => ({
    items: [
      {
        title: 'Cloud Service',
        to: '/cloud'
      },
      {
        title: 'Profile',
        to: '/profile'
      },
      {
        title: 'Billing',
        to: '/billing'
      },
      {
        title: 'Support'
      }
    ]
  }),
  computed: {
    drawer: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style>
.logo {
  font-family: Roboto;
  font-size: 28px;
  color: #ffffff;
  margin-top: 16px;
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