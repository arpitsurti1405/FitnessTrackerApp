<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="gray" dark>
          <v-toolbar-title>Equipments</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="equp" autocomplete="off">
            <v-text-field label="Equipment Name" v-model="EquipmentName"></v-text-field>
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
import ExerciseEquipmentsService from '@/services/ExerciseEquipmentsService'
export default{
  data () {
    return {
      EquipmentName: null,
      error: null
    }
  },
  methods: {
    async add () {
      try {
        await ExerciseEquipmentsService.add({
          EquipmentName: this.EquipmentName
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
