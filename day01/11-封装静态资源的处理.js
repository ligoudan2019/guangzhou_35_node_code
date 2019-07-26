/**
 *  获取所有的静态资源的原理是：
 *    判断请求的url，根据不同的url返回不同的静态资源
 *    而所有的静态资源都是可以使用fs读取，并返回的
 * 
 *  一个一个判断是不科学的
 *    封装
 *      - 找规律 - 不同的文件，无非是对应的路径不同
 *      - 只要要求，请求任何的静态资源的时候，把完整的路径带回来
 *      - 在服务器直接根据路径进行读取即可
 */
const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.listen(8080,()=>{
  console.log('http://127.0.0.1:8080');
})
server.on('request',(req,res)=>{
  // 所有的静态资源都放在一些固定的目录下面 views里面放页面  assets里面 放 图片、css、js之类的
  // 判断判断 url是否以这两个文件夹开头，就知道是否是请求静态资源
  // 判断是否以某个字符开头  indexOf === 0   startsWith
  if(req.url.startsWith('/assets') || req.url.startsWith('/views')){
    // 如果请求css文件，必然是以css结尾 endsWith - 判断某个字符串是否以 什么结尾
    if(req.url.endsWith('.css')){
      // 加一个响应头
      res.setHeader('Content-Type','text/css');
    }

    fs.readFile('.' + req.url,(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
})