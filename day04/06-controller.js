// 引入model模块，直接使用里面的方法
const model = require('./07-model');

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
      for(let i = 0; i < arr.length;i++){
        if(arr[i].id == id){
          // 把数据从数组林移除
          // arr.splice(从哪里开始删除,总共要删除多少个);
          arr.splice(i,1);
          break; // 不是return，是break，因为我们是要打断循环，而不是终止函数的执行
        }
      }      
      // 删除了数据之后，把数据写入json
      model.writeFile(arr);
      // res.send 不仅仅可以返回字符串，还可以自动把对象转换为json字符串再返回
      // let reuslt = JSON.stringify({code : 200,msg :'成功'});
      // res.end(reuslt);
      res.send({code : 200,msg : '成功'});
    })    
  }
};


module.exports = controller;