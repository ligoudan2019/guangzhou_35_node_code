const fs = require('fs');
// fs模块提供一个写入文件的方法
// fs.writeFile(文件路径,写入的内容,编码格式,写入完成的回调函数)
fs.writeFile('./data/aaa.txt','李狗蛋和刘狗蛋又打了一架','utf-8',(err)=>{
  if(err) console.log(err);
});