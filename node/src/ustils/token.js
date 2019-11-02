const jwt = require('jsonwebtoken');
let {
    secret
} = require('../config.json');
// 生成token
function create(data, expiresIn = 60 * 60 * 24 * 7) {
    let token = jwt.sign({
        data
    }, secret, {
        expiresIn
    });
    return token;
}
// 校验token
function verify(token) {
    let res;
    try {
        let result = jwt.verify(token, secret);
        console.log('token校验：', result)
        res = true;
    } catch (err) {
        res = false;
    }

    return res;
}

module.exports = {
    create,
    verify
}