const express = require('express');
const app = express();
app.listen(9090,()=>{
  console.log('http://127.0.0.1:9090');
})
app.use('/views',express.static('views'));
app.use('/assets',express.static('assets'));