var Fly=require("flyio/dist/npm/wx")
var fly = new Fly; //创建fly实例

//配置请求基地址
fly.config.baseURL = process.env.BASE_API
fly.config.timeout = 5000

//添加拦截器
fly.interceptors.request.use((config, promise) => {
  //给所有请求添加自定义header
  // config.headers["X-Tag"] = "flyio";
  return config;
})

fly.interceptors.response.use((response, promise) => {

  return response;
})

export default fly
