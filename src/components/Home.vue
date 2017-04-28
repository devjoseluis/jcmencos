<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  

  <div class="uk-container">
      <div class="uk-card uk-card-body uk-card-primary">
          <h3 class="uk-card-title">Example headline</h3>
          <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>Hover</button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'JC Mencos Photography'
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
