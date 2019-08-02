const express = require('express');
const router = require('./02-router');
const bodyParser = require('body-parser');
const app = express();
app.listen(8080, () => {
  console.log('http://127.0.0.1:8080');
});
// 在appjs里面，只开启服务和注册中间件
app.use('/assets', express.static('assets'));

// 设置模板引擎
app.set('view engine', 'ejs');

// 注册body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 要注意：router一定要在最后使用
app.use(router);