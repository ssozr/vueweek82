<template>
  <div class="container" data-aos="fade-right">
    <div class="row justify-content-center">
      <div v-if="cartData.total === 0" class="text-center my-30">
        <div class="d-flex justify-content-center">
          <h2 class="mb-10  border-bottom border-3 border-primary">尚未收錄課程</h2>
        </div>
        <RouterLink to="teachers" class="btn btn-primary">立即前往課程列表</RouterLink>
      </div>
      <div v-else class="table-wrapper d-lg-block d-none">
        <table class="table align-middle">
          <thead>
            <tr class="text-center">
              <th >課程名稱</th>
              <th >授課老師</th>
              <th >總課程數</th>
              <th >購買數量</th>
              <th >價格</th>
              <th><button type="button" class="btn btn-primary rounded-pill" @click="openDelAllModal()">清空購物車</button></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in cartData.carts" :key="i" class="text-center">
              <td>
                <RouterLink  :to="`/class/${item.product.id}`"><h2 class="fs-5">{{ item.product.title }}</h2></RouterLink>
              </td>
              <!-- <td>{{ item.product.title }}</td> -->
              <td>{{ item.product.unit }}</td>
              <td>{{ item.product.origin_price * item.qty}}堂</td>
              <td>
                <div class="dropdown" >
                  <button :disabled="disabled" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ item.qty }} 
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                    <li v-for="(num, i) in 20" :key="i"><a  @click="changeQty(num,item.id)" class="dropdown-item">{{ num }}</a></li>
                  </ul>
                </div>
              </td>
              <td>{{ formatNumber(item.total) }}</td>
              <td><button type="button" class="btn btn-primary rounded-pill" @click=" openDelModal(item)">刪除</button></td>
            </tr>
            <tr class="text-center">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="align-bottom"><h2 class="border-bottom border-primary border-3 mb-0">總金額:NT <span class="ms-1">{{ formatNumber(cartData.total) }}</span></h2></td>
              <td> <RouterLink to="/Order"><button type="button" class="btn btn-primary ">結帳</button></RouterLink></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="cartData.total !== 0"  class="row d-lg-none my-15">
        <ul  v-for="(item, i) in cartData.carts" :key="i"  class="border-bottom pb-3 border-primary">
          <li class="">
            <RouterLink  :to="`/class/${item.product.id}`"><h2 class="fs-5">{{ item.product.title }}</h2></RouterLink>
            <div class="d-flex align-items-center justify-content-between">
              <div>課程總價格:{{ formatNumber(item.total) }}</div>
              <button type="button" class="btn btn-primary" @click="openDataModal(item)">詳細資料</button>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-between">
          <h2 class="border-bottom border-primary border-3 mb-0 fs-4">
          總金額:NT <span class="ms-1">{{ formatNumber(cartData.total) }}</span>
        </h2>
        <RouterLink to="/Order"><button type="button" class="btn btn-primary ">結帳</button></RouterLink>
        </div>
      </div>
    <div>
        
      </div>
    </div>
    <!-- Modal -->
    <div class="modal" tabindex="-1" ref="delModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 v-if="delData.title" class="modal-title">{{ delData.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>確定移出此課程?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="delCart(delData.id)">確認移出</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="modal" tabindex="-1" ref="dataModal">
      <div class="modal-dialog">
        <div class="modal-content" v-if="dataModalJudge">
          <div class="modal-header">
            <h5 class="modal-title">課程名稱: <span class="border-bottom border-3 border-primary">{{ productData.product.title }}</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="p-0">
              <li class=" mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>總堂數:{{ productData.product.origin_price * productData.qty}}堂</div>
                  <div>授課老師: {{ productData.product.unit }}</div>
                </div>
              </li>
              <li class="d-flex align-items-center justify-content-between">
                <div>課程總價格:{{ formatNumber(productData.total) }}</div>
                <div class="dropdown" >
                  購買次數:
                  <button :disabled="disabled" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ productData.qty }} 
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                    <li v-for="(num, i) in 20" :key="i"><a  @click="changeQty(num,productData.id)" class="dropdown-item">{{ num }}</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="delCart(productData)">確認移出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cart';
import { Modal } from 'bootstrap'
import { mapActions } from 'pinia';
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env
import { RouterLink } from 'vue-router'
export default {
  data () {
    return {
      cartData: [],
      dalModal: '',
      dataModal: '',
      dataModalJudge: false,
      delData: {},
      delId: '',
      disabled: false,
      productData: {}
    }
  },
  components: {
    RouterLink,
  },
  methods: {
    getCartData () {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    openDelModal (item) {
      this.deldata = {}
      this.delModal.show()
      this.delId = item.id
      this.delData = item.product
    },
    openDelAllModal () {
      this.delData = {}
      this.delId = ""
      this.delData.title = "全部商品"
      this.delModal.show()
    },
    openDataModal (item) {
      this.dataModalJudge = true
      this.productData = { ...item}
      this.delId = item.id
      this.dataModal.show()
    },
    delCart () {
      if (this.delId) {
        this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${this.delId}`)
        .then((res) => {
          this.delData = {}
          this.delId = ""
          this.delModal.hide()
          this.getCartData()
          this.dataModal.hide()
          Swal.fire(`${res.data.message}`)
          this.getCartDataPinia()
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
      }else{
        this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then((res) => {
          this.delData = {}
          this.delId = ""
          this.delModal.hide()
          this.getCartData()
          this.getCartDataPinia()
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
      }
    },
    changeQty (num, id) {
      this.disabled = true
      const data = {
        product_id:id,
        qty:num
      }
      this.$http.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`,{ data })
        .then((res) => {
          Swal.fire(`${res.data.message}`)
          this.disabled = false
          this.getCartData()
          this.dataModal.hide()
        })
        .catch((err) => {
          alert(err.data.message).error(err)
        })
    },
    formatNumber(number) {
      if(number){
        return number.toLocaleString();
      }
    },
    ...mapActions(cartStore, ['getCartDataPinia'])
  },
  mounted () {
    this.getCartData()
    this.delModal = new Modal(this.$refs.delModal)
    this.dataModal = new Modal(this.$refs.dataModal)
  }
}
</script>
