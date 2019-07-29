/**
 *  我们的分层思想：
 *      有一个js只负责开启服务器
 *      有一个js只负责判断请求
 *      有一个js只负责处理请求和返回请求
 *      有一个js只负责读写json文件
 * 
 */

const http =require('http');
const server = http.createServer();

// 在07里面已经把代码封装好了，直接调用即可
// 把07当初一个用户模块来使用
const router = require('./07-MVC的路由层');// 用户模块在引入的时候，是不需要带后缀的

server.listen(8080,()=>{
  console.log('http://127.0.0.1:8080');
});

server.on('request',(req,res)=>{
  router(req,res);
})
