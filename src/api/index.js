/**
 * api管理
 */
import request from './../utils/request'
export default {
    login(params){
       return request({
            url:'http://www.fasitmock.site/mock/3a89fe6788c492c98560f8847c52719b/api/users/login',
            method:'post',
            data:params,
            mock:true
        })
    }
}