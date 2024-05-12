import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import '@/axios.js'
import './assets/vendor/fontawesome/css/all.min.css'
import './assets/fonts/NeueMachina-Light.otf'
import './assets/vendor/bootstrap-icons/bootstrap-icons-recent.css'
import './assets/vendor/tiny-slider/tiny-slider.css'
import './assets/vendor/glightbox/css/glightbox.css'
import './assets/vendor/flatpickr/css/flatpickr.min.css'
import './assets/vendor/choices/css/choices.min.css'
import './assets/css/style.css'
import './assets/css/style2.css'
import './assets/style.css'
import './assets/vendor/stepper/css/bs-stepper.min.css'
import './assets/vendor/quill/css/quill.snow.css'
import './assets/vendor/dropzone/css/dropzone.css'
import 'material-icons/iconfont/material-icons.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import './assets/vendor/leaflet/leaflet.css';
import './assets/images/map.svg'



// Import Bootstrap and BootstrapVue CSS files (order is important)


import SmartTable from 'vuejs-smart-table'


Vue.use(SmartTable)

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(ElementUI);
Vue.use(Vuesax, {
  // options here
})

//Map

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

import GAuth from 'vue-google-oauth2';

const gauthOption = {
  clientId: '658508526723-2sdfq97i9qsulfk1e6va233kimseokn4.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
};

Vue.use(GAuth, gauthOption);
Vue.use(BootstrapVue)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
