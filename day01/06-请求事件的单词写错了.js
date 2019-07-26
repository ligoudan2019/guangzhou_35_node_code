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
  console.log('请求进来了');
  res.end('<h1>header1</h1><script src="xxx.js"></script>');
});