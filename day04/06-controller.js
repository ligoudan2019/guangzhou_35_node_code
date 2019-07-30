// 引入model模块，直接使用里面的方法
const model = require('./07-model');

let controller = {
  // 这是对象的定义方法的新语法
  getIndex(req,res) {
    model.getAllHero((arr)=>{
      // 把数组放到模板引擎里面渲染
      res.render('index',{arr})
    })

    // // 读取数据，把数据使用ejs渲染
    // fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
    //   if (err) console.log(err);
    //   let arr = JSON.parse(data);
    //   // 直接使用 express 里面提供的渲染模板的方法渲染数据
    //   res.render('index', { arr });
    // })
  }
};


module.exports = controller;