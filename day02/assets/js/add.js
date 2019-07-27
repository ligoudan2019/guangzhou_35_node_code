/**
 * 先封装一个根据 form表单收集里面数据的方法
 *  原理是根据name属性和value属性
 * 
 *  1.获取form表单 -通过一个选择器
 *  2.得到所有带name的元素
 *  3.遍历得到的所有带name的后代元素
 *    组成name和value
 */

function serialize(formSelector) {
  // 准备一个数组，里面负责存储 key=value的形式，最后使用join方法实现拼接
  let arr = [];
  let form = document.querySelector(formSelector);
  // 父元素.querySelectorAll(选择器) 根据选择器找到父元素的所有后代元素里面满足选择器要求的元素
  let eles = form.querySelectorAll('[name]');
  eles.forEach(e => {
    // 如果是radio要求是选中才可以
    if (e.type === 'radio' && e.checked) {
      // 获取name属性
      let key = e.name;
      // 获取value属性
      let value = e.value;
      // 变成键=值的形式
      arr.push(key + '=' + value)
    }

    // 处理那些不是radio的
    if (e.type !== 'radio') {
      // 获取name属性
      let key = e.name;
      // 获取value属性
      let value = e.value;
      // 变成键=值的形式
      arr.push(key + '=' + value)
    }

  });
  // console.log(arr);
  // 最终要的是： 键=值&键=值
  return arr.join('&');
}


// 点击新增的时候才把数据收集起来，发送给服务器
let btn = document.querySelector('#sub');
// 注册点击事件
btn.onclick = function(){
  // 非空判断

  // 收集数据
  let data = serialize('#myform');
  // console.log(data);
  // 写ajax请求把数据发送回服务端
  let xhr = new XMLHttpRequest();
  xhr.open('get','http://127.0.0.1:8080/addHero?'+data);
  xhr.send();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status === 200){
      let res = JSON.parse(xhr.responseText);
      if(res.code === 200){
        alert(res.msg);
      }
    }
  }
}