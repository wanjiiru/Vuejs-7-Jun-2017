import Vue from 'vue';
import App from './App';
import Message from './message.vue';

Vue.component('app-message', message.vue);

new Vue({
	el : #'app',
	render : h=> h(App)
});