<template>
  <v-navigation-drawer v-model="drawer" fixed app dark color="#23374D">
    <div class="d-flex logo">
      <router-link to="/cloud" style="text-decoration: none;">
        <logo white />
      </router-link>
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
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  },
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
        title: 'Support',
        to: '/support'
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
  margin-top: 16px;
  margin-left: 24px;
}
.drawer-menu {
  padding-left: 64px !important;
}
.copyright {
  color: #dadada;
  text-align: center;
  margin-bottom: 24px;
}
</style>
