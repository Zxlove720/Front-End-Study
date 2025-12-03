// 和变量提升相似，函数提升也是可以在函数声明之前就直接使用

// fn()
// function fn() {
//   console.log(`我是函数提升`)
// }

// 上述代码等价于
// function fn() {
//   console.log(`我是函数提升`)
// }
// fn()

// 使用let接收函数表达式，因为let没有变量提升，所以说无法使用
// fn()
// let fn = function () {
//   console.log(`函数表达式没有函数提升`)
// }

// 使用var接收函数表达式，因为var有变量提升，则代码等价于：
// var fn
// fn()
// fn = function () {
//  console.log(`函数表达式没有函数提升`)
// }
// 执行到代码fn()时，var fn只是一个var声明的普通变量，没有赋值，使用函数调用则报错:"TypeError: fn is not a function"
fn()
var fn = function () {
  console.log(`函数表达式没有函数提升`)
}

// 函数提升是将所有的函数提升到当前作用域的最前面
// 函数提升是有好处的，可以使得函数声明更加灵活
// 函数表达式没有函数提升