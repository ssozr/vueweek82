

<template>
  <div class="container mb-15 teacher">
    <div class="row">
      <div class="text-center p-0 mb-10">
        <img :src="classData.imagesUrl" class="imgI" alt="">
      </div>
      <div class="mb-10">
        <h2 class="border-bottom border-primary border-3 pb-3">{{ classData.title }} <span class="fs-6 mt-lg-0 mt-3 ps-lg-5 d-inline-block">{{ classData.description }}</span></h2>
      </div>
      <div class="row flex-lg-row-reverse">
        <div class="col-lg-4 text-center">
          <img :src="classData.imageUrl" alt="" class="card-img rounded-circle mb-4">
          <h3 class="mb-6 mb-lg-0">授課老師:{{ classData.unit }}</h3>
        </div>
        <div class="col-lg-8 d-flex flex-column justify-content-between">
          <p class="fs-4 mb-lg-15 mb-8">{{ classData.content }}</p>
          <div class="d-lg-flex text-lg-start text-center justify-content-between  align-items-end">
            <ul class="p-0 m-0">
              <li><p class="fs-4">課程堂數:<span class="ms-4">{{ classData.origin_price }}堂</span></p></li>
              <li><p class="fs-4 m-0">課程總額:<span class="ms-4">NT${{ classData.price }}</span></p></li>
            </ul>
            <div class="d-lg-flex mt-3">
              <button type="button" class="btn btn-primary" @click="addCart(classData)">加入購物車</button>
              <button to="/cart" type="button" class="btn btn-primary ms-6" @click="changeGoCart(classData)">立即上課</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="my-15 my-md-30 container">
    <h2 class="border-bottom border-primary border-3 pb-3">相關課程</h2>
    <SwiperClassVue
    :other-class-data="otherClassData"></SwiperClassVue>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import cartStore from '@/stores/cart';
import { mapActions } from 'pinia'
import SwiperClassVue from '@/components/SwiperClass.vue'
const { VITE_PATH, VITE_URL} = import.meta.env
export default{
  data () {
    return {
      classData: {},
      otherClassData: [],
      id: '',
      goCart: false,
      category: ''
    }
  },
  components: {
    SwiperClassVue
  },
  methods: {
    getClassData () {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${this.id}`)
        .then((res) => {
          console.log(res)
          this.classData = res.data.product
          this.category = res.data.product.category
          this.getOtherClassData()
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    getOtherClassData () {
      console.log(12132)
      this.$http.get(`${VITE_URL}v2/api/${VITE_PATH}/products/?category=${this.category}`)
      .then((res) => {
        this.otherClassData = res.data.products
      })
      .catch((err) => {
        alert(err.data.message).error(err)
      })
    },
    ...mapActions(cartStore, ['addCart']),
    ...mapActions(cartStore, ['changeGoCart'])
    
    
  },
  mounted () {
    const { id } = this.$route.params
    this.id = id
    this.getClassData()
  }
}
</script>
