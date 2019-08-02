const model = require('./04-model');

function getIndex(req,res){
  model.getAllHero((arr)=>{
    res.render('index',{arr});
  })  
}

function getAdd(req,res){
  res.render('add');
}

function getEdit(req,res){
  res.render('edit');
}

// 使用模板引擎动态渲染的修改页面
function getEdit2(req,res){
  // 需要把要修改的旧的数据已经带回浏览器
  let id = req.query.id;
  // console.log(id);
  // 根据id把旧的数据获取出来
  model.getHeroById(id,target=>{
    // console.log(target);
    res.render('edit2',target);
  })
  // res.send('ok');
}


function getHeroById(req,res){
  let id = req.query.id;
  model.getHeroById(id,target=>{
    let response = {};
    if(target){
      response.code = 200;
      response.msg = '获取成功';
      response.data = target;
    }else {
      response.code = 503;
      response.msg = '没有找到对应的数据，请确认id是否正确';
    }
    res.send(response);
  })
}

//修改英雄
function editHeroById(req,res){
  // 获取数据
  let data = req.body;
  // 把数据读取出来
  model.getAllHero(arr=>{
    // 遍历数组，把id对比，如果id一致，把数据更改
    for(let i =0; i < arr.length; i++){
      if(arr[i].id == data.id){
        arr[i] = data;
        break;
      }
    }
    model.writeFile(arr);
    res.send({code : 200,msg : '成功'});
  });

}

function addNewHero(req,res){
  // console.log(req.body);
  model.addNewHero(req.body,result=>{
    // console.log(result);
    // 判断受影响的行数是否为1，如果是1，就是成功
    let response = {
      code : 501,
      msg : '失败'
    };
    if(result.affectedRows === 1){
      response.code = 200;
      response.msg = '成功';
    }
    res.send(response);
  })
}


// 删除英雄的处理
function deleteHeroById(req,res){
  //根据id删除
  let id = req.query.id;
  model.deleteHeroById(id,result=>{
    let response = {
      code : 501,
      msg : '失败'
    };
    if(result.affectedRows === 1){
      response.code = 200;
      response.msg = '成功';
    }
    res.send(response);
  })
}

const controller = {
  getIndex,getEdit,getHeroById,editHeroById,getEdit2,getAdd,addNewHero,deleteHeroById
}

module.exports = controller;
