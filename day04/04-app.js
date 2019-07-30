/**
 *  MVC的分层思想
 *    分工合作
 *       1 负责开启服务器
 *       2 负责分发强求
 *       3 负责处理逻辑
 *       4 负责读写数据
 * 
 * 通常在express的app.js里面负责做的事情：
 *    1 开服务器
 *    2 注册中间件
 *    3 设置默认的模板引擎
 */
// 搭建服务器
const express = require('express');
// 需要引入路由层，分发请求
const router = require('./05-router');
// 引入body-parser中间件
const bodyParser = require('body-parser');
const app = express();
app.listen(8080, () => {
  console.log('服务器已开启，通过 http://127.0.0.1:8080 访问');
});

// 主页里面有静态资源，所以需要先处理静态资源
app.use('/assets', express.static('assets'));

// 主页需要使用模板引擎渲染结构
// 设置ejs为默认的模板引擎
app.set('view engine', 'ejs');

// 注册body-parser中间件 - 这个中间件的作用，就是解析post请求的数据
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * bodyParser 是一个对象
 *  该对象有一个方法 ： urlencoded - 表示要解析url编码 -- key=value&key=value 的格式就叫url编码格式
 *  extended - 依赖于插件
 *    以前body-parser是需要依赖于之前使用过的 queryString 来实现
 *    以前queryString还不是核心模块，后来随着nodejs的发展，queryString 被吸收了，变成了核心模块，就不需要依赖于以前的插件了
 * 
 */
// 注册路由中间件 - 中间件的概念先不着急 - 这个路由中间件 一般是最后注册的
app.use(router);


