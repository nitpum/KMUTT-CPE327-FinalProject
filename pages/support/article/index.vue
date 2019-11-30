<template>
  <div>
    <v-breadcrumbs class="p-0" :items="breadcrumbs" divider=">" />
    <v-row>
      <v-col class="col-md-12 col-sm-12">
        <Search :search="search" :onSearch.sync="this.search" />
        <v-card
          v-for="(article, i) in filteredArticles"
          :key="'article-'+ i"
          :to="`/support/article/${article.id}`"
          class="mb-3"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1 primary--text">{{article.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from '@/components/support/Search'
import article from '@/data/article'

export default {
  layout: 'support',
  components: {
    Search
  },
  computed: {
    filteredArticles() {
      return article
        .filter(item => (this.filter ? item.tags.includes(this.filter) : true))
        .filter(item => (this.search ? item.title.match(this.search) : true))
    }
  },
  mounted() {
    this.search = this.$route.query.search
    this.filter = this.$route.query.filter
  },
  data() {
    return {
      filter: '',
      search: '',
      breadcrumbs: [
        { text: 'Support', href: '/support' },
        { text: 'Article', href: '/support/article', disabled: true }
      ]
    }
  }
}
</script>
