import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import 'document-register-element/build/document-register-element';
import App from './App.vue';

Vue.use(vueCustomElement);

Vue.customElement('vue-widget', App);
