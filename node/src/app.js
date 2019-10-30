// 引入express框架
const express = require('express');
// 引入json文件（配置信息系：端口号）
const {PORT}=require('./config.json');

// 引入所有路由
const allRouter =require('./routers');

const app = express();

// 静态资源服务器
// 网站根目录
app.use(express.static('./'));

// 使用路由
app.use(allRouter);

// 启动服务器
app.listen(PORT,()=>{
    console.log(`服务器启动成功：${PORT}`)
})