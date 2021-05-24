import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
axios.get('http://localhost:8080/').then(function (res) {
  res = null
  console.log()
}).catch(function (err) {
  err = null
  alert('请检查网络连接状态')
})
createApp(App).use(store).mount('#app')
