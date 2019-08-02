/**
 *  nodejs里面本身没有连接数据的API，需要我们使用一个第三方模块来操作
 *    第三方模块 - mysql
 *  使用：
 *  1.下载 - npm i -s mysql
 *  2. 引入
 *  3. 记住操作数据库的步骤：
 *    3.1 创建一个连接对象
 *    3.2 开始连接(新版的mysql会自动连接)
 *    3.3 准备一个你想要执行的sql语句
 *    3.4 把sql语句执行
 *    3.5 关闭连接
 */

const mysql = require('mysql');


// 1 创建一个连接对象
let conn  = mysql.createConnection({
  // ip地址
  host : '127.0.0.1',
  port : 3306,
  user : 'root',
  password : 'root',
  // 数据库名称
  database : 'gz35'
})

// 2 连接 - 新版的mysql第三方模块会自动连接，所以这个步骤可以省略
conn.connect();

// 3 需要一个sql语句
// let sql = `select * from heros`;
let sql = `UPDATE heros SET isDelete = 1 WHERE id = 4`;
// 4 执行sql语句
conn.query(sql,(err,result,filed)=>{
  // err - 如果有错，是一个错误对象，如果这个东西存在，后面的两个参数就都是undefined了
  if(err) console.log(err);
  // result  - sql语句的执行结果 - 如果是查询，result是一个数组，如果不是查询，result是一个对象
  console.log(result);
  // filed - 如果是查询，才有，查询出来之后，是所有的字段
  console.log(filed);
})

// 5 关闭连接 - 新版的不需要了 - 也是户自动关闭的
conn.end();