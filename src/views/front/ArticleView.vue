<template>
  <div class="container article my-md-30 my-15" data-aos="fade-right">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="p-0 mb-10">
          <img :src="articleData.image" alt="文章示意圖片">
        </div>
        <div class="d-md-flex align-items-center justify-content-between mb-3">
          <h2>{{ articleData.title }}</h2>
          <p class="mb-0">{{ articleData.author }}</p>
        </div>
        <div class="my-15">
          <p class="fs-6" v-html="articleData.content"></p>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <p class="mb-0">{{  time(articleData.create_at) }}</p>
          <RouterLink to="/teachers" class="btn btn-primary fs-6">看看適合我的課程</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH} = import.meta.env
import { RouterLink } from 'vue-router'

export default {
  data () {
    return {
        id: '',
        articleData: {}
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getArticle () {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/article/${this.id}`)
        .then((res) => {
          this.articleData = res.data.article
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    time (at) {
      const date = new Date(at * 1000)
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false }
      return date.toLocaleString('zh-TW', options)
    },
  },
  mounted () {
    const { id } = this.$route.params
    this.id = id
    this.getArticle()
  }
}
</script>
