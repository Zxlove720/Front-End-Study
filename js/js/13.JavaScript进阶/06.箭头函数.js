// const fn = function () {
//   console.log(`这是一个普通函数`)
// }

// 先改为箭头函数写法
// const fn2 = () => {
//   console.log(`这是一个箭头函数`)
// }

// 如果函数体只有一行，那么可以省略大括号
// const fn2 = () => console.log(`这是一个箭头函数`)

// 如果函数有参数，并且只有一个时，可以省略形参的括号，直接写参数
// const fn2 = number => console.log(number)

// 如果函数体只有一行，并且需要返回值，那么可以省略return
// const fn2 = x => x + 1 // 返回x + 1
// console.log(fn2(1)) // 输出2

// 特别注意，如果箭头函数需要返回对象字面量，并且省略了大括号，则必须使用()包裹对象字面量
// 因为函数体本来是有大括号的，对象也是大括号，容易分不清楚
// const fn3 = x => ({ username: `jack`, age: 18 })
// console.log(fn3())

// 箭头函数属于表达式函数，所以说没有函数提升
// fn4()
// const fn4 = x => console.log(x)

// 箭头函数的目的就是为了让函数表达式更加简洁，适用于那些本来需要匿名函数的地方
// 箭头函数是没有this的

// 箭头函数没有arguments
// const fn = x => console.log(arguments) // 箭头函数中没有arguments，所以说报错arguments is not defined
// fn()
// 箭头函数只有剩余参数 使用剩余参数不能省略()
// const fn = (...x) => console.log(x)
// fn(1, 2, 3, 4, 5)


// 箭头函数没有this
// 箭头函数不会创建自己的this，只会从自己的作用域链的上一层沿用this，直到window
// console.log(this) // 函数调用者是window，所以说这里的this指向window

// const simple = function () {
//   console.log(this)
// }
// simple() // 函数调用者是window，所以说这里的this指向window

// document.documentElement.addEventListener(`click`, function () {
//   // this指向HTML元素
//   console.log(this)
// })

// document.documentElement.addEventListener(`click`, () => {
//   // 因为箭头函数没有this，它会从自己的作用域链的上一层沿用this，所以说this指向window
//   console.log(this)
// })

// const user = {
//   username: `jack`,
//   walk: () => console.log(this)
// }
// // this指向window
// 因为walk是箭头函数，没有自己的this，所以说会从自己作用域链上一层沿用this，对象没有this，所以说会从window中沿用this，指向window
// user.walk()


const user = {
  username: `jack`,
  sleep: function () {
    console.log(this)
    const fn = () => console.log(this)
    fn()
  }
}
// 普通函数作为对象方法被调用时，this指向调用它的对象
// sleep是普通函数，所以说this指向调用它的对象
user.sleep()

// 因为箭头函数没有this，所以说即使DOM事件是匿名函数，但是因为DOM事件回调函数有时需要this，所以说不建议使用箭头函数作为DOM事件回调函数

