// Math.random()会生成[0, 1)的随机浮点数
console.log(Math.random())

// 生成从n - m的整数
console.log(Math.floor(Math.random() * (10 - 5 + 1) + 5))

// 遍历数组
let array = ["赵云", "关羽", "张飞", "黄忠", "马超"]
for (let i = 0; i < array.length; i++) {
  let randomNumber = Math.floor(Math.random() * array.length)
  document.write(array[randomNumber])
  array.splice(randomNumber, 1)
}