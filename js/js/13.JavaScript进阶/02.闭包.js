// 闭包 = 内层函数 + 外层函数变量
function outer() {
  let number = 10
  function inner() {
    // 在内层函数中使用了外层函数的变量，构成了闭包，闭包是一个作用域
    console.log(number)
  }
  inner()
}
outer()