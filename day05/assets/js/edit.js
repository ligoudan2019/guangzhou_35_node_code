$(function(){
  // 先得到id
  // 我们曾经封装过一个kits.js 里面封装好了一个可以把url参数转换为对象的方法 - 直接拿过来使用
  let id = location.search.substring(4);
  console.log(id);
  // 需要在一开始的时候，就请求原来的数据
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:8080/getHeroById",
    data: {id},
    // dataType: "dataType",
    success: function (res) {
      // console.log(res);
      if(res.code == 200){
        // 把表单数据填入表单
        $("#name").val(res.data.name);
        // 性别
        let selector = res.data.gender === '男' ? '#nan' : '#nv';
        $(selector).prop('checked',true);
        // 图片 - 图片的地址就不该了，主要改隐藏域的地址
        $("#headSrc").val(res.data.img);
        // 还需要把id的隐藏域修改
        $("#id").val(res.data.id);
      }
    }
  });

  // 给完成注册事件
  $("#sub").on('click',function(){
    // 非空判断
    // 收集数据
    let data = $("#form").serialize();
    // console.log(data);
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8080/editHeroById",
      data,
      success: function (res) {
        if(res.code == 200){
          alert(res.msg);
          location.href = '/index';
        }
      }
    });
  })

});