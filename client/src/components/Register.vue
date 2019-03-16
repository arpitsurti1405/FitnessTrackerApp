<template>
  <div>
    <h1>Registration</h1>
    Email: <input type="email" name="email" placeholder="Email" v-model="email" /><br/><br/>
    Password: <input type="password" name="password" placeholder="Password" v-model="password" /><br/><br/>
    <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default{
  data(){
    return{
      email:  '',
      password: ''
    }
  },
  methods:{
    async register (){
     await AuthenticationService.register({
       email:this.email,
       password:this.password
     })
    }
  }
}
</script>
<style>
</style>
