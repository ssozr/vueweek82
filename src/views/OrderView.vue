<style>
.order-progress {
  height: 90px;
}
.order-progress li {
  list-style-type: none;
  float:left;
  width: 33.3%;
  height: 50px;
  position:relative;
  text-align:center;
}

.order-progress li:before {
  content:"";
  counter-increment: step;
  width:30px;
  height:30px;
  line-height:30px;
  border:1px solid #ddd;
  display:block;
  text-align:center;
  margin:0 auto 10px auto;
  border-radius:50%;
  background-color:#fff;
}

.order-progress li:after {
  content:"";
  border:1px solid #ddd;
  position: absolute;
  width:100%;
  height:1px;
  background-color:#ddd;
  top:15px;
  left:-50%;
  z-index:-1;
}

.order-progress li:first-child:after{
  content:none;
}

.order-progress li.active {
  color:#F79E1B;
}

.order-progress li.active:before {
  border-color:#F79E1B;
}

.order-progress li.active:after {
  background-color:#F79E1B;
}

</style>

<template>
  <div class="container-fuli">
    <div class="row">
      <ul class="order-progress pt-4"> <!-- 流程 -->
        <li class="active">訂單確認</li>
        <li :class="{active:num >= 2}"> 填寫資料</li>
        <li :class="{active:num >= 3}">付款完成</li>
      </ul>
    </div>
    <div class="container mb-15">
      <div class="row"> 
        <v-form v-slot="{ errors }"  @submit="onSubmit()" >
          <div class="row" v-if="num === 1">  <!-- 購物車資訊 -->
            <h2 class="text-center">訂單確認</h2>
            <div class="row">
              <table class="table align-middle">
                <thead>
                  <tr class="text-center">
                    <th scope="col">課程名稱</th>
                    <th scope="col">授課老師</th>
                    <th scope="col">總課程數</th>
                    <th scope="col">購買數量</th>
                    <th scope="col">價格</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in cartData.carts" :key="i" class="text-center">
                    <td>
                      <h2>{{ item.product.title }}</h2>
                    </td>
                    <td>{{ item.product.unit }}</td>
                    <td >{{ item.product.origin_price * item.qty}}堂</td>
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
                    <td></td>
                    <td class="align-bottom"><h2 class="border-bottom border-primary border-3 mb-0">總金額:NT <span class="ms-1">{{ cartData.total }}</span></h2></td>
                  </tr>
                </tbody>
              </table>
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
        </div>  
        <div class="row" v-if="num ===2"> <!-- 資料填寫 -->
          <div class="mb-3 col-md-6"> <!-- 姓名 -->
            <label for="name" class="form-label">姓名: <span v-if="errors['姓名']" class="text-danger">{{ errors['姓名'] }}</span></label>
            <v-field id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入 姓名" rules="required"
              v-model="userData.user.name"
              @click="disabledBtn()">
            </v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3 col-md-6"> <!-- 信箱 -->
            <label for="email" class="form-label">信箱: <span v-if="errors['email']" class="text-danger">{{ errors.email }}</span></label>
            <v-field id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email" rules="email|required"
              v-model="userData.user.email">
            </v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3 col-md-6"> <!-- 電話 -->
            <label for="phone" class="form-label">手機號碼: <span v-if="errors['電話']" class="text-danger">{{ errors['電話'] }}</span></label>
            <v-field id="phone"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="0912345678"
              :rules="isPhone"
              v-model="userData.user.phone">
            </v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3 col-md-6"> <!-- 付款方式 -->
            <label for="payment" class="form-label">付款方式: <span v-if="errors['付款方式']" class="text-danger">{{ errors['付款方式'] }}</span></label>
            <v-field id="phone"
              name="付款方式"
              type="select"
              class="form-control"
              :class="{ 'is-invalid': errors['付款方式'] }"
              placeholder="請選擇" rules="required"
              v-model="paymentMethod"> 
              <select class="form-select" id="payment" v-model="paymentMethod">
                <option value="信用卡">信用卡</option>
                <option value="ATM">ATM</option>
                <option value="電信繳費">電信繳費</option>
              </select>
            </v-field>
            <error-message name="付款方式" class="invalid-feedback"></error-message>
          </div>
          <div class="input-group mb-3"> <!-- 地址 -->
            <label style="width: 100%;" for="地址" class="form-label">地址: <span v-if="errors['地址']" class="text-danger">{{ errors.地址 }}</span></label>
            <select class="btn btn-outline-secondary" @change="city" v-model="address.city"> <!-- 縣市 -->
              <option value="" v-if="!address.city">請選擇</option>
              <option :value="address.CityName" v-for="(address, index) in addressData" :key="index">{{ address.CityName }}</option>
            </select>
            <select class="btn btn-outline-secondary" :disabled="!address.city" v-model="address.areaName"> <!-- 縣市 -->
              <option value=""  v-if="!address.areaName">請選擇</option>
              <option :value="areaName.AreaName" v-for="(areaName, index) in address.areaList" :key="index">{{ areaName.AreaName }}</option>
            </select>
            <v-field id="地址"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入 路段 門牌號碼" rules="required"
              v-model="address.content"
              :disabled="!address.areaName">
            </v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="input-group  mb-3"><!-- 留言 -->
            <span class="input-group-text">留言區</span>
            <textarea class="form-control" aria-label="With textarea" placeholder="可以說說自己，或是想告訴我們的" v-model="userData.message"  ></textarea>
          </div>
          <div class="col-md-8">
            <label for="coupon" class="mb-3">優惠券:</label>
            <div class="input-group">
              <input id="coupon" type="text" class="form-control" placeholder="輸入優惠券" v-model="coupon.couponNum" :disabled="coupon.couponJudge" >
              <button class="btn btn-outline-secondary" type="button" @click="couponBtn()" :disabled="coupon.couponJudge"><span v-if="coupon.couponJudge">已套用</span><span v-else>套用</span></button>
              <button class="btn btn-outline-secondary" type="button" @click="couponBtnDel()" v-if="coupon.couponJudge">重設優惠券</button>
            </div>
          </div>
          <div class="text-end d-flex justify-content-center col-md-4">
            <div class="d-flex align-items-end">
              <h2 v-if="!coupon.couponJudge" class="border-bottom border-primary border-3 mb-0">總金額:NT <span class="ms-1">{{ cartData.total }}</span></h2>
              <h2 v-else class="border-bottom border-primary border-3 mb-0">總金額:NT <span class="ms-1">{{ cartData.final_total }}</span></h2>
            </div>
          </div>
        </div>
        <div class="text-center mt-6">
          <button class="btn btn-primary rounded-pill me-3" type="button" v-if="num === 2" @click="preBtn">上一步</button>
          <button class="btn btn-primary rounded-pill me-3" type="button" v-if="num === 1" @click="nextBtn">下一步</button>
          <button class="btn btn-primary rounded-pill me-3" type="submit" v-if="num === 2"  :disabled="errors['email','電話','地址','付款方式'] || disabled">送出資料</button>
        </div>
        </v-form>
        <div class="row" v-if="num === 3">
          <h2 class="text-center ">課程購買完成</h2>
          <div class="d-flex justify-content-center">
            <ul>
              <li>客服人員將會在三天內與您電話連絡</li>
              <li>若有任何問題，皆可連絡客服</li>
            </ul>
          </div>
          <RouterLink to="/">回到首頁</RouterLink>
        </div>
      </div>
      <!-- 付款 Modal -->
      <div class="modal" tabindex="-1" id="payModal" ref="payModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">金額為: {{ cartData.final_total }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h3>資料傳送完成，繼續付款？</h3>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="pay()">立即支付</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Modal } from 'bootstrap'
