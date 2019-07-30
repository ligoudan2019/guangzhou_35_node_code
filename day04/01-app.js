// 还是引入模块
const express = require('express');
// 创建服务器
const app = express();
// 端口和ip地址的绑定
// app.listen(端口,ip,回到函数)
app.listen(8080,()=>{
  console.log('服务器已开启，可以通过 http://127.0.0.1:8080 访问');
});

// 处理静态资源
// 如果使用这个方法写静态资源，在访问的时候，是不需要带上指定的文件夹的
// app.use(express.static('views'));
// app.use(express.static('assets'));

// 如果使用下面的方式实现静态资源处理，就需要带上指定目录了
// app.use(url前面所需的文件夹名称,指定的静态资源目录);
app.use('/views',express.static('views'));
app.use('/assets',express.static('assets'));


// // 设置pug为express的默认的模板引擎 - view engine 这个单词绝对不能写错
// // app.set('view engine','模板名称');
// app.set('view engine','pug');

// // 监听获取aaaa这个页面的请求
// app.get('/aaaa.html',(req,res)=>{
//   // 把aaaa.pug模板文件导入数据
//   // res.render(模板文件的路径,要导入的数据)
//   // 模板文件的路径只需要写模板文件名就行，它会自动的去找views目录下的同名的并且后缀名为pug的模板文件
//   res.render('aaaa',{ title: 'Hey', message: 'Hello there!' });
// })


// 学习ejs作为模板引擎使用
// 先下载，之后设置ejs为express的默认的模板引擎
app.set('view engine','ejs');
// 也是要先准备一个模板文件 , 也是要求在views文件夹里面，后缀名是ejs
// 导入数据
app.get('/ejs',(req,res)=>{
  // 直接调用 express的 渲染模板的方法
  res.render('ejs-template',{ name : '狗蛋' , age:12 , gender:'男', id:10086 })
});


// 使用app监听浏览器的请求，
// app.get(访问的url,处理请求的对应的函数)
app.get('/',(req,res)=>{
  res.send('你好世界');
});
// 相当于
// if(req.url === '/'){

// }
