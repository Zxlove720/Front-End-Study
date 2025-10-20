// 返回两个数之和
let a = +prompt("请输入第一个数")
let b = +prompt("请输入第二个数")
function sum(a = 0, b = 0) {
  return a + b
}
document.writeln(`${a} + ${b} = ${sum(a, b)}`)