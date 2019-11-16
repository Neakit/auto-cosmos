import Vue from 'vue';
import VueQuillEditor from 'vue-quill-editor';
// importing layouts
import Default from './layouts/Default'
import Admin from './layouts/Admin'
// importing router and store
import router from './router';
import store from './store';

import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component("l-popup", LPopup);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import VModal from 'vue-js-modal'
 
Vue.use(VModal)

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

Vue.prototype.$axios = axios;
import 'quill/dist/quill.core.css'

Vue.use(VueQuillEditor);


const app = new Vue({
    el: '#app',
    components: {
        Default,
        Admin
    },
    router,
    store,
    template: '<router-view></router-view>'
});
