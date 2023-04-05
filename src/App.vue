<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted () {
    AOS.init()
  }
}
</script>

<style lang="scss">

</style>
