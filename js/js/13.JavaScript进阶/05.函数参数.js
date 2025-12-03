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
// 更加推荐使用剩余参数
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


// 展开运算符
// ...是展开运算符，可以将一个数组展开
const array = [1, 2, 3, 4, 5]
console.log(...array) // 输出1 2 3 4 5
// 数组的join方法也可以达到同样的效果
console.log(array.join(` `))
// 展开运算符和函数中的剩余参数从语法看是一致的，但是剩余参数只会出现在函数的形参列表中
// 数组是没有max、min等方法求最大最小值的，可以将Math中的max方法和min方法配合展开运算符使用求数组的最值
function getMax(array) {
  return Math.max(...array)
}
function getMin(array) {
  return Math.min(...array)
}
const arr = [1, 4, 7, 8, 5, 2, 3, 6, 9]
console.log(getMax(arr));
console.log(getMin(arr));
// 还可以使用展开运算符合并数组
const arr1 = [1, 3, 5, 7, 9]
const arr2 = [2, 4, 6, 8, 10]
const all = [...arr1, ...arr2]
console.log(all);


