// const connection = require('./mysql.js')
const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router()
router.get('/data', async (req, res)=>{
    res.status(200)
    res.send({})
})
router.post('/admin', (req, res) => {
    console.log(req.body)
    // console.log(req)
    res.send("data")
})

module.exports = router
