<template>
  <h1>這是後台</h1>
  <p>點選要進行的業務</p>
  <RouterLink to="/userorders">訂單管理</RouterLink> |
  <RouterLink to="/userprodeuts">產品管理</RouterLink> |
  <RouterLink to="/voucher">優惠券管理</RouterLink> |
  <RouterLink to="/article">文章列表</RouterLink> |
  <hr>
  <RouterView v-if="show" />
</template>

<script>

import { RouterView, RouterLink } from 'vue-router'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    checkLogin () {
      this.$http.post(`${VITE_URL}v2/api/user/check`)
        .then(() => {
          this.show = true
        })
        .catch(() => {
          alert('請重新登入')
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)ssozrToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  },
  components: {
    RouterView,
    RouterLink
  }
}
</script>
