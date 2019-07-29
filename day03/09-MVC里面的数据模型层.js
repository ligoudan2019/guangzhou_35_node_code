/**
 *  该模块只负责两件事：
 *    读取json文件，返回数组
 * 
 *    得到一个数组，往json文件里面存储
 */

const fs = require('fs');

 let model = {
   // 一个是读取json文件，返回数组的方法
  getAllHero:function(callback){
    fs.readFile('./data/heros.json','utf-8',(err,data)=>{
      if(err) console.log(err);
      let arr = JSON.parse(data);
      // 要把数组返回 - 因为readFile是异步操作，会等待读取操作完成才执行
      // 如果是异步操作，想要得到异步操作的结果 ： 唯一的办法，给一个回调函数
      callback(arr);

      // 回调函数相当于是下面的写法
      // (function(array){
      //   let html = template( __dirname + '/views/index.html',{ array });
      //   res.end(html);
      // })(arr);
    })
  },
   // 把数组写入json文件的方法
  writeFile:function(arr){
    let content = JSON.stringify(arr);
    fs.writeFile('./data/heros.json',content,'utf-8',(err)=>{
      if(err) console.log(err);
    })
  },
  //获取最大id的方法
  getMaxId : function(callback){
    this.getAllHero((arr)=>{
      let id = arr[0].id;
      for(let i = 1; i < arr.length;i++){
        if(arr[i].id > id){
          id = arr[i].id;
        }
      }
      // id 就是最大id -- 也是通过回调函数得到最大id
      callback(id);
    })
  }
 };

 module.exports = model;

