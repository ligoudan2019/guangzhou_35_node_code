/**
 * 在nodejs的服务器里面如何处理post回来的数据
 * 
 *  post请求的特点
 *    - 把数据放在请求体里面的，跟url无关
 *    - 数据量可能会很大
 * 
 *  直接判断req.url
 *    在请求事件里面
 *      给请求对象注册两个事件
 *        正在接收
 *          data
 *            let data ='';
 *            req.on('data',(chunck)=>{
 *              chunck - 就是每次上传回来的数据
 *              在这个函数里面把每次获取到的数据，拼接到一起
 * 
 *              data += chunck;
 *            })
 *        接收完毕
 *          end
 *            req.on('end',()=>{
 *              //处理数据
 *              
 *            })
 */