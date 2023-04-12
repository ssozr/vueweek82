<template>
    <div class="container-lg mt-md-30 mt-15 mb-md-30 mb-15 index-article">
      <div class=" mb-8">
        <div class="d-flex justify-content-center">
          <h2 class="fs-1 text-center mb-md-15 mb-8 border-bottom border-primary border-2 pb-3">陪伴無數朋友們，重新認識自己</h2>
        </div>
        <div class="row align-items-center px-3 py-8 bg-F7F3F0 mb-6 border-bottom border-primary border-4" v-for="(article, i) in articlesData.splice(startNum,num)" :key="article.id">
            <div class="offset-lg-2 col-xl-1 p-0 col-lg-2 col-sm-3 col-md-2 text-center mb-3">
              <img src="@/assets/images/Group.png" alt="女性頭像圖示" v-if="i % 2 === 0">
              <img src="@/assets/images/Group2.png" alt="男性頭像圖示" v-else>
            </div>
            <div class=" p-0 mb-5 col-xl-6 col-lg-5 col-sm-9 col-md-10 fs-5">
              <p class="m-0">{{ article.description }}</p>
            </div>
            <div class="col-lg-3 ps-19 pe-0 d-lg-block d-flex justify-content-end">
              <RouterLink :to="`/articles`" class="btn btn-secondary rounded-pill text-white fs-6">更多故事</RouterLink>
            </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="btn" class="preBtn bg-white border-0 position-relative me-1" @click="prePage()"  :class="{ 'disabled': startNum === 0, 'not_allowed': startNum === 0 }" >
          <img class="position-absolute top-50 start-50 translate-middle" src="@/assets/images/pre.png" alt="上一頁箭頭圖示" style="height: 12px;">
        </button>
        <button type="btn" class="preBtn bg-white border-0 position-relative ms-1" @click=" nextPage()" :class="{ 'disabled': startNum === articlesData.length }">
          <img class="position-absolute top-50 start-50 translate-middle" src="@/assets/images/next.png" alt="下一頁箭頭圖示" style="height: 12px;">
        </button>
      </div>
    </div>
</template>

<script>
const {VITE_PATH, VITE_URL} = import.meta.env

export default {
  data () {
    return {
      articlesData: [],
      num: 2,
      startNum: 0,
    }
  },
  methods: {
    getArticleData () {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/articles`)
        .then((res) => {
          this.articlesData = res.data.articles
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    nextPage(){
        if(this.startNum >= this.articlesData.length){
          this.startNum = this.articlesData.length
          return
        }
        this.startNum += 2
        this.getArticleData()
      },
    prePage(){
        if(this.startNum <= 0 ){
          this.startNum = 0
          return
        }
        this.startNum -= 2
        this.getArticleData()
    }
  },
  mounted () {
    this.getArticleData()
  }
}
</script>