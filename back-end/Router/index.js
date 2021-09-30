const connection = require('../tool/mysql')
const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router()
const conf = require("../conf.json")
function verification (req,res,next){
    if (req.body.token){
        let token = jwt.decode(req.body.token,conf.jwt)
        if (token.name===conf.Administrator_account_name&&token.password===conf.Administrator_account_password){
            next()
        }else {
            res.send({
                code:200,
                msg:'请重新登录'
            })
        }
    }else {
        res.send({
            code:200,
            msg:'请重新登录'
        })
    }
}
router.get("/",(req,res)=>{
        res.send("<p style='font-size: 188px'>404</p>")
})
router.post('/update',verification,async (req,res)=>{
    let data ={
        puTonFile:req.body.puTonFile,
        name:req.body.name,
        github:req.body.github
    }
    connection.query(`UPDATE blog.settings SET puTonFile = '${data.puTonFile}', name = '${data.name}', github = '${data.github}'`,(err,data)=>{
        if (err) console.log(err);
        res.send({
            code:200,
            msg:"成功"
        })
    })
})
router.post('/manage',verification,async (req,res)=>{
    let data  = {
        title:req.body.title,
        id:req.body.id
    }
    if (data.title&&data.id){
        connection.query(`DELETE FROM blog.article WHERE h1 = '${data.title}' AND id = ${data.id}`,(err,data)=>{
            if (err) {
                console.log(err)
            };
        })
        res.send({
            code:200,
            msg:"成功"
        })
    }else {
        res.send({
            code:200,
            msg:"提交失败"
        })
    }
})

router.post('/article',verification,async (req,res)=>{
    let data  = {
        title:req.body.title,
        article:req.body.article
    }
    if (data.title&&data.article){
        connection.query(`INSERT INTO blog.article (h1,data) VALUES ('${data.title}','${data.article}')`,(err,data)=>{
            if (err) {
                console.log(err)
            };
        })
        res.send({
            code:200,
            msg:"成功"
        })
    }else {
        res.send({
            code:200,
            msg:"提交失败"
        })
    }
})


router.get('/settings',async (req,res)=>{
    connection.query(`SELECT * FROM blog.settings`,(err,data)=>{
            if (err) console.log(err);
            let tmp = {
                puTonFile : data[0].puTonFile,
                name: data[0].name,
                github: data[0].github,
            }
            res.send(tmp)
    })
})


router.get('/data',async (req,res)=>{
    connection.query(`SELECT * FROM blog.article`,(err,data)=>{
        if (err) console.log(err);
        res.send(data)
    })
})

router.post("/token",async (req,res)=>{
    if (conf.Administrator_account_name===req.body.name&&conf.Administrator_account_password===req.body.password){
        let token = {
            name : req.body.name,
            password : req.body.password
        }
        res.status(200)
        res.send({data: jwt.sign(token, conf.jwt)})
    }else {
        res.send({
            msg:'账号或密码错误'
        })
    }


})

module.exports = router
