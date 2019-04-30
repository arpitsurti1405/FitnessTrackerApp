<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="gray" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="registration" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
            <br>
            <v-text-field label="Age" v-model="age"></v-text-field>
            <br>
            <v-text-field label="Weight" v-model="weight"></v-text-field>
            <br>
            <v-text-field label="Height" v-model="height"></v-text-field>
            <br>
          </form>
          <br>
          <div class="error" v-html="error" /><br>
          <v-btn dark class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
 </template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default{
  data () {
    return {
      email: '',
      password: '',
      age: '',
      height: '',
      weight: '',
      name: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          age: this.age,
          height: this.height,
          weight: this.weight,
          name: this.name
        })
        this.$router.push({ name: 'login' })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error{
  color:white;
}

</style>
