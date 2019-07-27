/**
 *  1 搭建一个可以被访问的服务器
 *  2 处理静态资源
 */
const http = require('http');
const template = require('art-template');
const server = http.createServer();
const fs = require('fs');
server.listen(8080,()=>{
  console.log('服务器已开启，通过http://127.0.0.1:8080');
});
server.on('request',(req,res)=>{
  // 现在为止，views里面的html文件，就不再是静态资源，而是art-template的模板代码
  if(req.url.startsWith('/assets')){
    // 处理css请求的响应头
    if(req.url.endsWith('.css')){
      res.setHeader('Content-Type','text/css');
    }
    // 使用fs模块读取并返回
    fs.readFile('.'+req.url,(err,data)=>{
      // if(err) throw err; // throw 一般只会在特别严谨的逻辑使用
      if(err) console.log(err);
      res.end(data);
    })
  }else {
    // 处理动态页面的逻辑
    // 处理主页
    // 约定好 req.url === '/views/index.html' 返回一个art-template 生成的主页给浏览器
    if(req.url === '/views/index.html'){
      // 读取json数据
      fs.readFile( __dirname + '/data/heros.json','utf-8',(err,data)=>{
        if(err) console.log(err);
        console.log(data);// 先还是json格式字符串
        // 把字符串转换为数组
        let arr = JSON.parse(data);
        // 把数组放到模板代码里面替换
        // 写模板代码 - views里面有一个index.html模板文件        
        // 导入数据
        let html = template(__dirname + '/views/index.html',{arr})
        // console.log(html);
        // 把art-template生成的结构返回给浏览器
        res.end(html);
      })
    }
  }
});