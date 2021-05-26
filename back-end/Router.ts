const connection = require('./mysql.ts')
const express = require('express')
const Router = express.Router()
Router.get('/data', function (req, res) {
  connection.query('SELECT * FROM `blog`.`article` ORDER BY `id` DESC', (err, back) => {
    if (err) {
      console.log(err)
    }
    res.send(back)
  })
})
Router.get('/admin', (req, res) => {
  connection.query('SELECT * FROM `blog`.`settings`', (err, back) => {
    if (err) {
      console.log(err)
    }
    res.send({
      data: {
        id: back[0].id,
        puTonFile: back[0].puTonFile,
        name: back[0].name,
        github: back[0].github,
        title: back[0].title,
        background: back[0].background,
        logo: back[0].logo,
        portrait: back[0].portrait
      }
    })
  })
})

module.exports = Router
