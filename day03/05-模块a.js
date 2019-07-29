
// function getRandom(n,m){
//   Math.floor(Math.random() * (m-n+1) + n);
// }

// var a = 10;


// module.exports = {
//   a:10,
//   getRandom: function(n,m){
//     return Math.floor(Math.random() * (m-n+1) + n);
//   }
// };



// exports.a = 10;
// exports.getRandom = function(){
//   return Math.floor(Math.random() * (m-n+1) + n);
// }

// module.exports.a = 20;
// module.exports.getRandom = function(){
//   return Math.floor(Math.random() * (m-n+1) + n);
// }


// exports = {
//   a: 30
// }

/**
 * 以上三个方式都可以向外暴露模块的成员，但是
 *    module.exports
 *      模块最终暴露的对象是以 module.exports 为准的
 *    exports
 *      如果没有 module.exports ，就用它暴露对象
 * 
 * 综上，我们一般在封装nodejs的模块的时候
 * 
 *  一般就是为了严谨起见
 *    只会使用  module.exports
 * 
 */

//  module.exports.a = 10;
//  exports.b = 20;

//  exports = {
//     c : 30
//  }

//  module.exports = {
//    d: 40
//  }