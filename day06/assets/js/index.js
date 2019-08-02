$(function(){
  $('tbody').on('click','a:last-child',function(){
    if(!confirm('确认要删除吗？')) return;

    let id = $(this).attr('data-id');
    let _this = this;
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:8080/deleteHeroById",
      data: {id},
      success: function (res) {
        if(res.code === 200){
          alert(res.msg);
          $(_this).parents('tr').remove();
        }
      }
    });
  })

})