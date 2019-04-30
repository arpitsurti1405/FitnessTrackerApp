import VuexDropdown from 'vuex-dropdown';
<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="gray" dark>
          <v-toolbar-title>Exercises</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="equp" autocomplete="off">
            <VuexDropdown
  v-on:onSelect="handleChangedropdown($event)"
  v-bind:options="options"
  v-bind:selected="selected"
  v-bind:classNames="['wrapper']"
  />
  <br>
            <v-text-field label="Exercise Name" v-model="ExerciseName"></v-text-field>
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
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/VuexDropdown/dist/vuex-dropdown.min.js"></script>
<script>
import ExercisesService from '@/services/ExercisesService'
export default{
  data () {
    return {
      ExerciseTypeName: null,
      options: [
        {
          label: 'Heck',
          value: 'Heck'
        },
        {
          label: 'Jane',
          value: 'Heck'
        }
      ],
      error: null
    }
  },
  methods: {
    async add () {
      try {
        await ExercisesService.add({
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
