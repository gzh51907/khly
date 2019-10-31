const { MongoClient } = require('mongodb');

// DBurl数据库连接路径
//DBName数据库名
const { DBurl, DBName } = require('../config.json');


// 连接MongoDB数据库
async function connect() {
    let result;
    try {
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBName);
        result = { client, db }
    } catch (err) {
        result = err
    }
    return result;
}
// 增 colName:集合名称 data:要添加的数据
async function create(colName, data) {
    // 连接数据库
    let { db, client } = await connect();
    // 获取集合
    let col = db.collection(colName);
    // 添加数据
    let result = await col.insertMany(data);
    // 关闭数据库
    client.close();
    return result;
}

// 查   colName  集合名称 query    查询条件
async function find(colName, query = {}, body = {}) {
    let { db, client } = await connect();
    let col = db.collection(colName);
    if (body) {
        body = body * 1
        let result = await col.find(query).sort({ "price": body }).toArray();
        client.close();
        return result;
    } else {
        let result = await col.find(query).toArray();
        client.close();
        return result;
    }
}

module.exports = {
    create,
    find
}