import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/global.less';

createApp(App)
.use(ElementPlus)
.mount('#app')
