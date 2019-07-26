// 移入http模块
const http = require('http');
// 创建服务器对象
const server = http.createServer();
// 绑定ip和端口
server.listen(8080,'127.0.0.1',()=>{
  console.log('服务器已经开启，可以通过 http://127.0.0.1:8080 或者 http://192.168.70.111:8080 访问');
});
// 注册请求事件 request
server.on('request',(req,res)=>{
  // 一个动态网站，应该要返回多个不同的页面，约定好，
  /**
   *  req.url === /index.html    返回一个主页
   *  req.url === /list.html     返回一个列表页
   *  req.url === /detail.html   返回详情页
   *  */

   res.setHeader("Content-Type",'text/html;charset=utf-8')

   if(req.url === '/index.html'){
     res.end('<h1>主页</h1>');
   }else if(req.url === '/list.html'){
     let html = `<h1>列表页</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
     `;
    res.end(html);
   }else if (req.url === '/detail.html'){
     res.end('<h1>详情页</h1>');
   }else {
     //返回一个404 - 404 默认就资源不存在的意思
     res.end('404');
   }

});