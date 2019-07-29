/**
 *  这个js文件是路由层
 *      路由层的职责是判断请求，把请求发给不同的控制器
 * 
 */
// 我们把处理请求的代码封装到了controller里面了，直接引入调用
const controller = require('./08-MVC里面的业务逻辑层')

 /**
  * 
  * @param {object} req  请求对象
  * @param {object} res  响应对象
  * 
  */
let router = function(req,res){
  // 判断请求的地址，分发请求
  // 接着处理页面中需要的静态资源
  if(req.url.startsWith('/assets')){
    controller.staticResource(req,res);
  }else 
  // 先处理add.html的请求
  if(req.url === '/views/add.html'){
    controller.getAddHtml(req,res);
  }else
  // 处理主页
  if(req.url === '/views/index.html'){
    controller.getIndexHtml(req,res);
  }else
  // 处理新增的请求
  if(req.url === '/addNewHero' && req.method === 'POST'){   
    controller.addNewHero(req,res);
  }
}

module.exports = router;