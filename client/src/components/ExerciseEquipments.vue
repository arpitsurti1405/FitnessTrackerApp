<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="gray" dark>
          <v-toolbar-title>Equipment Type</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="profile" autocomplete="off">
            <v-text-field label="Type" v-model="type"></v-text-field>
            <br>
          </form>
          <br>
          <div class="error" v-html="error" /><br>
          <v-btn dark class="cyan" @click="Add">Add</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
 </template>
<script>
import ExerciseEquipmentsService from '@/services/ExerciseEquipmentsService'
export default{
  data () {
    return {
      type: '',
      error: null
    }
  },
  methods: {
    async add () {
      try {
        const response = await ExerciseEquipmentsService.add({
          type: this.type
        })
        console.log(response)
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
