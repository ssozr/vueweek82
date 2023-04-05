<template>
  <div class="container mb-15 teacher" data-aos="fade-right">
    <div class="row">
      <div class="text-center p-0 mb-10 col-8 offset-2">
        <img :src="classData.imagesUrl" class="imgI" alt="課程示意圖">
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
              <li><p class="fs-4 m-0">課程總額:<span class="ms-4">NT${{ formatNumber(classData.price) }}</span></p></li>
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
  <div class="my-15 my-md-30 container" data-aos="fade-right">
    <h2 class="border-bottom border-primary border-3 pb-3">相關課程</h2>
    <SwiperClassVue
    :other-class-data="otherClassData"></SwiperClassVue>
  </div>

  <div class="modal" tabindex="-1" ref="addModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cart';
import { mapActions } from 'pinia'
import SwiperClassVue from '@/components/SwiperClass.vue'
import { Modal } from 'bootstrap'
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
          this.classData = res.data.product
          this.category = res.data.product.category
          this.getOtherClassData()
        })
        .catch(() => {
        })
    },
    getOtherClassData () {
      this.$http.get(`${VITE_URL}v2/api/${VITE_PATH}/products/?category=${this.category}`)
      .then((res) => {
        this.otherClassData = res.data.products
        this.filteredItems()
      })
      .catch(() => {
      })
    },
    ...mapActions(cartStore, ['addCart']),
    ...mapActions(cartStore, ['changeGoCart']),
    formatNumber(number) {
      if(number){
        return number.toLocaleString();
      }
    },
    filteredItems () {
      let data = []
      const id = this.id
      this.otherClassData.forEach(function(item) {
        if (item.id !== id) {
          data.push(item)
        }
      });
      this.otherClassData = data
    },
  },
  mounted () {
    const { id } = this.$route.params
    this.id = id
    this.getClassData()
  }
}
</script>