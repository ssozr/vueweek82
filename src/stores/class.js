import router from '@/router'
import { defineStore } from "pinia";
import axios from "axios";
const { VITE_PATH, VITE_URL } = import.meta.env


const classStore = defineStore('class', {
  state: () =>{
    return {
      classDataPinia: []
    }
  },
  actions: {
    getClasstDataPinia (category, id) {
      axios.get(`${VITE_URL}v2/api/${VITE_PATH}/products/?category=${category}`)
      .then((res) => {
        this.classDataPinia = res.data.products
        router.push(`/class/${id}`)
      })
      .catch((err) => {
        alert(err.data.message).error(err)
      })
    },
  },
})

export default classStore;