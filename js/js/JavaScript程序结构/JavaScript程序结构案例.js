// 判断闰年
// let year = +prompt("请输入想要判断的年份")
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
//   document.write(`${year}是闰年`)
// } else {
//   document.write(`${year}不是闰年`)
// }

// 三元运算符求三个数最大值
// let number1 = +prompt("请输入第一个数")
// let number2 = +prompt("请输入第二个数")
// let number3 = +prompt("请输入第三个数")
// document.write(`${number1}、${number2}、${number3}中最大的数字是${number1 > number2 ? (number1 > number3 ? number1 : number3) : (number2 > number3 ? number2 : number3)}`)

// switch简易计算器
// let number1 = +prompt("请输入第一个数")
// let number2 = +prompt("请输入第二个数")
// let operation = prompt("请输入操作符")
// switch (operation) {
//   case '+':
//     document.write(`${number1}${operation}${number2} = ${number1 + number2}`)
//     break
//   case '-':
//     document.write(`${number1}${operation}${number2} = ${number1 - number2}`)
//     break
//   case '*':
//     document.write(`${number1}${operation}${number2} = ${number1 * number2}`)
//     break
//   case '/':
//     document.write(`${number1}${operation}${number2} = ${number1 / number2}`)
//     break
//   case '%':
//     document.write(`${number1}${operation}${number2} = ${number1 % number2}`)
//     break
//   case '**':
//     document.write(`${number1}${operation}${number2} = ${number1 ** number2}`)
//     break
//   default:
//     document.write("运算符输入违法")
// }

// // while求偶数和
// let start = +prompt("请输入起始数字")
// let end = +prompt("请输入末尾数字")
// let i = start
// let sum = 0
// while (i <= end) {
//   if (i % 2 == 0) {
//     sum += i
//   }
//   i++
// }
// document.write(`${start}和${end}之间的偶数和为${sum}`)

// 简易ATM机
let summary = 0
let money = 0
let flag = 1
while (flag) {
  let choice = +prompt("请选择操作：\n1.存钱\n2.取钱\n3.查看余额\n4.退出")
  switch (choice) {
    case 1:
      money = +prompt("请输入要存入的金额")
      summary += money
      break
    case 2:
      money = +prompt("请输入要取出的金额")
      if (summary < money) {
        alert("余额不足")
        continue
      }
      summary -= money
      break
    case 3:
      alert(`您的余额还有${summary}`)
      break
    case 4:
      flag = 0
      break
    default:
      alert("请输入合法的操作")
  }
}