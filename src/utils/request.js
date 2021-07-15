/**
 * axios二次封装
 */
import axios from "axios";
import config from "../config";

import { ElMessage } from "element-plus";

//创建axios实例对象 添加全局配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000, //超时时间
}) 



//请求拦截
service.interceptors.request.use((req)=>{
    //TO-DO
    const headers = req.headers;
    if(!headers.Authorization){

    }
    return req;
})


//响应拦截
service.interceptors.request.use((res)=>{
    //TO-DO
    
    return resp;
})

/**
 * 请求核心函数
 * @param {*} 请求配置
 */
function request(options){
    options.method = options.method || 'get';

    if(options.method.toLowerCase() === 'get'){
        options.params = options.data;
    }

    if(config.env == 'prod'){
        service.defaults.baseURL = config.baseApi;
    }else{
        service.defaults.baseURL = config.mock ? config.mockApi:config.baseApi;
    }

   return service(options)
}

['get','post','put','delete','patch'].forEach((item)=>{
    request[item] = (url,data,options)=>{
        return request({
            url,
            data,
            method:item,
            ...options
        })
    }
})

export default request;