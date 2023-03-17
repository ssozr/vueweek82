

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
              <button type="button" class="btn btn-primary" @click="addCart(classData)">收藏課程</button>
              <button to="/cart" type="button" class="btn btn-primary ms-6" @click="changeGoCart(classData)">立即上課</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_PATH, VITE_URL} = import.meta.env
export default{
  data () {
    return {
      classData: {},
      id: '',
      goCart: false,
    }
  },
  components: {
  },
  methods: {
    getClassData () {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${this.id}`)
        .then((res) => {
          console.log(res)
          this.classData = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addCart (item) {
      const data = {
        product_id: item.id,
        qty: 1
      }
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          console.log(res)
          if(this.goCart === false){
            Swal.fire(`${res.data.message}`)
          }else{
            this.goCart = false
            this.$router.push('/cart')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeGoCart (item) {
      this.goCart = true
      this.addCart(item)
    }
    
  },
  mounted () {
    const { id } = this.$route.params
    this.id = id
    this.getClassData()
  }
}
</script>
