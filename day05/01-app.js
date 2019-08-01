const express = require('express');
const bodyParser = require('body-parser');
const router = require('./02-router');
const app = express();
app.listen(8080, '127.0.0.1', () => {
  console.log('http://127.0.0.1:8080');
});

// 会在一开始的时候，就使用 静态资源 中间件进行静态资源托管
app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));
// 注册 body-parser  第三方中间件
// app.use(bodyParser.urlencoded({ extended: false }));

// 自己写一个中间件
/**
 * req - request - 请求对象
 * res - response - 响应对象
 * next - 下一个中间件函数
 */
// app.use(function(req,res,next){
//   req.abc = '你好';
//   console.log(1);
//   next();
// });

// app.use(function(req,res,next){
//   req.def = '我叫';
//   console.log(2);
//   next();
// });

// app.use(function(req,res,next){
//   req.name = '李狗蛋';
//   console.log(3);
//   next();
// });

// console.log(typeof router);



const queryString = require('querystring');
app.use(function(req,res,next){
  let data = '';
  req.on('data',(chunck)=>{
    data+= chunck;
  }).on('end',()=>{
    console.log(data);
    // 把data解析成为一个对象，把这个对象附加给req
    data = queryString.parse(data);
    req.body = data;
    // res.send();
    next();
  })  
})

app.get('/', (req, res) => {
  console.log(req.abc,req.def,req.name);
  res.send('hello world');
});

app.post('/testMyBodyParser',(req,res)=>{
  console.log(req.body);
  res.send('ok');
});