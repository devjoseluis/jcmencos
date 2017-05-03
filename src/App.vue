<template>
      <div id="app" >
        <navigation></navigation>
        <div class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center" uk-height-viewport="offset-top: true; offset-bottom: true">
            <div class="uk-width-1-1 uk-height-1-1 uk-container">
                  <router-view></router-view>
            </div>
        </div>
        <div class="uk-section-small">
            <div class="uk-container uk-flex uk-text-center uk-position-relative">
                <span class="uk-flex-inline uk-flex-auto uk-flex-left">Copyright © jcmencos photography 2016.  All rights reserved.</span>
                <ul class="uk-subnav uk-flex-auto uk-flex-inline uk-flex-right uk-margin-remove-top" uk-margin>
                    <li>
                      <a href="#"><span class="uk-margin-small-right" uk-icon="icon: phone"></span>5708 1883</a>                      
                    </li>
                    <li>
                        <a href="#" uk-icon="icon: facebook"></a>
                    </li>
                    <li>
                        <a href="#" uk-icon="icon: instagram"></a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
</template>
<style lang="scss" src="./uikit_scss/theme.scss"></style>
<script>
import Navigation from '@/components/navigation/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
