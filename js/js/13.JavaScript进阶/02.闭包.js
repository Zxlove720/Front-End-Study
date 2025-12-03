// 闭包 = 内层函数 + 外层函数变量
// function outer() {
//   let number = 10
//   function inner() {
//     // 在内层函数中使用了外层函数的变量，构成了闭包，闭包是一个作用域
//     console.log(number)
//   }
//   inner()
// }
// outer()

// 闭包作用1：让外部可以访问到函数内部的变量
// function outer() {
//   let number = 10
//   function inner() {
//     console.log(number)
//   }
//   return inner
// }
// // 通过闭包让外层访问到了outer函数内部的number变量
// const fn = outer()
// fn()

// 闭包作用2：实现数据私有化，全局作用域的数据容易被误改，可以使用闭包封闭数据
// let count = 0
// function fn() {
//   count++
//   console.log(`函数被调用了${count}次`)
// }
// 什么地方都可以修改count的值，统计可能出错，并不安全

function outer() {
  let count = 0
  return function inner() {
    count++
    console.log(`函数被调用了${count}次`)
  }
}
const result = outer()