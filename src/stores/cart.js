import router from '@/router'
import { defineStore } from "pinia";
import axios from "axios";
import Swal from 'sweetalert2'

const { VITE_PATH, VITE_URL } = import.meta.env


const cartStore = defineStore('cart', {
  state: () =>{
    return {
      carts: [],
      total: 0,
      final_total: 0,
      goCart: false
    }
  },
  actions: {
    getCartDataPinia () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
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
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          console.log(res)
          if(this.goCart === false){
            Swal.fire(`${res.data.message}`)
            this.getCartDataPinia()
          }else{
            this.goCart = false
            this.getCartDataPinia()
            router.push('/cart')
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
})

export default cartStore;