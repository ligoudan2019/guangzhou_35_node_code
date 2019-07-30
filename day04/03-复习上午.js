/**
 * 学习一个别人封装好的框架 - 第三方模块
 *  express
 *    是一个第三方模块
 *    1 先下载
 *        npm i -s express
 *    2 搭建服务器
 *      2.1 引入
 *      2.2 创建服务器
 *      2.3 绑定端口和ip
 *      2.4 监听请求
 *  3 处理静态资源
 * 
 *      访问的时候是不带文件夹的名字
 *      app.use(express.static(对应的文件夹名字));
 * 
 *      访问的时候需要带文件夹的名字
 *      app.use('/以哪个文件开头',express.static('文件夹名'));
 *      - 我推荐
 * 
 * 4 模板引擎
 *      pug
 *        在这里不推荐 - 公司里面要用哪一个你就用哪一个
 *      ejs
 * 
 *  使用过程
 *    下载 
 *      npm i -s 模板名称
 *    在express里面使用模板引擎，和之前稍有不同
 *      需要把某个模板引擎设置为 express的 默认的模板引擎
 *      app.set('view engine','ejs');
 *    在views文件夹里面写一个对应模板文件，ejs模板推荐的格式叫； ejs
 *      在 xxx.ejs 文件里面写模板代码 - <%%>
 * 
 *    导入数据渲染结构
 *      res.render(模板文件名称,数据对象)
 *      要点：
 *          模板文件的名称 不带路径，也不带后缀名
 *          数据对象必须是对象，根据里面的键，到时候会在模板文件里面通过变量获取
 */

const express = require('express');
const app = express();
app.listen(8080,()=>{
  console.log('http://127.0.0.1:8080');
});

app.use('/assets',express.static('assets'));

app.set('view engine','ejs');

// app.get('/浏览器要请求的地址',(req,res)=>{
//   res.send();// 在回调函数里面处理请求
// });

// 约定好，浏览器访问的地址就是  /index
// app.get 的第一个参数 其实就是 req.url 
app.get('/index.abc',(req,res)=>{
  // 读取json文件，转换为数组
  let arr = [];
  res.render('index',{arr});
});
