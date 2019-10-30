const token = require('./token')
//状态码（1：成功，0：失败）
function formatData({code=1,msg='success',data=[]}= {}){
    if(code===0){
        msg = 'fail'
    }return{
        code,
        msg,
        data
    }
}
module.exports={
    formatData,
    token
}