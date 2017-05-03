// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// import IconsCustom from './uikit_js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);
// UIkit.use(IconsCustom);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');


// var stickys = UIkit.navbar('#navigation');

Vue.config.productionTip = false

router.afterEach(route => {
	document.title = route.meta.title;
})

//Components

// Vue.component('navigation', {
// 	template: 'components/Navigation.vue'
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
  	siteTitle: 'JC Mencos'
  }
})

