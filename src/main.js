import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App);
//加载router对象
app.use(router).mount('#app')
