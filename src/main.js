import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from './utils/request'


const app = createApp(App);
//全局挂载
app.config.globalProperties.$request = request;
//加载router对象
app.use(router).use(ElementPlus).mount('#app')
