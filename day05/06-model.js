const fs = require('fs');

module.exports = {
  getAllHero,getHeroById,writeFile
};

function getAllHero(callback){
  fs.readFile('./data/heros.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    let arr = JSON.parse(data);
    callback(arr);
  })
}

function getHeroById(id,callback){
  this.getAllHero((arr)=>{
    let target = arr.find(e=>{
      return e.id == id;
    });
    callback(target);
  })
}

function writeFile(arr){
  let content = JSON.stringify(arr);
  fs.writeFile('./data/heros.json',content,'utf-8',err=>{
    if(err) {
      console.log(err);
    }
  })
}