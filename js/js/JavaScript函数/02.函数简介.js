// function getSum(a, b, c) {
//   return a + b + c
// }
// console.log(getSum(1, 2)) // 控制台输出NaN


let number = 10 // 这个变量是全局变量，整个js文件可用
function fn1() {
  console.log(number)
}
fn1() // 控制台输出10