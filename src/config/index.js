/**
 * 环境配置封装
 */
const env = import.meta.MODE || 'prod';
const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/3a89fe6788c492c98560f8847c52719b/api'
    },
    test:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/3a89fe6788c492c98560f8847c52719b/api'
    },
    prod:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/3a89fe6788c492c98560f8847c52719b/api'
    },
}
export default {
    env,
    mock:true,
    namespace:'manager',
    ...EnvConfig[env]

}