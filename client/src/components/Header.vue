<template>
  <v-toolbar fixed class="blue">
    <v-toolbar-title class="mr-4">
        <span class="home" @click="navigateTo({name:'root'})">
            Fitness Tracker
        </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items>
          <v-btn v-if="$store.state.isUserLoggedIn" flat @click="navigateTo({name:'login'})">
            Login
        </v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" flat @click="navigateTo({name:'register'})">
            SignUp
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
 </template>
<script>
export default{
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.home{
    cursor:pointer;
}

.home:hover{
    color: #FFF;
}
</style>
