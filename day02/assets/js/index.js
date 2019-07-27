// 使用ajax请求获取所有的英雄数据
let tbody = document.querySelector('#tbody');
const xhr = new XMLHttpRequest();
xhr.open('get','http://127.0.0.1:8080/getAllHeros');
xhr.send();
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    // console.log(xhr.responseText);
    // 此时就或获取了数据，只要转换为对象，就可以操作了
    let res = JSON.parse(xhr.responseText);
    let html = '';
    res.forEach(e => {
      // console.log(e);
      html += `<tr>
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.gender}</td>
      <td><img src="${e.img}"></td>
      <td>
        <a href="./edit.html?id=${e.id}">修改</a> 
        <a data-id="${e.id}" href="javascript:void(0);">删除</a>
      </td>
    </tr>`;
    });

    // 把拼接好的字符串，放到tbody里面
    tbody.innerHTML = html;
  }
}