<template>
  <div class="main-wrapper"></div>
</template>

<script>
import { queryArticles } from '~/assets/apollo/article'
export default {
  name: 'Index',
  data() {
    return {
      articles: [],
    }
  },
  apollo: {
    articles: {
      query: queryArticles,
      update(data) {
        return data.articles
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  height: 3000px;
}
</style>
