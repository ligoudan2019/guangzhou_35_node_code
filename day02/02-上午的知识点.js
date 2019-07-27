/**
 * 使用了以前的方式的ajax请求实现了动态页面
 *   使用ajax实现的动态页面，会多一次请求 - 使用ajax请求数组
 * 
 *  - 请求能少就少 - 服务器的性能优化
 * 
 *  我们的想法是： 把第一次请求的 index.html 不是返回一个只有一行的静态页面了，而是直接返回已经带有动态数据的html代码
 *  
 *  读取json文件，得到数组数据，遍历，在html代码中生成结构
 *  node里面没有DOM - 依赖一个第三方模块 - 模板引擎 - art-template 生成结构
 * 
 *  nodejs里面使用npm管理第三方模块(包)
 * 
 *    初始化
 *        npm init -y
 *          生一个jsno文件，这个文件里面有所有的包的信息
 *    下载第三方模块
 *        npm install 模式 模块的名称
 * 
 *        npm install -s art-template 
 *      简写
 *        npm i -s art-template
 */