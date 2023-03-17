
<template>
  <div class="container-fluid banner px-0 d-flex align-items-center mb-15 mb-md-30 position-relative">
    <div class="container">
      <div class="row">
        <div class="px-0 col-md-5 col-8 mt-49">
          <h1 class="mb-0 fs-1">用我們的專業，幫您看見內心</h1>
          <label for="search"><h4 class="mt-md-8 pb-md-6 mt-3 pb-3 mb-0">我想看見...</h4></label>
          <div class="input-group">
            <select class="form-select" id="search">
              <option >人生方向、家庭關係...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type="button" class="input-group-text bg-primary btn d-flex">
              <span class="material-symbols-outlined text-white">search</span>
            </button>
          </div>
          <!-- <div class="input-group search">
            <input id="search" type="text" class="form-control" placeholder="人生方向、家庭關係...">
            <span class="input-group-text bg-primary">
              <span class="material-symbols-outlined text-white">search</span>
            </span>
            <div class="d-block">123s</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="container second mb-md-30 mb-15">
    <div class="row">
      <div class="d-flex justify-content-center">
        <h2 class="fs-1 text-center mb-18 border-bottom border-primary border-2 pb-3">您內心的疑惑，我們懂</h2>
      </div>
      <ul class="row mb-0">
        <li class="col-lg-3 col-6">
          <div class="img-1"></div>
          <h5 class="text-center mt-md-6 mt-3 mb-0 fz-18">家人不懂我</h5>
        </li>
        <li class="col-lg-3 col-6">
          <div class="img-2"></div>
          <h5 class="text-center mt-md-6 mt-3  fz-18 ">我還能再愛嗎?</h5>
        </li>
        <li class="col-lg-3 col-6">
          <div class="img-3"></div>
          <h5 class="text-center mt-md-6 mt-3  fz-18">該換工作嗎?</h5>
        </li>
        <li class="col-lg-3 col-6">
          <div class="img-4"></div>
          <h5 class="text-center mt-md-6 mt-3  fz-18">我在追求什麼?</h5>
        </li>
      </ul>
    </div>
  </div>
  <div class="container-fluid bg-primary third pb-md-30 pb-15">
    <div class="d-flex justify-content-center">
      <h2 class="fs-1 text-center mb-md-15 mb-8 border-bottom border-secondary border-2 pb-3 pt-15 ">讓專業，協助您看見真實</h2>
    </div>
    <swiper class="d-md-none"></swiper>
    <div class="row teacher">
      <div class="col-md-6 p-0 mb-6 mb-md-0">
        <RouterLink to="teachers">
          <div class="d-flex justify-content-md-end justify-content-center me-xxl-42 me-xl-30 me-md-3">
            <div class="card border-primary border-3" style="width: 362px;">
              <div class="bg-primary border-primary">
                <div class="rounded-circle border border-secondary position-relative " style="width: 308px;">
                  <div class="teacher-1 m-5"></div>
                  <img src="../assets/images/Ellipse18.png" alt="" class="position-absolute top-0 end-0">
                </div>
              </div>
              <div class="card-body bg-primary p-0">
                <h5 class="card-title mt-6 text-center mb-8 fz-18" >Aaliyah</h5>
                <p class="card-text mb-6 fs-6">人的一生中，與自己的對話，多過與別人的對話 但我們對自己講的話，不一定是溫和，真實，有幫助， 有時甚至毫不尊重．</p>
                <div class="text-center">
                  <button type="button" class="btn btn-secondary rounded-pill px-10 py-3 text-white">課程連結</button>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-md-6 p-0">
        <div class="d-flex justify-content-md-start justify-content-center ms-xxl-42 ms-xl-30 ms-md-3">
          <RouterLink to="teachers">
            <div class="card border-primary border-3" style="width: 362px;">
              <div class="bg-primary border-primary">
                <div class="rounded-circle border border-secondary position-relative" style="width: 308px;">
                  <div class="teacher-2 m-5"></div>
                  <img src="../assets/images/Ellipse18.png" alt="" class="position-absolute bottom-0 end-0">
                </div>
              </div>
              <div class="card-body bg-primary p-0">
                <h5 class="card-title mt-6 text-center mb-8 fz-18">Aaliyah</h5>
                <p class="card-text mb-6 fs-6">改變往往不像Nike說的那麼單純: Just Do it ，也不像許新年願望那麼簡單，改變需要通過一連串階段，讓你慢慢的好起來...</p>
                <div class="text-center">
                  <button type="button" class="btn btn-secondary rounded-pill px-10 py-3 text-white">課程連結</button>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="container-lg mt-md-30 mt-15 mb-md-30 mb-15 index-article">
    <div class=" mb-8">
      <div class="d-flex justify-content-center">
        <h2 class="fs-1 text-center mb-md-15 mb-8 border-bottom border-primary border-2 pb-3">陪伴無數朋友們，重新認識自己</h2>
      </div>
      <div class="row align-items-center px-3 py-8 bg-F7F3F0 mb-6 border-bottom border-primary border-4">
          <div class="offset-lg-2 col-xl-1 p-0 col-lg-2 col-sm-3 col-md-2 text-center mb-3">
            <img src="../assets/images/Group.png" alt="">
          </div>
          <div class=" p-0 mb-5 col-xl-6 col-lg-5 col-sm-9 col-md-10 fs-5">
            <p class="m-0">20年的婚姻，終究沒能繼續下去，而當我的人生，只為活而活時，我感覺我需要幫助而到了這裡遇見XXX心理師，他引導著我，找到屬於我的意義...</p>
          </div>
          <div class="col-lg-3 ps-19 pe-0 d-lg-block d-flex justify-content-end">
            <RouterLink :to="`/articles`" class="btn btn-secondary rounded-pill text-white fs-6">更多故事</RouterLink>
          </div>
      </div>
      <div class="row align-items-center px-3 py-8 bg-F7F3F0 mb-6 border-bottom border-primary border-4">
          <div class="offset-lg-2 col-xl-1 p-0 col-lg-2 col-sm-3 col-md-2 text-center mb-3">
            <img src="../assets/images/Group2.png" alt="">
          </div>
          <div class=" p-0 mb-5 col-lg-6 col-10 fs-5">
            <p class="m-0">［你的眼睛正在打開，而他的卻在闔上］一句話讓我當場淚崩，我不想將來才 後悔，沒有好好的和父母擁抱．</p>
          </div>
          <div class="col-lg-3 ps-19 pe-0 d-lg-block d-flex justify-content-end">
            <RouterLink :to="`/articles`" class="btn btn-secondary rounded-pill text-white fs-6">更多故事</RouterLink>
          </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="btn" class="preBtn bg-white border-0 position-relative me-1">
        <img class="position-absolute top-50 start-50 translate-middle" src="../assets/images/pre.png" alt="" style="height: 12px;">
      </button>
      <button type="btn" class="preBtn bg-white border-0 position-relative ms-1">
        <img class="position-absolute top-50 start-50 translate-middle" src="../assets/images/next.png" alt="" style="height: 12px;">
      </button>
    </div>
  </div>
  <div class="container-fluid bg-F7F3F0 pt-md-30 pt-15 pb-15 pb-md-30 fourth">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2 class="fs-1 text-center mb-md-15 mb-8 border-bottom border-primary border-2 pb-3">以最放鬆的方式，敘說您的故事</h2>
      </div>
      <ul class="row m-0 p-0">
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-1 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">數十位專業諮商師</p>
        </li>
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-2 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">１對１線上諮詢</p>
        </li>
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-3 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">自行決定對談時間</p>
        </li>
        <li class="col-lg-3 col-md-6 p-0">
          <div class="img-4 bg-F7F3F0 color-F7F3F0"></div>
          <p class="text-center mt-7 mb-0 fz-18">絕對注重隱私</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="container-fluid fifth mb-8">
    <div class="container">
      <div class="row">
        <h2 class="text-white text-center mt-md-48 mt-15 fs-1 mb-md-6 mb-8">只差最後一步，就可以開始探索自己</h2>
        <div class="d-flex justify-content-center">
          <RouterLink to="teachers" type="button" class="btn btn-primary rounded-pill fs-6 text-white px-10 py-3">立即找到您的人生導師</RouterLink>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { RouterLink } from 'vue-router';
import swiper from '../components/SwiperComponent.vue'
export default {
  components: {
    swiper,
    RouterLink
  }
}
</script>
