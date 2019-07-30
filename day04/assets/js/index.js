$(function(){
  // 给所有的删除的a标签注册点击事件
  $("#tbody").on('click','a:last-child',function(){    
    // 交互常识 - 确认
    if(!confirm('你确定要删除吗？')){
      return;
    }
    // 获取对应的id
    let id = $(this).attr('data-id');
    let _this = this;
    // console.log(id);
    // 发送ajax请求到服务器把对应的数据删除
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:8080/deleteHeroById",
      data: {id},
      // dataType: "dataType",
      success: function (res) {
        // console.log(res);
        if(res.code === 200){
          // 提示用户，并且把对应的行移除
          alert(res.msg);
          $(_this).parents('tr').remove();
        }
      }
    });
  });
});