// for循环1-100岁
// for (let i = 1; i <= 100; i++) {
//   console.log(`这是第${i}岁`)
// }

// for循环1-100之间偶数和
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i
//   }
// }
// console.log(sum);

// 99乘法表
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${j} * ${i} = ${i * j} `)
  }
  document.write("<br>")
}