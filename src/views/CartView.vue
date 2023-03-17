<template>
  <div class="container p-0">
    <div class="row">
      <div v-if="cartData.total === 0" class="text-center my-30">
        <div class="d-flex justify-content-center">
          <h2 class="mb-10  border-bottom border-3 border-primary">尚未收錄課程</h2>
        </div>
        <RouterLink to="teachers" class="btn btn-primary">立即前往課程列表</RouterLink>
      </div>
      <table v-else class="table align-middle">
      <thead>
        <tr class="text-center">
          <th scope="col">課程名稱</th>
          <th scope="col">授課老師</th>
          <th scope="col">總課程數</th>
          <th scope="col">購買數量</th>
          <th scope="col">價格</th>
          <th scope="col"><button type="button" class="btn btn-primary rounded-pill" @click="openDelAllModal()">清空購物車</button></th>
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
          <td>{{ item.total }}</td>
          <td><button type="button" class="btn btn-primary rounded-pill" @click=" openDelModal(item)">刪除</button></td>
        </tr>
        <tr class="text-center">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="align-bottom"><h2 class="border-bottom border-primary border-3 mb-0">總金額:NT <span class="ms-1">{{ cartData.total }}</span></h2></td>
          <td> <RouterLink to="/Order"><button type="button" class="btn btn-primary fs-3 ">結帳</button></RouterLink></td>
        </tr>
      </tbody>
      </table>
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
            <p>確定移出購物車?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="delCart(delData.id)">確認移出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env
import { RouterLink } from 'vue-router'
export default {
  data () {
    return {
      cartData: [],
      dalModal: '',
      delData: {},
      delId: '',
      disabled: false,
    }
  },
  components: {
    RouterLink,
  },
  methods: {
    getCartData () {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          console.log(res)
          this.cartData = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openDelModal (item) {
      this.deldata = {}
      this.delModal.show()
      this.delId = item.id
      this.delData = item.product
      console.log(this.delData)
    },
    openDelAllModal () {
      this.delData = {}
      this.delId = ""
      this.delData.title = "全部商品"
      this.delModal.show()
    },
    delCart () {
      if (this.delId) {
        this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${this.delId}`)
        .then((res) => {
          console.log(res)
          this.delData = {}
          this.delId = ""
          this.delModal.hide()
          this.getCartData()
          Swal.fire(`${res.data.message}`)
        })
        .catch((err) => {
          console.log(err)
        })
      }else{
        this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then((res) => {
          console.log(res)
          this.delData = {}
          this.delId = ""
          this.delModal.hide()
          this.getCartData()
          Swal.fire(`${res.data.message}`)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    changeQty (num, id) {
      console.log(num, id)
      this.disabled = true
      const data = {
        product_id:id,
        qty:num
      }
      this.$http.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`,{ data })
        .then((res) => {
          console.log(res)
          Swal.fire(`${res.data.message}`)
          this.disabled = false
          this.getCartData()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCartData()
    this.delModal = new Modal(this.$refs.delModal)
  }
}
</script>
