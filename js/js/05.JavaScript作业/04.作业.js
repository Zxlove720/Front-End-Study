// let fn = function () {
//   console.log(`这是一个匿名函数`)
// }

// fn();

// (function () {
//   console.log(`这是一个立即函数`)
// }());

// (function () {
//   console.log(`这是立即函数的另外一种写法`)
// })();


// 练习题2：
// 目标：求和函数封装练习
// 要求:
// 1. 封装函数, 名字为sum
// 2. 功能: 根据传入的两个数,求和并且返回求和的结果（函数必须有return返回值）
// function getSum(a, b) {
//   return a + b
// }
// console.log(getSum(1, 2))


// 练习题3：
// 目的: 封装函数, 复习函数的基本写法。
// 需求：实现两个数的值交换(函数版本)
// 分析:
// 1. 函数名为 changeNum()
// 2. 调用函数时,  `changeNum(1，2)`
// 3. 经过函数内部处理后,输出  `第一个值的结果是2  第二个值的结果是1`
// 4. 可以多调用两次
// function changeNum(a, b) {
//   return [b, a]
// }
// let number1 = 5
// let number2 = 8
// console.log(number1 + " " + number2)
// let result = changeNum(number1, number2)
// number1 = result[0]
// number2 = result[1]
// console.log(number1 + " " + number2)


// ### 练习题4：
// 目的:复习函数的声明与调用
// 题目：封装余额函数
// 要求:
// 1. 运行程序后, 浏览器显示输入确认框(prompt)
// 2. 第一个输入确认框提示输入银行卡余额
// 3. 第二个输入确认框提示输入当月食宿消费金额
// 4. 第三个输入确认框提示输入当月生活消费金额
// 5. 输入完毕后,在页面中显示银行卡剩余金额
// 6. 提示: 所有功能代码封装在函数内部（函数需要把余额返回）
// function remainMoney(money, food, life) {
//   let remain = money - food - life
//   return remain > 0 ? remain : "余额不足"
// }
// let money = +prompt(`请输入银行卡余额`)
// let food = +prompt(`请输入当月食宿消费`)
// let life = +prompt(`请输入当月生活消费`)
// document.writeln(`你这个月的余额是：${remainMoney(money, food, life)}`)


// ### 练习题5:
// 目标：封装一个函数,可以求任意数组的和 或 平均值
// 要求：
// 函数可以传递2个参数，比如handleData(arr, true)  `handleData 处理数据的意思`
// 参数一：接受实参传递过来的数组
// 参数二: 布尔类型  如果是true或者不传递参数是求和操作，如果传递过来的参数是false则是求平均值
function average(array = [], flag = true) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  if (flag) {
    return sum
  } else {
    return Math.round(sum / array.length)
  }
}
let array = [1, 2, 3, 5, 6, 4, 8, 7]
console.log(`数组的和是${average(array)}，数组的平均值是${average(array, false)}`)


// 拓展题1
// 需求：封装some函数查看数组是否存在某个元素  。
// - 要传递2个参数 元素、数组
// - 如果数组存在元素则返回true，如果没有存在元素就返回 false
// 例如检测香蕉是否存在于数组['苹果', '香蕉', '橘子', '荔枝', '梨子']中，返回结果是 true
// 格式如下：

//  javascript
//  function some(ele, arr = []) {
// 	// 里面写业务逻辑
//  }
// let re = some('荔枝', ['苹果', '香蕉', '橘子', '荔枝', '梨子'])
// console.log(re) // true
// let re1 = some('榴莲', ['苹果', '香蕉', '橘子', '荔枝', '梨子'])
// console.log(re1) // false
// ~~~
function inArray(element, array = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true
    }
  }
  return false
}
let fruits = ['苹果', '香蕉', '橘子', '荔枝', '梨子']
console.log(inArray(`荔枝`, fruits))
console.log(inArray(`西瓜`, fruits))

// ### 拓展题2

// 需求：  封装 findeIndex 函数返回查找元素在数组中的索引号。

// - 要传递2个参数 元素、数组
// - 如果找到，则返回查找元素在数组中的索引号，如果查找不到，则返回 -1

// 例如检测 香蕉    数组['苹果', '香蕉', '橘子', '荔枝', '梨子']中， 返回结果是  1

// 格式如下：
