$(function(){

  //点击新增
  $("#sub").on('click',function(){
    // 收集数据
    let data = $('form').serialize();
    // console.log(data);
    // 发送ajax请求
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8080/addNewHero",
      data,
      success: function (res) {
        // console.log(res);
        if(res.code === 200){
          alert(res.msg);
          location.href = '/index';
        }
      }
    });
  })
});