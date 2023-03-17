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
  padding-bottom: 30px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #F8C343;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}

.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
  bottom: -4px;
}

.teacher-1 {
      background-image: url("../assets/images/Ellipse\ 14\ \(1\).png");
      height: 268px;
      width: 268px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius:50%;
  }
.teacher-2 {
    background-image: url("./images/Ellipse\ 14.png");
    height: 268px;
    width: 268px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius:50%;
}

</style>



<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <div class="row">
        <div class="card border-primary border-0 p-0" style="width: 362px;">
          <div class="bg-primary border-primary d-flex justify-content-center">
            <div class="rounded-circle border border-secondary position-relative " style="width: 308px;">
              <div class="teacher-1 m-5"></div>
              <img src="../assets/images/Ellipse18.png" alt="" class="position-absolute top-0 end-0">
            </div>
          </div>
          <div class="card-body bg-primary p-0">
            <h5 class="card-title mt-6 text-center mb-8" >Aaliyah</h5>
            <p class="card-text mb-6 fs-6">人的一生中，與自己的對話，多過與別人的對話 但我們對自己講的話，不一定是溫和，真實，有幫助， 有時甚至毫不尊重．</p>
            <div class="text-center">
              <button type="button" class="btn btn-secondary rounded-pill px-10 py-3">課程連結</button>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="row">
        <div class="card border-primary border-0 p-0" style="width: 362px;">
          <div class="bg-primary border-primary d-flex justify-content-center">
            <div class="rounded-circle border border-secondary position-relative " style="width: 308px;">
              <div class="teacher-2 m-5"></div>
              <img src="../assets/images/Ellipse18.png" alt="" class="position-absolute bottom-0 end-0">
            </div>
          </div>
          <div class="card-body bg-primary p-0">
            <h5 class="card-title mt-6 text-center mb-8" >Aaliyah</h5>
            <p class="card-text mb-6 fs-6">改變往往不像Nike說的那麼單純: Just Do it ，也不像許新年願望那麼簡單，改變需要通過一連串階段，讓你慢慢的好起來...</p>
            <div class="text-center">
              <button type="button" class="btn btn-secondary rounded-pill px-10 py-3">課程連結</button>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';


  // import required modules
  import { Pagination } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>
