import Vue from 'vue';
import App from './App.vue';

// mount the App component to the #app div.
new Vue({
  render: h => h(App),
}).$mount('#app');