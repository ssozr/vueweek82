<style>

.card-img {
  height: 268px;
  width: 268px;
  object-fit: cover;
  object-position: center;
}
.product {
  border:1px solid #F8C343;
}
.product:hover {
  border:1px solid #F79E1B;
  
}


</style>

<template>
  <div class="container-fluid">
    <div class="container py-15 px-0">
      <div class="mb-4">
        <select class="btn btn-primary" @change="changeClass">
          <option value="" selected>全部課程</option>
          <option value="自我成長">自我成長</option>
          <option value="感情婚姻">感情婚姻</option>
          <option value="人際關係">人際關係</option>
          <option value="諮商談話">諮商談話</option>
        </select>
      </div>
      <div class="row">
        <RouterLink :to="`/class/${product.id}`" v-for="(product, i) in classData" :key="i" class="col-lg-4 col-md-6 mb-8 border-0 card-group justify-content-center product ">
            <div class="card h-100 bg-primary border-0 mt-4">
              <div class="d-flex justify-content-center" >
                <div class="d-flex justify-content-center align-items-center border rounded-circle border-secondary" style="width: 308px height: 308px;">
                  <img :src="product.imageUrl" class="card-img-top rounded-circle card-img p-5" alt="...">
                </div>
              </div>
              <div class="card-body text-center p-0 mt-5">
                <h2 class="card-title fs-4">{{ product.title}}</h2>
                <div class="mt-8 mb-6">
                  <p class="card-text fs-6">{{ product.description }}</p>
                </div>
              </div>
              <div class="card-footer text-center mb-4 bg-secondary text-white">
                詳細介紹
              </div>
            </div>
        </RouterLink>
      </div>
        <pagination :class="{ 'd-none': pagination.total_pages === 1 }"
        :pages="pagination" 
        @change-page="changePage"
        ></pagination>
    </div>
  </div>
</template>

<script>
const {VITE_PATH, VITE_URL} = import.meta.env
import pagination from '../components/PaginationView.vue'
import { RouterLink } from 'vue-router'
export default {
  data () {
    return {
      filterValue: '',
      dropdownText: '課程篩選',
      classData: [],
      pagination: {}
    }
  },
  components: {
    pagination,
    RouterLink
  },
  methods: {
    getClassData (page = 1) {
    this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)
      .then((res) => {
        console.log(res.data.products)
        this.classData = res.data.products
        this.pagination = res.data.pagination
      })
      .catch((err) => {
        console.log(err)
      })
    },
    changePage (page) {
      this.getClassData(page)
    },
    changeClass (category) {
      console.log(category.target.value)
      const a = category.target.value
      this.$http.get(`${VITE_URL}v2/api/${VITE_PATH}/products/?category=${a}`)
        .then((res) => {
          console.log(res)
          this.classData = res.data.products
          this.pagination = res.data.pagination
          console.log(this.pagination.total_pages)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getClassData()
  }
}
</script>
