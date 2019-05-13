<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Suggestive Search</h2>
    <autocomplete
  ref="autocomplete"
  placeholder="Search Distribution Groups"
  :source="itemList"
  input-class="form-control"
  results-property="data"
  @selected="addDistributionGroup">
</autocomplete>
  </div>
</template>
<script>
import Autocomplete from 'vuejs-auto-complete'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Fitness Tracker App',
      itemList: [{name: 'Arpit'}, {name: 'Doe'}, {name: 'Eric'}, {name: 'Test'}, {name: 'ABC'}],
      searchInput: ''
    }
  },
  components: {
    Autocomplete
  },
  methods: {
    distributionGroupsEndpoint (input) {
      return process.env.API + '/distribution/search?query=' + input
    },
    addDistributionGroup (group) {
      this.group = group
      // access the autocomplete component methods from the parent
      //  this.$refs.autocomplete.clear()
    },
    formattedDisplay (result) {
      return result.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
