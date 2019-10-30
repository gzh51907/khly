const express = require('express');
const Router = express.Router();
const {formatData} =require("../ustils");

// 引入mongo数据库
const {mongo} =require('../db');

// 数据库表名
const colName = 'user';

// 注册用户 1注册成功 0注册失败
Router.post('/reg',async (req,res)=>{
    let{username,password}=req.body;
    let result ;
    try{
        await mongo.create(colName,[{username,password,regtime:new Date()}])
        result=formatData();
    }catch{
        result=formatData({coke:0});
    }
    res.send(result);
})
// 查询用户是否存在 0表示存在 1表示不存在用户
Router.post('/check',async (req,res)=>{
    let{username}=req.body;
    let result = await mongo.find(colName,{username});
    // res.send(result);
    if (result.length) {
        res.send(formatData({
            code: 0
        }))
    } else {
        res.send(formatData());
    }
})
// 登录用户  1登录成功 0登录失败
Router.post('/login',async (req,res)=>{
    let{username,password}=req.body;
    let result = await mongo.find(colName,{username,password});
    if (result.length) {
        res.send(formatData());
    } else {
        res.send(formatData({
            code: 0
        }))
    }
})

module.exports=Router;
