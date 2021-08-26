import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo'
// import boRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
// globalRegister(app)
app.use(globalRegister)
app.use(store)
setupStore()
// path: /user => user
app.use(router)

app.mount('#app')
