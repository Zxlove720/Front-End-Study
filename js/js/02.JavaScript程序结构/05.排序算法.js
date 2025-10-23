// 冒泡排序
// let array = []
// let n = +prompt("您想输入几个数")
// for (let i = 0; i < n; i++) {
//   array.push(+prompt(`请输入第${i + 1}个数`))
// }
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length - i - 1; j++) {
//     if (array[j] > array[j + 1]) {
//       let temp = array[j + 1]
//       array[j + 1] = array[j]
//       array[j] = temp
//     }
//   }
// }
// console.log(array)


// 数组默认的排序
let array = []
let n = +prompt("您想输入几个数")
for (let i = 0; i < n; i++) {
  array.push(+prompt(`请输入第${i + 1}个数`))
}
// 升序
array.sort(function (a, b) {
  return a - b
})
// 降序
array.sort(function (a, b) {
  return b - a
})
document.write(array)