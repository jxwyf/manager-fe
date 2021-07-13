import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'


const app = createApp(App);
//加载router对象
app.use(router).use(ElementPlus).mount('#app')
