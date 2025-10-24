console.log(Math.ceil(1.2)) // 输出2
console.log(Math.ceil(-1.2)) // 输出-1
// ceil n.天花板 这个方法是向上（X的正轴）取整

console.log(Math.floor(1.9)) // 输出1
console.log(Math.floor(-1.9)) // 输出-2
// floor n.地板 这个方法是将数字向下（X的负轴方向）取整

console.log(Math.round(1.4)) // 输出1
console.log(Math.round(1.5)) // 输出2
console.log(Math.round(-1.4)) // 输出-1
console.log(Math.round(-1.51)) // 输出-2
console.log(Math.round(-1.5)) // 输出-1

let obj = {
  username: "zhangsan",
  password: "123456",
  password: "654321"
}
console.log(obj.password) // 输出654321，后写的覆盖先写的

console.log(typeof null)

let user = null
console.log(user) // 输出null