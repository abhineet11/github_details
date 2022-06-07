import { createApp } from 'vue';
import Paginate from 'vuejs-paginate-next';

import App from './App.vue';
import store from './store';

// Make BootstrapVue available throughout your project

createApp(App).use(Paginate).use(store).mount('#app');
