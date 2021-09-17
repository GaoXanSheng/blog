// const connection = require('./mysql.js')
const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router()
function verify(req,res,next){
    req.body={
        token:req.body.token
    }

}
router.get('/data', async (req, res)=>{
    res.status(200)
    res.send({})
})
router.post('/admin', (req, res) => {
    const data = req.body
    if (!data.name||!data.password){
        res.send({"code":200,"msg":"密码或用户名错误"})
    }else {
        const token = jwt.sign(req.body, 'GaoXuShenG');
        res.send({data:token})
    }

})
router.post('/token', (req, res) => {
    const data = req.body.token
        res.send(jwt.decode(data,"GaoXuShenG"))

})
module.exports = router
