const http =require('http');
const queryString = require('querystring');
const server = http.createServer();
const fs = require('fs')
server.listen(8080,()=>{
  console.log('http://127.0.0.1:8080');
});

server.on('request',(req,res)=>{
  // 接着处理页面中需要的静态资源
  if(req.url.startsWith('/assets')){
    if(req.url.endsWith('.css')){
      res.setHeader('Content-Type','text/css;charset=utf-8');
    }
    // 直接读取即可
    fs.readFile(__dirname + req.url,(err,data)=>{
      if(err) console.log(err);
      res.end(data);
    })
  }else 

  // 先处理add.html的请求
  if(req.url === '/views/add.html'){
    fs.readFile('./views/add.html',(err,data)=>{
      if(err) console.log(err);
      res.end(data);
    })
  }else

  // 处理新增的请求
  if(req.url === '/addNewHero' && req.method === 'POST'){
    // 处理post请求
    // 处理post数据和get的数据是不一样
    /**
     * get和post的区别
     *    get 
     *      - 数据是在url的后面的
     *      - 携带的数据量是有限的
     *    post
     *      - 数据是在请求体里面的
     *      - 理论上携带的数据量是无限的
     */
    // 处理post的数据，需要先给req对象注册一个正在接收数据事件 - 因为post携带的数量可能比较大，所以需要一块一块的进行接收
    // chunck - 块
    let data = '';
    req.on('data',(chunck)=>{
      // 把每次接收到的数据，合并到一起
      data += chunck;
    });
    // 在接收完毕的事件里面处理数据
    req.on('end',()=>{
      // console.log(data);
      // 得到的数据是一个  url编码的格式 需要解析成对象
      // 找一个  queryString 的核心模块
      data = queryString.parse(data);
      // console.log(data);
      // 跟以前一样，实现新增
      fs.readFile('./data/heros.json','utf-8',(err,content)=>{
        if(err) console.log(err);
        let arr = JSON.parse(content);
        let id = arr[0].id;
        for(let i =1; i< arr.length;i++){
          if(arr[i].id > id){
            id = arr[i].id;
          }
        }
        data.id = id + 1;
        // 数据合并
        arr.push(data);
        // 写入
        let jsonStr = JSON.stringify(arr);
        fs.writeFile('./data/heros.json',jsonStr,'utf-8',(err)=>{
          if(err){

          }else {
            let result = JSON.stringify({code :200,msg :'新增成功'})
            res.end(result);
          }
        })
      })
    })

  }
})
