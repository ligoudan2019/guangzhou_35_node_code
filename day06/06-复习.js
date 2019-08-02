/**
 * 数据库
 *  必要性 - 只要是在动态网站里面，必然要设计数据的动态，必然用到数据库
 * 
 * 用navicat操作
 *  - 创建数据库
 *  - 新建表格
 *  - 给每个表格id
 * 
 * 使用sql语句操作数据库
 *  查询
 *    select 字段1,字段2... from 表格 where 条件
 *  新增
 *    insert into 表格 set 键=值,键=值,...
 *  删除
 *    delete from 表格 where 条件
 *  修改
 *    update 表格 set 键=值,键=值,....  where 条件
 * 
 * 使用nodejs配合sql对数据进行操作
 *    第三方模块 - mysql - 独立的第三方模块 - 不依赖express的
 * 
 *  1 下载-引入     const mysql = require('mysql');
 *  2 创建连接对象
 *                 let conn = mysql.createConnection({
 *                                                host : ip,
 *                                                port : 端口,
 *                                                user : 用户名,
 *                                                password : 密码,
 *                                                dataBase : 数据库的名称
 *                                                });
 *  3 准备sql语句
 *    let sql = '';
 *  4 执行sql语句
 *                conn.query(sql,(err,result,fileds){
 *                   err - 如果有错，  result - 执行结果 - 如果是查询，就是数组，如果是非查询，是对象  fileds - 查询的语句才会有的 - 所有的字段
 *                })
 * 
 * 
 */