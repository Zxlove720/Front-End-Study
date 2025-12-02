// // 局部作用域可以使用全局作用域的变量
// // const number = 10
// // console.log(number)
// // function fn() {
// //   console.log(number)
// // }

// // 全局作用域不能使用局部作用域的变量
// // function fn2() {
// //   const number2 = 20
// //   console.log(number2)
// // }
// // console.log(number2)

// // 作用域使用变量遵循就近原则
// function fn3() {
//   let number3 = 30
//   function fn4() {
//     // 因为fn4的作用域内没有number3，根据就近原则，会去fn3的作用域寻找number3使用
//     number3 += 10
//     console.log(number3)
//   }
//   fn4()
// }
// fn3()

// // 块作用域
// // for (let i = 0; i <= 10; i++) {
// //   console.log(i)
// // }
// // // 块作用域外无法使用内部定义的变量
// // console.log(i)

// // var声明的变量不会产生块级作用域，导致在for循环中使用var定义的i会变成一个全局变量
// for (var i = 0; i <= 10; i++) {
//   console.log(i)
// }
// console.log(i)
// // let和const会产生块级作用域


// // 在函数中不使用任何关键字声明的变量是全局变量——十分不推荐这样使用
// function fn() {
//   number = 10
// }
// // 必须先调用函数，变量才会创建，然后才可以使用
// fn()
// console.log(number)


// 作用域链
let a = 1
let b = 2
function fn() {
  let a = 3
  function gn() {
    // gn的局部作用域中，没有a，那么就会在父级作用域fn中寻找，直到寻找到全局作用域
    console.log(a)
    a = 5
    console.log(a)
  }
  gn()
}
fn()
// 在不同作用域中寻找，嵌套关系串联形成作用域链；作用域链本质是变量查找机制
