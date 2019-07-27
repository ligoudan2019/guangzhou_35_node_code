/**
 *  1 搭建一个可以被访问的服务器
 *  2 处理静态资源
 */
const http = require('http');
const template = require('art-template');
const server = http.createServer();
const fs = require('fs');
const url = require('url');
server.listen(8080, () => {
  console.log('服务器已开启，通过http://127.0.0.1:8080');
});
server.on('request', (req, res) => {
  // 获取请求的方式
  // console.log(req.method);
  // 现在为止，views里面的html文件，就不再是静态资源，而是art-template的模板代码
  if (req.url.startsWith('/assets')) {
    // 处理css请求的响应头
    if (req.url.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
    // 使用fs模块读取并返回
    fs.readFile('.' + req.url, (err, data) => {
      // if(err) throw err; // throw 一般只会在特别严谨的逻辑使用
      if (err) console.log(err);
      res.end(data);
    })
  } else {

    //如果是get请求，并且携带数据，req.url 会得到一些不确定的东西 此时就没法判断了
    // get请求的url后面如果带有? 需要我们先把啊问号后面的先割开
    // 单独判断 ? 之前 就是我们约定好的 - 但是我们不用自己分割，直接使用人家封装好的代码就行
    // url.parse(要解析的url,是否把参数变成对象)
    // let result = url.parse(req.url,false);
    let result = url.parse(req.url, true);
    // console.log(result);
    // 处理动态页面的逻辑
    // 处理主页
    // 约定好 req.url === '/views/index.html' 返回一个art-template 生成的主页给浏览器
    if (req.url === '/views/index.html') {
      // 读取json数据
      fs.readFile(__dirname + '/data/heros.json', 'utf-8', (err, data) => {
        if (err) console.log(err);
        // console.log(data);// 先还是json格式字符串
        // 把字符串转换为数组
        let arr = JSON.parse(data);
        // 把数组放到模板代码里面替换
        // 写模板代码 - views里面有一个index.html模板文件        
        // 导入数据
        let html = template(__dirname + '/views/index.html', { arr })
        // console.log(html);
        // 把art-template生成的结构返回给浏览器
        res.end(html);
      })
    } else
      if (req.url === '/views/add.html') {
        // 返回一个添加页面 - 此时这个添加页面里面没有动态数据，就不需要使用模板引擎了 
        fs.readFile(__dirname + '/views/add.html', (err, data) => {
          if (err) console.log(err);
          res.end(data);
        });
      }
    // 判断是否是添加的请求
    // 约定好 添加的接口的名字： /addHero 
    // 还要求 必须是 post 请求才可以 - 本来是需要post方式提交回来的，但是我们今天不够时间了，先改成get
    // if(req.url === '/addHero' && req.method === 'GET'){
    // 使用url模块解析了之后，就不再是判断 url了，而是判断我们解析过后的 pathnane
    if (result.pathname === '/addHero' && req.method === 'GET') {
      // 把浏览器发送回来的数据，添加到json文件里面
      // console.log('添加英雄的请求回来了');
      // console.log(result.query);// 这个就是我们要的数据对象

      // 把旧数据读取出来 - 转换为数组
      fs.readFile('./data/heros.json', (err, data) => {
        if (err) console.log(err);
        let arr = JSON.parse(data);
        // 新数据，缺少一个id
        // 取出旧数据里面最大的一个id，让这个id+1，作为新数据的id
        let id = 0;
        arr.forEach(e => {
          if(e.id > id){
            id = e.id;
          }
        });
        // 把最大id+1作为新的id
        result.query.id = id + 1;
        // 把新数据放到数组里面
        arr.push(result.query);
        // 把新的数组，写入json文件
        // 先把数组变成字符串
        let jsonStr = JSON.stringify(arr);
        fs.writeFile('./data/heros.json', jsonStr, 'utf-8', (err) => {
          if (err) console.log(err);
          res.end(JSON.stringify({code : 200,msg : '操作成功'}));
        });
      });

    }
  }
});