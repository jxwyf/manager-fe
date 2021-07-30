/**
 * api管理
 */
import request from './../utils/request'
export default {
    //登录
    login(params){
       return request({
            url:'/users/login',
            method:'post',
            data:params,
            mock:true
        })
    }
}