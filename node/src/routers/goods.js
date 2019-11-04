const express = require('express');
const Router = express.Router();

const {
    mongo
} = require('../db');
const {
    formatData,
} = require('../ustils');
const colName = 'goods';

Router.post('/sort', async (req, res) => {
    let tag = req.query;
    let {
        sort
    } = req.body;
    let result
    try {
        result = await mongo.find(colName, tag, sort);
        // console.log('result',result)
        if (result.length > 0) {
            result;
        } else {
            result = formatData({
                code: "0"
            })
        }
    } catch (err) {
        result = formatData({
            code: "0"
        })
    }
    res.send(result);
})

// 模糊查询
Router.get('/search', async (req, res) => {

    let { title } = req.query;
    let result
    try {
        result = await mongo.search(colName, title);
        if (result.length > 0) {
            result;
        } else {
            result = formatData({
                code: "0"
            })
        }
    } catch (err) {
        result = formatData({
            code: "0"
        })
    }
    res.send(result);
})


// 查询所有商品
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
    // console.log(result)
})



// 查询单个商品
Router.get('/getgoods', async (req, res) => {
    let {
        tag
    } = req.query;
    let result;
    try {
        result = await mongo.find(colName, {
            tag
        }, null);
        if (result.length > 0) {
            result;
        } else {
            result = formatData({
                code: "0"
            })
        }
    } catch {
        result = formatData({
            code: "0"
        })
    }
    res.send(result);
})
// gid查询单个商品
Router.get('/getid', async (req, res) => {
    let { gid } = req.query;
	console.log(gid)
    let result;
    try {
        result = await mongo.getid(colName, gid , null);
        if (result.length > 0) {
            result;
        } else {
            result = formatData({
                code: "0"
            })
        }
    } catch {
        result = formatData({
            code: "0"
        })
    } res.send(result);
})

// 添加商品
Router.post('/add', async (req, res) => {
    let {
        gid,
        title,
        tag,
        pro_tags,
        imgurl,
        price,
        pro_tags1
    } = req.body;
    let result;
    try {
        await mongo.create(colName, [{
            gid,
            title,
            tag,
            pro_tags,
            imgurl,
            price,
            pro_tags1
        }]);
        result = formatData();
    } catch (err) {
        result = formatData({
            code: 0
        })
    }
    res.send(result);
});

// // 删除单个商品
Router.get('/remove', async (req, res) => {
    let { gid } = req.query;
	console.log('gid',typeof(req.query.gid))
    let result;
    try {
        result = await mongo.remove(colName, gid *1,null);
            result = formatData()
    } catch {
        result = formatData({
            code: "0"
        })
    } res.send(result);
})

// 修改商品.
Router.patch('/change', async (req, res) => {
    let id = req.query.barcode * 1;
    req.query.barcode = id;
    let result = await mongodb.update(colName, req.query, req.body
    );
    res.send(result);
});

module.exports = Router;