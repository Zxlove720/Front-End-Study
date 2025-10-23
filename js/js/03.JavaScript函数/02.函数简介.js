// JavaScript不支持函数重载，个人觉得可以理解因为Java的重载是
// 根据形参列表的不同类型，不同长度，不同顺序（方法签名）实现的，
// 归根到底是依赖于形参列表的类型，而JavaScript中根本不需要定义形参类型
// 当然这是比较简单的理解，底层设计远比我的理解更加复杂。

// 虽然JavaScript不支持函数重载，但是可以写多个重名函数。
// 但是并非可以使用这些重名函数，其规则和CSS一样：后定义的函数会覆盖掉先定义的函数！
// function fn() {
//   console.log("第一个函数")
// }

// function fn() {
//   console.log("第二个函数")
// }
// fn() // 调用函数，控制台输出"第二个函数"
// 是因为第二个函数比第一个函数后写，所以说才会执行第二个函数；并不是因为调用时距离第二个函数更近


// java对于函数的传参有着严格的要求，参数个数，参数类型，实参和形参必须严格匹配，否则直接报错！
// 但是JavaScript中没有这样严格的要求——参数个数不匹配，甚至不传参数都不会报错，整个程序都会正常运行：
// function getSum(a, b) {
//   return a + b
// }
// console.log(getSum()) // 控制台输出NaN

// function getSum(a, b) {
//   return a + b
// }
// console.log(getSum(1, 2, 3)) // 控制台输出2，多传参的参数3会被函数忽略，形参只按照顺序接收了1和2

// function getSum(a, b, c) {
//   return a + b + c
// }
// console.log(getSum(1, 2)) // 控制台输出NaN
// 因为函数需要三个参数，但是调用时只传递了两个参数，形参列表按照顺序接收参数，
// 形参a和b接收到传递的参数1和2，但是没有参数给形参c获取，所以说c是undefined，这会导致a+b+c的结果是NaN。

// function getSum(a = 0, b = 0, c = 0) {  // 给函数形参的默认值为0
//   return a + b + c
// }
// console.log(getSum(1, 2)) // 此时控制台会输出3

// let number = 10 // 这个变量是全局变量，整个js文件可用
// function fn() {
//   console.log(number)
// }
// fn1() // 控制台输出10

// // 全局变量在整个js文件中都可用

// function fn() {
//   let number = 10 // 这个变量是局部变量，只在fn函数的作用域中有效
// }
// console.log(number) // 直接报错，因为在全局作用域中没有定义number这个变量

// let number = 10 // 这是全局变量
// function fn() {
// 	let number = 20 // 这是局部变量
// 	console.log(number) // 在局部变量的作用域中会优先考虑局部变量
// }
// fn()

// let number = 10
// function fn1() {
//   let number = 20
//   function fn2() {
//     let number = 30
//     function fn3() {
//       console.log(number)
//     }
//     fn3()
//   }
//   fn2()
// }
// fn1() // 控制台会输出30，这是由于JavaScript中变量的访问规则——优先访问离自己作用域最近的变量

// let fn = function (a, b) {
//   return a + b
// }
// console.log(fn(1, 2)) // 控制台会输出3

// console.log(fn(1, 2)) // 直接报错，Cannot access 'fn' before initialization（大概意思是不能在定义前使用）
// let fn = function (a, b) {
//   return a + b
// }

// 立即函数的两种定义方式
(function () { })();

(function () { }());

(function (a, b) {
  console.log(a + b)
})(1, 2); // 控制台会输出3


function test() {
  number = 10
}
test()
console.log(number) // 控制台会输出10