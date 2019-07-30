// 引入model模块，直接使用里面的方法
const model = require('./07-model');
// const fs = require('fs');
let controller = {
  // 这是对象的定义方法的新语法
  getIndex(req,res) {
    model.getAllHero((arr)=>{
      // 把数组放到模板引擎里面渲染
      res.render('index',{arr});
    })

    // // 读取数据，把数据使用ejs渲染
    // fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
    //   if (err) console.log(err);
    //   let arr = JSON.parse(data);
    //   // 直接使用 express 里面提供的渲染模板的方法渲染数据
    //   res.render('index', { arr });
    // })
  },

  // 给controller添加一个删除的方法
  deleteHeroById(req,res){
    // 根据id删除掉某个元素
    // 先得到id
    // express里面已经帮我们把get请求带回来的参数处理了
    // 直接通过req.query 可以获取
    // console.log(req.query);
    let id = req.query.id;
    // 把数组里面的数据对比，如果有一个数据的id和刚才得到的id是一样的，就把它删除
    model.getAllHero((arr)=>{
      // for(let i = 0; i < arr.length;i++){
      //   if(arr[i].id == id){
      //     // 把数据从数组林移除
      //     // arr.splice(从哪里开始删除,总共要删除多少个);
      //     arr.splice(i,1);
      //     break; // 不是return，是break，因为我们是要打断循环，而不是终止函数的执行
      //   }
      // }

      let isExit = arr.findIndex(e=>{
        return e.id == id;
      });
      isExit != -1 ? arr.splice(isExit,1) : 0;

      // 删除了数据之后，把数据写入json
      model.writeFile(arr);
      // res.send 不仅仅可以返回字符串，还可以自动把对象转换为json字符串再返回
      // let reuslt = JSON.stringify({code : 200,msg :'成功'});
      // res.end(reuslt);
      res.send({code : 200,msg : '成功'});
    })    
  },

  // 返回一个新增的页面
  getAdd(req,res){
    // fs.readFile('./views/add.html','utf-8',(err,data)=>{
    //   if(err) console.log(err);
    //   // res.send方法如果返回的是一个buffer，默认添加的响应头是 下载文件的响应头
    //   res.send(data);
    // })  
    
    // 除了可以自己读取之外，也可以交给模板引擎读取
    // 把add.html修改为add.ejs
    res.render('add');
  },

  // 处理新增的逻辑
  addNewHero(req,res){
    // 需要先获取传递回来的数据
    // express里面没有封装post请求的数据的获取，依赖于一个第三发模块
    // body-parser 它其实是一个 express的中间件，一般中间件都是在 app.js里面注册
    // 注册了之后，req对象身上会多一个属性 body ，这个属性是一个对象，该对象是解析 post请求传递回来的数据得到的
    console.log(req.body);

    // 把数据读取出来，获取一个最大id，把新旧数据合并，写入
    model.getAllHero((arr)=>{
      model.getMaxId((maxId)=>{
        req.body.id = maxId + 1;
        // 合并
        arr.push(req.body);
        // 写入
        model.writeFile(arr);
        // 返回成功
        res.send({code : 200,msg : '成功'});
      })
    })
  }
};


module.exports = controller;