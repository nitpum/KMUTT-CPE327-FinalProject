<template>
  <div>
    <v-breadcrumbs class="p-0" :items="breadcrumbs" divider=">" />
    <v-row>
      <v-col class="col-md-8 col-sm-12">
        <v-card v-if="article.length >= 1 && article[0]">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1t">{{article[0].title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nisi aperiam distinctio facilis voluptas impedit, neque, accusantium cum aut, aliquid enim cumque? Tenetur eveniet animi eaque laborum eum tempore quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate dolor assumenda nemo, corporis tempora, fugiat earum tempore repellendus nam culpa illo quos tenetur sunt deserunt aliquam dolore veritatis a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus neque porro dignissimos doloribus a alias blanditiis nihil temporibus cupiditate quos fugiat pariatur velit recusandae consectetur veniam quod illum, dolor perferendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum deserunt. Placeat laboriosam repellat exercitationem aperiam fugiat magni perspiciatis necessitatibus non itaque reiciendis ad debitis suscipit qui, dolor sequi ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus? Libero obcaecati facere dolorem, ad laudantium architecto beatae veniam nemo corporis voluptates, eum ratione nesciunt maxime assumenda, eligendi porro ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla error delectus suscipit provident! Laboriosam sapiente blanditiis mollitia, tenetur saepe aut ut? Corporis non aut magnam quia magni doloremque facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum maiores repellendus saepe aut quas excepturi aliquid soluta, obcaecati similique molestias commodi optio tempore in quos accusantium tenetur. Aliquid, vero quidem!</v-card-text>
        </v-card>
        <v-card v-else>
          <v-list-item>
            <v-list-item-title class="headline mb-1t">404 Page not found</v-list-item-title>
          </v-list-item>
          <v-card-text>We can't find the page at you request</v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-md-4 col-sm-12">
        <Faq />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Faq from '@/components/support/Faq'
import articleData from '@/data/article'

export default {
  components: {
    Faq
  },
  computed: {
    article() {
      return articleData.filter(item => item.id === this.id)
    },
    id() {
      return this.$route.params.id
    }
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Support', href: '/support' },
        { text: 'Article', href: '/support/article' },
        { text: 'View', href: '/support/article', disabled: true }
      ]
    }
  }
}
</script>
