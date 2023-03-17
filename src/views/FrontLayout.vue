<template>
    <div class="container-fluid">
      <div class="border-bottom">
        <div class="container-xl">
        <div class="header row">
        <div class="d-flex justify-content-between py-4 m-0 px-0">
          <div>
            <RouterLink  to="/" @click="changeBtn()"><img h-24 src="../assets/images/正視心靈.png" alt=""></RouterLink>
          </div>
            <button type="button" class="btn btn-white d-md-none" @click="menuByn()">
              <span class="material-symbols-outlined">
              menu
            </span>
            </button>
          <div class="d-none d-md-block">
            <ul class="d-flex m-0 p-0 header-list">
            <li class="me-6"><RouterLink to="/articles">文章分享</RouterLink></li>
            <li class="me-6"><RouterLink to="/about">關於我們</RouterLink></li>
            <li class="me-6"><RouterLink to="/teachers">課程列表</RouterLink></li>
            <li><RouterLink to="/cart">收藏課程</RouterLink></li>
          </ul>
          </div>
        </div>
       </div>
        </div>
      </div>
      <div class="menu" :class="{ 'd-none': !menuContent }">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="text-center ps-0 pb-16">
              <RouterLink to="/"  @click="changeBtn()"><img h-24 src="../assets/images/正視心靈.png" alt=""></RouterLink>
            </div>
            <ul>
              <li class="fs-6 text-center mb-8" @click="changeBtn()"><RouterLink to="/articles">文章分享</RouterLink></li>
              <li class="fs-6 text-center mb-8"  @click="changeBtn()"><RouterLink to="/about">關於我們</RouterLink></li>
              <li class="fs-6 text-center mb-8"  @click="changeBtn()"><RouterLink to="/teachers">課程列表</RouterLink></li>
              <li class="fs-6 text-center mb-8"  @click="changeBtn()"><RouterLink to="/cart">收藏課程</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
        <div v-if="!menuContent">
          <RouterView />
        </div>
      <div class="container footer " v-if="!menuContent">
        <div class="row">
          <div class="text-center">
            <div class="mb-17"><img src="../assets/images/正視心靈.png" alt=""></div>
            <div class="d-flex justify-content-center mb-2">
              <div class="img-line"></div>
            </div>
            <ul class="fs-6 text-gray-04 mb-3">
              <li class="mb-1">客服信箱：ＸＸＸＸ＠gmail.com </li>
              <li>客服電話：0912345678</li>
            </ul>
            <p class="f-7 text-primary mb-8 text-center">正視心靈 © 2023 Copyright</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      menuContent: false
    }
  },
  methods: {
    menuByn () {
      this.menuContent = !this.menuContent
    },
    changeBtn () {
      this.menuContent = false
    }
  }
}
</script>