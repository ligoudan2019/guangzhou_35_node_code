/**
 *  一定要先下载所需的所有的第三方模块
 *    express - 命令：  npm i -s express
 *    ejs - 命令 : npm i -s ejs
 */
// 搭建服务器
const express = require('express');
const fs = require('fs');
const app = express();
app.listen(8080, () => {
  console.log('服务器已开启，通过 http://127.0.0.1:8080 访问');
});

// 主页里面有静态资源，所以需要先处理静态资源
app.use('/assets', express.static('assets'));

// 主页需要使用模板引擎渲染结构
// 设置ejs为默认的模板引擎
app.set('view engine', 'ejs');

// 约定好请求主页的地址是 /index
app.get('/index', (req, res) => {
  // 还要先处理静态资源
  // 使用模板引擎
  // 读取数据，把数据使用ejs渲染
  fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    let arr = JSON.parse(data);
    // 直接使用 express 里面提供的渲染模板的方法渲染数据
    res.render('index', { arr });
  })
});