<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="3">
          <v-avatar width="100%" height="auto">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="9">
          <div class="title text--primary mt-0">
            John Doe
          </div>
          <v-row>
            <v-col cols="12" sm="6">
              <p v-for="item in [email, tel, company]">
                <b>{{ item.name }}:</b>
                {{ item.value }}
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <b>Address:</b>
              {{ address.value }}
            </v-col>
          </v-row>
          <v-btn color="primary" large outlined>
            <v-icon left>
              mdi-image
            </v-icon>
            edit profile picture
          </v-btn>
          <v-btn color="primary" large outlined>
            <v-icon left>
              mdi-pencil
            </v-icon>
            edit profile
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
p {
  line-height: 0.65;
}
</style>

<script>
export default {
  data: () => ({
    email: {
      name: 'Email',
      value: 'john@doe.com'
    },
    tel: {
      name: 'Telephone',
      value: '+66855469978'
    },
    company: {
      name: 'Company',
      value: 'Doe Tech Co., Ltd'
    },
    address: {
      name: 'Address',
      value: `Doe Tech Co., Ltd
        228/24-25 Lat Phrao Road
        Chom Phon, Chatuchak,
        Bangkok 10900
        Thailand
      `
    }
  })
}
</script>
