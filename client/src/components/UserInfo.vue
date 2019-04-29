<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Profile</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="profile" autocomplete="off">
            <v-text-field label="Name" v-model="name"></v-text-field>
            <br>
            <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
            <br>
            <v-text-field label="Age" v-model="age"></v-text-field>
            <br>
            <v-text-field label="Weight" type="weight" v-model="weight"></v-text-field>
            <br>
            <v-text-field label="Height" type="height" v-model="height"></v-text-field>
            <br>
          </form>
          <br>
          <div class="error" v-html="error" /><br>
          <v-btn dark class="cyan" @click="register">Update</v-btn>
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
    async update () {
      try {
        const response = await AuthenticationService.updateUser({
          password: this.password,
          age: this.age,
          height: this.height,
          weight: this.weight,
          name: this.name
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error {
  color:red;
}

</style>
