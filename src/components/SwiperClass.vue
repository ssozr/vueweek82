<style>
#app { height: 100% }
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
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: auto;
}

.swiper-slide img {
  display: block;
}

.card-img {
  object-fit: cover;
  object-position: center;
  height: 268px;
  width: 268px;
}
.product {
  border:1px solid #F8C343;
}

</style>

<template>
      <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(product, i) in otherClassData" :key="i" @click="changPage(product.id)">
      <RouterLink :to="`/class/${product.id}`">
            <div class="card  bg-primary border-0 pt-4" style="height: 481px; width: 300px;">
              <div class="d-flex justify-content-center" >
                <div class="d-flex justify-content-center align-items-center border rounded-circle border-secondary" >
                  <img :src="product.imageUrl" class="card-img-top rounded-circle card-img p-5" alt="導師照片">
                </div>
              </div>
              <div class="card-body text-center p-0 mt-5">
                <h2 class="card-title fs-4">{{ product.title}}</h2>
                <div class="mt-8 mb-6">
                  <p class="card-text fs-6">{{ product.description }}</p>
                </div>
              </div>
              <div class="card-footer text-center bg-secondary text-white">
                詳細介紹
              </div>
            </div>
        </RouterLink>
      </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { RouterLink } from "vue-router";

export default {
  props: ['otherClassData'],
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
  methods: {
    changPage (id) {
      this.$emit('chang-page', id);
    }
  }
};
</script>