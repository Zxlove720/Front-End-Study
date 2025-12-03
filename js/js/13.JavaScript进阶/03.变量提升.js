// 变量提升
// 实则是一个不好的东西
// 变量提升仅限于var声明的变量，允许变量在声明之前被访问

// 使用const或者let声明的变量，在声明之前访问都会直接报错
// console.log(number)
// const number = 10
// console.log(number)
// let number = 10


// 使用var声明的变量不会报错，在声明之前使用会得到undefined
console.log(number)
var number = 10

// 上述代码等价于
// var number
// console.log(number)
// number = 10
// 变量提升会先将var声明的变量提到当前作用域的最前面
// 但是只会提声明，并不会提升赋值，所以说使用该变量会得到undefined
// 然后依次执行代码

// 不建议使用var，也不建议在声明变量之前使用
