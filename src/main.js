import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.scss'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import persist from 'pinia-plugin-persistedstate'
app.use(createPinia().use(persist))
app.use(createPinia())
app.use(router)
app.mount('#app')
