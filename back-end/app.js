const express = require('express')
const Router = require('./Router/index')
const cors = require('cors')
const app = express()
const https = require('https')
const fs = require('fs')
let httpsOption = null
let conf = require("./conf.json")
if (conf.https) {
    httpsOption = {
        key: fs.readFileSync('https.key'),
        cert: fs.readFileSync('https.pem')
    }
}
const port = Number(conf.Serve_Port)
if (conf.Cross_domain)app.use(cors());

// 跨域
app.use(express.json())
// json解析

app.use('/', Router)
//路由更改
if (httpsOption == null) {
    app.listen(port, () => {
        console.log(`启动成功在端口:${port}`)
    })
} else {
    https.createServer(httpsOption, app).listen(port, () => {
        console.log(`启动成功在端口:${port},并启动了https服务`)
    });
}
