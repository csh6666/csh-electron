import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import App from './App.vue'

createApp(App).use(router).use(createPinia()).use(ViewUIPlus).mount('#app')
