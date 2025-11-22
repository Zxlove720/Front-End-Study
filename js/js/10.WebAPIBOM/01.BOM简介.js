// WebAPI分为DOM和BOM
// BOM(Browser Object Model)
// BOM是JavaScript中的顶级对象，是整个浏览器对象，包含了DOM对象
console.log(document === window.document);


// console alert 函数调用等都是属于BOM的
// var定义的全局作用域的变量也是BOM的

window.console.log(123)

window.alert(`hello world`)

function sayHello() {
  console.log(`hello`)
}

window.sayHello()


var variable = 10
window.console.log(window.variable)

let number = 10
window.console.log(window.number)


