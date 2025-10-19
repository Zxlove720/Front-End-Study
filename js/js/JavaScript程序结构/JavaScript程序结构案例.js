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
let number1 = +prompt("请输入第一个数")
let number2 = +prompt("请输入第二个数")
let operation = prompt("请输入操作符")
switch (operation) {
  case '+':
    document.write(`${number1}${operation}${number2} = ${number1 + number2}`)
    break
  case '-':
    document.write(`${number1}${operation}${number2} = ${number1 - number2}`)
    break
  case '*':
    document.write(`${number1}${operation}${number2} = ${number1 * number2}`)
    break
  case '/':
    document.write(`${number1}${operation}${number2} = ${number1 / number2}`)
    break
  case '%':
    document.write(`${number1}${operation}${number2} = ${number1 % number2}`)
    break
  case '**':
    document.write(`${number1}${operation}${number2} = ${number1 ** number2}`)
    break
  default:
    document.write("运算符输入违法")
}