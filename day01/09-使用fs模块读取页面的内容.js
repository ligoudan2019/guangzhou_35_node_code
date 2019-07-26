/**
 *  服务器是怎么返回页面的
 *  
 *  服务器本质是会返回一个字符串给浏览器的，但是平时我们的页面是写在一个html文件里面的
 * 
 *  服务器的做法是：
 *    把html文件里面的内容读取出来，把这些东西变成一个字符串，再发送给服务器
 * 
 *  nodejs里面要读取文件的内容需要一个新的核心模块： fs
 * 
 */
// 1 先引入
const fs = require('fs');
// 2 调用fs模块的方法读取文件的内容
// fs.readFile('./data/111.txt',function(err,data){
//   if(err) throw err;
//   console.log(data);
//   // data是一个buffer - 十六进制的数据
// })

// fs.readFile('./data/111.txt','utf-8',function(err,data){
//   if(err) throw err;
//   console.log(data);
//   // data是一个字符串
// })

// fs.readFile('./data/1111.txt','utf-8',function(err,data){
//   if(err) throw err;
//   console.log(data);
//   // data是一个字符串

//   // throw 是一个专门用于抛出异常的关键字
//   // 作用是 ： 在控制台输出错误信息，并且阻止代码继续执行
// })

// fs.readFile('./data/aaa.json',(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// })

fs.readFile('./data/aaa.json','utf-8',(err,data)=>{
  if(err) throw err;
  console.log(data);
})