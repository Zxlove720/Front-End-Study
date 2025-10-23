// 在JavaScript中使用let关键字声明一个变量，不需要声明变量的类型，使用变量大体上和Java相同
// let a = 10;
// let b = 20;
// console.log("a的值是" + a);
// console.log("b的值是" + b);

// prompt函数可以进行输入，相当于Scanner；当然也可以使用变量接受输入的值
// let username = prompt("请输入用户名");
// let password = prompt("请输入你的密码");
// alert("欢迎" + username);
// console.log("密码是：" + password);

let a = 10;
let b = 20;
console.log(a, b);
let c = a + b;
a = c - a;
b = c - b;
console.log(a, b)


// JavaScript中的变量命名规则和Java完全相同，不做过多赘述

// 小练习
// let username = prompt("请输入您的姓名");
// let age = prompt("请输入您的年龄");
// let gender = prompt("请输入您的性别");
// document.write("<h2>欢迎用户：" + username + "</h2>")
// document.write("<h2>您的年龄是：" + age + "</h2>")
// document.write("<h2>您的性别是：" + gender + "</h2>")

