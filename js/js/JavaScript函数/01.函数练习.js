// 返回两个数之和
// let a = +prompt("请输入第一个数")
// let b = +prompt("请输入第二个数")
// function sum(a = 0, b = 0) {
//   return a + b
// }
// document.writeln(`${a} + ${b} = ${sum(a, b)}`)


// 求数组最值
function max(array = []) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    max = max > array[i] ? max : array[i]
  }
  return max
}

function min(array = []) {
  let min = array[0]
  for (let i = 1; i < array.length; i++) {
    min = min < array[i] ? min : array[i]
  }
  return min
}


let n = +prompt("要输入几个数字？")
let array = []
for (let i = 0; i < n; i++) {
  array.push(+prompt(`请输入第${i + 1}个数`))
}
console.log(max(array))
console.log(min(array))
