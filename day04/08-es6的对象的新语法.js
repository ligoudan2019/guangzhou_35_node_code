let a = 10;
let b = 20;
let c = 30;

let obj = {a,b,c};
console.log(obj);

// let obj2 = {
//   方法名(){}
// }

let gd = {
  name : '狗蛋',
  age : 12,
  sayHi(){
    console.log('你好我叫'+this.name);
  },
  sayHi: function(){}
}
gd.sayHi();

// class Person{
//   constructor(){}
//   sayHi(){}
// }