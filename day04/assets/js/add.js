$(function(){
  // 注册新增的点击事件
  $("#sub").on('click',function(){
    // 收集数据
    let data = $("#myform").serialize();
    // console.log(data);
    // 写ajax请求发送
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8080/addNewHero",
      data,
      // dataType: "dataType",
      success: function (res) {
        console.log(res);
      }
    });
  })
});