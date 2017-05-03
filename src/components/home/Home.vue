<template>
  <div class="home uk-width-1-1 uk-height-1-1">
    <div class="uk-child-width-1-4@s uk-height-1-1 uk-flex">
      <a href="#" class="uk-height-1-1 uk-flex uk-flex-center uk-flex-middle uk-inline-clip uk-transition-toggle weddings">
        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay">
            <p class="uk-h3 uk-text-uppercase uk-margin-remove">Weddings</p>
        </div>
      </a>
      <a href="#" class="uk-height-1-1 uk-flex uk-flex-center uk-flex-middle uk-inline-clip uk-transition-toggle food">
        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay">
          <p class="uk-h3 uk-text-uppercase uk-margin-remove uk-text-uppercase">Food</p>
        </div>
      </a>
      <a href="#" class="uk-height-1-1 uk-flex uk-flex-center uk-flex-middle uk-inline-clip uk-transition-toggle artwork">
        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay">
          <p class="uk-h3 uk-text-uppercase uk-margin-remove uk-text-uppercase">Artwork</p>
        </div>
        </a>
      <a href="#" class="uk-background-cover uk-height-1-1 uk-flex uk-flex-center uk-flex-middle uk-inline-clip uk-transition-toggle portfolio">
        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
          <p class="uk-h3 uk-text-uppercase uk-margin-remove uk-text-uppercase">Portfolio</p>
        </div>
      </a>
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
<style lang="scss" scoped>
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

a{
  p{
    // font-family: 'TravelingTypewriter';
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.75); 
  }
  
  &:hover{
    text-decoration: none;
  }
}

.portfolio{
  // background-color: beige;
  background-image: url('./portfolio.jpg');
  // background-image: require('./portfolio.jpg');
}
</style>
