// 动态参数
// 函数可以传递参数，函数内部维护了一个伪数组arguments存放所有参数，可以遍历获取这些参数
// 箭头函数中没有arguments
// function getSum(a, b) {
//   console.log(arguments)
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(getSum(1, 2, 3, 4, 5))

// 剩余参数
// 当参数列表参数小于实参个数，在函数参数列表按顺序获取实参之后，可以使用剩余参数获取剩下的实参
// 剩余参数是一个真数组，有数组对应的方法
function getSum(a, b, ...c) {
  // 参数列表中的a，b可以正常按照顺序获取实参1，2；剩下的实参3，4，5就被剩余参数c获取
  console.log(a, b)
  console.log(c)
  let sum = 0
  for (let i = 0; i < c.length; i++) {
    sum += c[i]
  }
  return sum
}

console.log(getSum(1, 2, 3, 4, 5))