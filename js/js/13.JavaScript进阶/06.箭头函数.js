const fn = function () {
  console.log(`这是一个普通函数`)
}

// 先改为箭头函数写法
// const fn2 = () => {
//   console.log(`这是一个箭头函数`)
// }

// 如果函数体只有一行，那么可以省略大括号
// const fn2 = () => console.log(`这是一个箭头函数`)

// 如果函数有参数，并且只有一个时，可以省略形参的括号，直接写参数
// const fn2 = number => console.log(number)

// 如果函数体只有一行，并且需要返回值，那么可以省略return
const fn2 = x => x + 1 // 返回x + 1
console.log(fn2(1)) // 输出2

// 特别注意，如果箭头函数需要返回对象字面量，并且省略了大括号，则必须使用()包裹对象字面量
// 因为函数体本来是有大括号的，对象也是大括号，容易分不清楚
const fn3 = x => ({ username: `jack`, age: 18 })
console.log(fn3())

// 箭头函数属于表达式函数，所以说没有函数提升
// fn4()
// const fn4 = x => console.log(x)


