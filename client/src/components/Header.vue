<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
        <span class="home" @click="navigateTo({name:'root'})">
            Fitness Tracker
        </span>
    </v-toolbar-title>
    <v-toolbar-items>
       <v-btn flat v-if="$store.state.isUserLoggedIn" @click="navigateTo({name:'equipmentType'})">
        Equipments
       </v-btn>
        <v-btn flat v-if="$store.state.isUserLoggedIn" @click="navigateTo({name:'exerciseType'})">
        Exercise Type
       </v-btn>
       <v-btn flat v-if="$store.state.isUserLoggedIn" @click="navigateTo({name:'workoutType'})">
        Workout Type
       </v-btn>
        <v-btn flat v-if="$store.state.isUserLoggedIn" @click="navigateTo({name:'exercises'})">
        Exercises
       </v-btn>
        <v-btn flat v-if="$store.state.isUserLoggedIn" @click="navigateTo({name:'song'})">
        Friends
       </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat @click="navigateTo({name:'login'})">
            Login
        </v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat @click="navigateTo({name:'register'})">
            SignUp
        </v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" flat @click="navigateTo({name:'profile'})">
            My Profile
        </v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" flat @click="logout">
            Log Out
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
 </template>
<script>
export default{
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
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
