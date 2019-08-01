const express = require('express');
const app = express();
app.listen(9090,()=>{
  console.log('http://127.0.0.1:9090');
})
app.use('/views',express.static('views'));
app.use('/assets',express.static('assets'));


app.get('/testCross', (req, res) => {
    // res.send('alert("你好")');
    // console.log(req.query);
    let fnName = req.query.fn;

    let arr = [{name:'狗蛋',age:12},{name :'翠花',age : 16}];
    res.send(`${fnName}(${JSON.stringify(arr)})`);
});