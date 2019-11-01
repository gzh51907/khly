import axios from 'axios';

let KHLY = axios.create({
    baseURL:'http://119.23.107.32:12345'
})

export async function get(url,params,config={}){
    let {data} = await KHLY.get(url,{
        params,
        ...config
    })
    return data;
}

export async function post(url,params,config={}){
    let {data} = await KHLY.post(url,params,config);
    return data
}

export default {
    get,
    post
}