
const express = require('express')
const Router = require('./Router.ts')
const app = express()
app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  // eslint-disable-next-line brace-style,eqeqeq
  if (req.method.toLowerCase() == 'options') { res.send(200) } // 让options尝试请求快速结束
  else { next() }
})
app.use('/', Router)
const port:Number = 80
app.listen(port, () => {
  console.log('server ON ' + port)
})
