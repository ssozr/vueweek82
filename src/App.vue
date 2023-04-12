<template>
  <div>
    <RouterView/>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RouterView } from 'vue-router'

export default {
  mounted () {
    AOS.init()
  },
  components: {
    RouterView
  }
}
</script>

<style lang="scss">

</style>
