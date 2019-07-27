/**
 * 复习之前在浏览器里面使用art-template的原理
 *    所谓的模板引擎的原理：
 *      都是 找到字符串里面的占位符，把占位符替换为真实的数据
 * art-template 以前的使用
 *  1.引入js
 *  2.script标签 要求type!=JavaScript  要有id
 *    目的： 不能把模板代码显示在页面上，模板代码不能按照任何语法先解析，id的作用是后面第4步导入数据的时候有一个查找的依据
 *  3.写模板
 *      - 占位符 + html代码
 *  4.导入数据
 *     把id对应的script标签里面的内容 innerText 获取出来就是一个字符串，字符串里面有占位符，根据导入的数据，把占位符替换为真实的数据
 *    得到一个带有真实数据的字符串 - 满足html格式
 * 
 *  上午说要依赖于  art-template 实现页面的生成
 * 
 *    https://aui.github.io/art-template/docs/index.html
 * 
 * art-template的使用
 *  1.引入
 * 
 * 
 */
const fs = require('fs');
// 引入art-template模块
const template = require('art-template');
// template 引入之后得到的是一个函数，这个函数可以帮助我们生成html代码
// art-template的使用方式1
// 调用一个方法 compile  - 编译
// template.compile(带有模板语法的字符串)
// 返回值是一个函数，返回的函数用于导入数据
// let render = template.compile('<h1><%=value%></h1>');
// // render(对象)
// let html = render({value: '狗蛋'});
// console.log(html);

// art-template的第二个用法
// template.render(模板语法的字符串,数据对象)
// let html = template.render('<h1><%=value%></h1>',{ value:'翠花' });
// console.log(html);

// 改进第二个用法：
// 把模板代码写到一个html页面里面，然后使用fs读取出来，是一个字符串
// fs.readFile('./views/art-template.html','utf-8',(err,data)=>{
//   // console.log(data);
//   // 调用template的渲染的方法，把html里面的占位符，替换掉
//   let html = template.render(data,{
//     title: '这是一个动态生成的主页',
//     name : '狗蛋',
//     age : 13,
//     gender : '未知'
//   })
//   console.log(html);
// })

// art-template的第三个使用方式
// html代码 = template(模板文件的路径,数据)
let html = template( __dirname + '/views/art-template.html', {
  title: '这是一个动态生成的主页',
  name: '狗蛋',
  age: 13,
  gender: '未知'
});
console.log(html);
