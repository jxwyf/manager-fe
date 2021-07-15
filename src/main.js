import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from './utils/request'
import storage from './utils/storage'


const app = createApp(App);
//全局挂载
app.config.globalProperties.$request = axios;
app.config.globalProperties.$storage = storage;
//加载router对象
app.use(router).use(ElementPlus).mount('#app')
