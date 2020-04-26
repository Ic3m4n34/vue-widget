import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import 'document-register-element/build/document-register-element';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';


// import style
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper);
Vue.use(Vue2TouchEvents);
Vue.use(vueCustomElement);

Vue.customElement('vue-widget', App);
