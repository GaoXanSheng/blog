import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
axios.get('http://127.0.0.1/admin').then((res) => {
  store.state.id = res.data.data.id
  // id
  store.state.github = res.data.data.github
  // github
  store.state.puTonFile = res.data.data.puTonFile
  // 备案
  store.state.name = res.data.data.name
  // 名称
  store.state.title = res.data.data.title
  // 网站标题
  store.state.logo = res.data.data.logo
  // logo地址
  store.state.portrait = res.data.data.portrait
  //  个人头像地址
  store.state.background = res.data.data.background
  axios.get('http://127.0.0.1/data').then((res) => {
    store.state.data = res.data
    store.state.textId = res.data[0].id
  })
})
createApp(App).use(store).mount('#app')
