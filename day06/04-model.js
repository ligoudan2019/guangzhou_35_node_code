const fs = require('fs');

// 下载引入mysql模块
const mysql = require('mysql');

module.exports = {
  getAllHero,addNewHero,deleteHeroById,getHeroById,editHeroById
};

let conn = mysql.createConnection({
  host : '127.0.0.1',
  port : 3306,
  user : 'root',
  password : 'root',
  database : 'gz35'
});

function getAllHero(callback){
  //从数据库读取数据
  // 1 创建连接  
  // 2 准备sql语句
  // 查询所有的数据
  let sql = `SELECT * FROM heros WHERE isDelete = 0`;
  // 3 执行sql语句
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  })
}

function addNewHero(data,callback){
  // 还是操作数据库的三步
  // 准备sql语句
  let sql = `INSERT INTO heros SET \`img\`='${data.img}',\`name\`='${data.name}',\`gender\`='${data.gender}'`;
  // 执行
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  })
}


// 删除
function deleteHeroById(id,callback){
  // let sql = `DELETE FROM heros WHERE id = ${id}`;
  let sql = `UPDATE heros SET isDelete = 1 WHERE id = ${id}`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  })
}

function getHeroById(id,callback){
  let sql = `SELECT * FROM heros WHERE id = ${id}`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result[0]);
  });
}

function editHeroById(id,data,callback){
  let sql = `UPDATE heros SET \`name\`='${data.name}',\`gender\`='${data.gender}',\`img\`='${data.img}' WHERE id = ${id}`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  })
}