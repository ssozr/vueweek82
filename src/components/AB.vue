<template>
    <v-form v-slot="{ errors }" @submit="onSubmit" >
        <v-field
  id="email"
  name="email"
  type="email"
  class="form-control"
  :class="{ 'is-invalid': errors['email'] }"
  placeholder="請輸入 Email" rules="email|required"
  v-model="user.email"
></v-field>
<error-message name="email" class="invalid-feedback"></error-message></v-form>
  </template>
  
  <script>
 export default{
  data () {
    return {
      user: {
        email: '',
      }
    }  
  }
 }
</script>