<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="gray" dark>
          <v-toolbar-title>Exercise Type</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="equp" autocomplete="off">
            <v-text-field label="Exercise Type Name" v-model="ExerciseTypeName"></v-text-field>
            <br>
          </form>
          <br>
          <div class="error" v-html="error" /><br>
          <v-btn dark class="cyan" @click="add">Add</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
 </template>
<script>
import ExerciseTypesService from '@/services/ExerciseTypesService'
export default{
  data () {
    return {
      ExerciseTypeName: null,
      error: null
    }
  },
  methods: {
    async add () {
      try {
        await ExerciseTypesService.add({
          ExerciseTypeName: this.ExerciseTypeName
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error {
  color:white;
}

</style>
