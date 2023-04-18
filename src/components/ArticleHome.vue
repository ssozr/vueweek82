<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}



.swiper-button-next::after {
    color:#F79E1B;
}

.swiper-button-next, .swiper-button-prev {
    position: static;
    width: auto;
}

</style>
<template>
    <div class="container-lg mt-md-30 mt-15 mb-md-30 mb-15 index-article" data-aos="fade-right">
      <div class=" mb-8">
        <div class="d-flex justify-content-center">
          <h2 class="fs-1 text-center mb-md-15 mb-8 border-bottom border-primary border-2 pb-3">陪伴無數朋友們，重新認識自己</h2>
        </div>
        <swiper :modules="modules" :space-between="30" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" class="mySwiper pb-0">
            <swiper-slide v-for="(article, i) in articlesData" :key="article.id">
                <div class="row align-items-center px-3 py-8 bg-F7F3F0 mb-6 border-bottom border-primary border-4" style="width:100%">
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
            </swiper-slide>
        </swiper>
        <swiper :modules="modules" :space-between="30" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }" class="mySwiper pb-0">
            <swiper-slide v-for="(article, i) in articlesData.reverse()" :key="article.id">
                <div class="row align-items-center px-3 py-8 bg-F7F3F0 mb-6 border-bottom border-primary border-4" style="width:100%">
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
            </swiper-slide>
        </swiper>
      </div>

    </div>
  </template>
  <script>
  const {VITE_PATH, VITE_URL} = import.meta.env
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Grid, Pagination,Autoplay } from 'swiper';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/navigation';

  
    export default {
      components: {
        Swiper,
        SwiperSlide
      },
      setup() {
        return {
            modules: [Grid, Pagination,Autoplay],
        };
      },
      data () {
    return {
      articlesData: [],
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
    }
  },
  mounted () {
    this.getArticleData()
  }
    };
  </script>
  