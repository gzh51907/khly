const express = require('express');
const Router = express.Router();
const {formatData,token} =require("../ustils");

// 引入mongo数据库
const {mongo} =require('../db');

// 数据库表名
const colName = 'user';

// 注册用户 1注册成功 0注册失败
Router.post('/reg',async (req,res)=>{
    let{username,password}=req.body;
    let result ;
    try{
        await mongo.create(colName,[{username,password,regtime:new Date()}],null)
        result=formatData();
    }catch{
        result=formatData({coke:0});
    }
    res.send(result);
})
// 查询用户是否存在 0表示存在 1表示不存在用户
Router.post('/check',async (req,res)=>{
    let{username}=req.body;
    let result = await mongo.find(colName,{username},null);
    // res.send(result);
    if (result.length) {
        res.send(formatData({
            code: 0
        }))
    } else {
        res.send(formatData());
    }
})
// 查询所有用户
Router.get('/', async (req, res) => {
    let result
    try {
        result = await mongo.find(colName, req.query, null);
    } catch (err) {
        result = formatData({
            code: "0"
        })
    }
    res.send(result);
})
// 登录用户  1登录成功 0登录失败
Router.post('/login',async (req,res)=>{
    let{username,password}=req.body;
    console.log("body",username,password)
    let result = await mongo.find(colName,{username,password},null);
    if (result.length) {
        Authorization = token.create(username);
        res.send(formatData({
            data: Authorization
        }));
    } else {
        res.send(formatData({
            code: 0
        }))
    }
})
// 删除用户
Router.post("/dele", async (req, res) => {
    let {
        username
    } = req.body;
    // console.log("后台接收",username)
    let result;
    try {
        result = await mongo.remove(colName, {
            username: username
        })
        result = formatData()
    } catch {
        result = formatData({
            code: "0"
        })
    }
    res.send(result);
})
module.exports=Router;
