<template>
  <div class="home">
    <div class="uk-child-width-1-4@s" uk-grid>
      <div>
          <div class="uk-height-1-1 uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle uk-text-capitalize">Weddings</div>
      </div>
      <div>
          <div class="uk-height-1-1 uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle uk-text-capitalize">Food</div>
      </div>
      <div>
          <div class="uk-height-1-1 uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle uk-text-capitalize">Artwork</div>
      </div>
      <div>
          <div class="uk-height-1-1 uk-card uk-card-default uk-card-body uk-flex uk-flex-center uk-flex-middle uk-text-capitalize">Portfolio</div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'EXAMPLE'
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
