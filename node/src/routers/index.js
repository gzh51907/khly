const express = require('express');

// 引入路由
const Router = express.Router();

// 同意跨域
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }

})

// 引入每个模块
const userRouter = require('./user');

Router.use(express.urlencoded({extended:true}),express.json());//推导：内部自动调用next
Router.use('/user',userRouter);

module.exports = Router;