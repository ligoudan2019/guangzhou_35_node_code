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
  // 返回不同的内容 - 思路是判断请求的地址
  // 请求的信息是归请求对象管的， req对象身上有一个属性： url
  // console.log(req.url); // 永远获取到的是 端口之后的  部分字符串

  // res.end('<h1>header1</h1><script src="xxx.js"></script>');

  // 判断 如果req.url === /  返回页面
  if(req.url === '/'){
    res.end('<h1>header1</h1><script src="xxx.js"></script>');
  }else 
  // 如果 req.url === 'xxx.js' 返回js代码
  if (req.url === '/xxx.js'){
    res.end('alert(123)');
  }else if(req.url == '/favicon.ico'){
    // 返回网站的图标 - 现在还无法处理
  }
});