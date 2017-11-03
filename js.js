/*
//TDZ
var tmp = 123;
console.log(tmp);
if (true) {
    tmp = 'abc'; // ReferenceError
    typeof tmp; //使用let声明变量时，只要变量在还没有声明完成前使用，就会报错
    let tmp;
}
if (true) {
    // TDZ开始 暂时性死区TDZ ：在代码块内，使用let命令声明变量之前，该变量都是不可用的
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError
    
    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}

function bar(x = y, y = 2) {
    return [x, y];
}
bar(); // 报错  原因：参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“

function bar(y = 2,x = y) {
    return [x, y];
}
bar(); // 正确返回

//let不允许在相同作用域内，重复声明同一个变量
// 报错
function func() {
    let a = 10;
    var a = 1;

}
// 报错
function func() {
    let a = 10;
    let a = 1;
}
//不能在函数内部重新声明参数
(function func(arg) {
    let arg; // 报错
    typeof arg;
})();
(function func(arg) {
    {
        let arg; // 不报错
    }
})();

//内层变量可能会覆盖外层变量
var tmp = new Date();
console.log(tmp);
function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}
f(); // undefined

function f1() {
    var n = 999;
    // function f2(){
    //     alert(n);
    // }
    return n;
};
alert(f1());

(function f1() {
    let n = 5;
    if (true) {
        let n = 10;
        let x = 2;
    }
    console.log(n); // 5
    console.log(x); //报错
}())

function f() { console.log('I am outside!'); }
(function () {
    function f() { console.log('I am inside!'); }
    if (false) {
    }
    f();//I am inside!

}());
f();//I am outside!

const foo = Object.freeze({});
foo.prop = 123;
alert(foo.prop);//undefined

import { A, B } from 'constants.js';
console.log(A);
console.log(B);

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  let [first, second, third, fourth, fifth, sixth] = fibs();
  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);
  console.log(fifth);
  console.log(sixth);// 5

  function doAdd(iNum) {
    alert(iNum + 20);
  }
  
  function doAdd(iNum) {
    alert(iNum + 10);
  }
  
  doAdd(10);
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
alert(object.getNameFunc()());

var name1 = "The Window";
var object1 = {
    name1: "My Object",
    getNameFunc1: function () {
        var that = this;
        return function () {
            return that.name1;
        };
    }
};
alert(object1.getNameFunc1()());

///arr.concat();
var a = [1,2,3];
var b = [4,5,6]
document.write(a.concat(b).concat(7,8));
document.write(typeof(a.concat(b).concat(7,8)));
///1,2,3,4,5,6,7,8 object

var a = [1,2,3];
document.write(a.join("-"));
document.write(typeof(a.join("-")));
///1-2-3 string

var a = [1,5,3];
document.write(a.sort());
document.write(typeof(a.sort()));
///1,3,5 object
var a = [1,5,3];
document.write(a.push(4));
document.write(typeof(a.push(4)));
///4 number

var a = [1,5,3];
document.write(a.reverse());
document.write(typeof(a.reverse()));
///3,5,1object

var a = [1,5,3];
document.write(a.splice(1,1,4,5));
document.write(a);
document.write(typeof(a.splice(1,1,4,5)));

var a = [1,5,3];
document.write(a.shift());
document.write(typeof(a.shift()));
//正则表达式
var pattern = new RegExp(' ','g');
var str = 'The best things in life are free';
console.log(pattern.test(str));
console.log(pattern.exec(str));
// pattern.compile("d");
console.log(pattern.test(str));
console.log(str.replace(pattern,'s'));
console.log(str.match(pattern));
console.log(str.search(pattern));
console.log(str.split(pattern));
console.log(RegExp.input);

function box(sum,num){
    return sum + num;
}
function sum(num){
    return num+10;
}
var result = box(sum(10),10); //sum(10)传递函数的返回值;
alert(result);

function box(sum,num){
    return sum(num);
}
function sum(num){
    return num+10;
}
var result = box(sum,10); //将sum作为函数进行传递;
alert(result);

function box(num){
    if(num<1){
        return 1;
    }else{
        return num * arguments.callee(num-1);  //阶乘，递归  arguments.callee 复制调用自身函数
    }
}
alert(box(3));

function box(num1,num2){
    return num1+num2;
}
function saybox(num1,num2){
    return box.apply(this,[num1,num2]);
}
function saybox2(num1,num2){
    return box.apply(this,arguments);
}
alert(box(10,10));
alert(saybox(10,10));
alert(saybox2(10,10));

alert(global);//undefined


//面向对象

function createObject(name,age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.run = function(){
        return this.name +this.age;
    }
    return obj;
};
function createObject2(name,age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.run = function(){
        return this.name +this.age;
    }
    return obj;
};
var box1 = createObject('lee','20');
var box2 = createObject2('jack','10');
alert(box1 instanceof Object);
alert(box2 instanceof Object);


function Box(name,age){
    this.name = name;
    this.age = age;
    this.run = function (){
        return this.name +this.age;
    }
}

var box3 = new Box('mary',20);
var box4 = new Box('leo',10);
alert(box3 instanceof Object);
alert(box4 instanceof Object);

var o = new Object();
Box.call(o,'lee',20);
alert(o.run());

*/

function obj(o){
    function F(){};
    F.prototype = o;
    return new F();
}
function create(o){
    var obj = o;
    return f;
}
