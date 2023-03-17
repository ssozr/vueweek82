<template>
  <div class="articles">
    <div class="container my-15">
      <div class="row">
        <RouterLink :to="`/article/${item.id}`"  v-for="(item, i) in articleData" :key="i">
          <div class="card mb-3 p-0">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="item.image" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body d-flex flex-column justify-content-between">
                  <div class="mb-3">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="card-text"><small class="text-muted">{{ time(item.create_at) }}</small></p>
                    <button type="button" class="btn btn-primary">閱讀全文</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </RouterLink>
      </div>
        <pagination :class="{ 'd-none': pagination.total_pages === 1 }"
        :pages="pagination" 
        @change-page="changePage"
        ></pagination>
    </div>
  </div>
</template>

<script>
const {VITE_PATH, VITE_URL} = import.meta.env
import pagination from '../components/PaginationView.vue'
import { RouterLink } from 'vue-router'

export default {
  data () {
    return {
      articleData: [],
      pagination: {}
    }
  },
  components: {
    pagination,
    RouterLink
  },
  methods: {
    getArticleData ( page = 1 ) {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/articles/?page=${page}`)
        .then((res) => {
          console.log(res)
          this.articleData = res.data.articles
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
    },
    time (at) {
      const date = new Date(at * 1000)
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false }
      return date.toLocaleString('zh-TW', options)
    },
    changePage (page) {
      this.getClassData(page)
    },
  },
  mounted () {
    this.getArticleData()
  }
}
</script>