import Swal from 'sweetalert2'
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
    data () {
    return {
      paymentOptions:['ATM','信用卡','電信支付'],
      num:1,
      cartData: [], /* 購物車資料 */
      dalModal: '', /* 刪除訂單Modal */
      delData: {}, /* 刪除訂單資烙 */
      delId: '', /* 刪除訂單ID */
      disabled: true,
      addressData: '', /* 縣市區域資料 */
      address: { /* 地址填寫 */
        city: '',
        areaName: '',
        content: '',
        index: '',
        areaList: [],
      },
      paymentMethod: '', /* 付款方式 */
      userData: { /* 訂單客戶資料 */
        user: {
          name: '',
          email: '',
          address: '',
          phone: ''
        },
        message:'',
      },
      coupon: { /* 優惠券 */
        couponJudge: false,/* 優惠券判斷 */
        couponNum: '' /* 券號 */
      },
      orderId: '', /* 訂單ID */
      payModal: "",
    }
  },
  components: {
    RouterLink
  },
  methods: {
    nextBtn(){ /* 流程下一步 */
      this.num ++
    },
    preBtn(){ /* 流程上一步 */
      this.num--
    },
    getCartData () { /* 獲取購物車資料 */
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openDelModal (item) { /* 開啟刪除Modal */
      this.deldata = {}
      this.delModal.show()
      this.delId = item.id
      this.delData = item.product
    },
    delCart () { /* 刪除購物車資料 */
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
    },
    changeQty (num, id) { /* 更改購物車產品數量 */
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
    },
    getAddressData () { /* 獲取縣市區域資料 */
      this.$http.get(`https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json`)
        .then((res) => {
          this.addressData = res.data
          console.log(res)
          console.log(this.addressData)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    disabledBtn () {
      this.disabled = false
    },
    city () { /* 地址填寫市區selec */
      console.log(this.address.city)
      this.address.areaName = ''
      const index = this.addressData.findIndex(item => item.CityName === this.address.city);
      this.address.index = index
      this.address.areaList = { ...this.addressData[index].AreaList }
    },
    isPhone (value) { /* 手機號碼判斷 */
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    couponBtn () { /* 優惠券使用API */
      const data = {
        code: this.coupon.couponNum
      }
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`,{ data })
        .then((res) => {
          console.log(res)
          this.coupon.couponJudge = res.data.success
          Swal.fire(`${res.data.message}`)
          
        })
        .catch((err) => {
          console.log(err)
        })
    },
    couponBtnDel () {
      this.coupon.couponJudge = false
    },
    onSubmit() {
      this.userData.user.address = `${this.address.city}${this.address.areaName}${this.address.content}` /* 組合地址資料 */
      const data = {
        user: {
          name: this.userData.user.name,
          email: this.userData.user.email,
          tel: this.userData.user.phone,
          address: this.userData.user.address
        },
        message: this.userData.message
      }
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data })
        .then((res) => {
          console.log(res)
          this.orderId = res.data.orderId
          this.payModal.show()
        })
        .catch((err) =>{
          console.log(err)
        })
    },
    pay () {
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/pay/${this.orderId}`)
        .then((res) => {
          console.log(res)
          this.payModal.hide()
          Swal.fire(`${res.data.message}`)
          this.num++
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCartData() /* 獲取購物車資料 */
    this.delModal = new Modal(this.$refs.delModal) /* Modal */
    this.getAddressData() /* 獲取縣市區域資料 */
    this.payModal = new Modal(this.$refs.payModal)
  }
}
</script>
