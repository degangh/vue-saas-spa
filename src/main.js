import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Import your router

import './style.css'
createApp(App)
.use(router)
.mount('#app')
