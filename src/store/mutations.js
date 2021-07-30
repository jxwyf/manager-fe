/**
 * Mutations业务层数据提交
 */
 import storage from './../utils/storage'

 export default {
     saveUserInfo(state, userInfo){
        this.state.userInfo = userInfo;
        storage.setItem('userInfo',userInfo)
     }
 }