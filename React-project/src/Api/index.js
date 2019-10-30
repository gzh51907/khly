import axios from 'axios';

let KHLY = axios.create({
    baseURL:'http://119.23.107.32'
})

export async function get(params,config={}){
    let {data} = await KHLY.get('',{
        params,
        ...config
    })
    return data;
}

export async function post(params,config={}){
    let {data} = await KHLY.post('',params,config);
    return data
}

export default {
    get,
}