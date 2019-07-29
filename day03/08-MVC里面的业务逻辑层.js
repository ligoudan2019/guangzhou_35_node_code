/**
 *  业务逻辑层，负责把请求处理了，把处理结果返回
 *    把处理json文件的逻辑交给model
 */

const fs = require('fs');
const template = require('art-template');
const queryString = require('querystring');
const model = require('./09-MVC里面的数据模型层');

let controller = {
  // 处理所有静态资源的方法
  staticResource: function (req, res) {
    if (req.url.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css;charset=utf-8');
    }
    // 直接读取即可
    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) console.log(err);
      res.end(data);
    })
  },
  // 处理主页的方法
  getIndexHtml: function (req, res) {
    // 把json里面的数据读取出来，使用art-tempalte 生成一个html字符串发送给浏览器
    // fs.readFile('./data/heros.json','utf-8',(err,data)=>{
    //   if(err) console.log(err);
    //   // 把读取出来的数据转换为数组
    //   let arr = JSON.parse(data);
    //   // 使用art-template 生成html结构
    //   let html = template( __dirname + '/views/index.html',{ array : arr });
    //   res.end(html);
    // })

    // 调用model封装好的获取数据的方法
    model.getAllHero(function(array){
      let html = template( __dirname + '/views/index.html',{ array });
      res.end(html);
    })
  },

  // 处理新增页面
  getAddHtml: function (req, res) {
    fs.readFile('./views/add.html', (err, data) => {
      if (err) console.log(err);
      res.end(data);
    })
  },

  // 处理新增的请求
  addNewHero: function (req, res) {
    // chunck - 块
    let data = '';
    req.on('data', (chunck) => {
      // 把每次接收到的数据，合并到一起
      data += chunck;
    });
    // 在接收完毕的事件里面处理数据
    req.on('end', () => {
      // 找一个  queryString 的核心模块
      data = queryString.parse(data);
      //先读取数据
      model.getAllHero((arr)=>{
        // 得到最大id
        model.getMaxId((maxId)=>{
          data.id = maxId+1;
          // 把新旧数据合并，写入数组
          arr.push(data);
          // 把数组写入json文件
          model.writeFile(arr);
          let result = {code : 200,msg : '成功'};
          res.end(JSON.stringify(result));
        })
      });
    })
  }
};


module.exports = controller;