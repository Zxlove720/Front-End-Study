// 和Java类似，JavaScript也有字符串类型
// 使用'' 或 "" 或 ``包裹的都是字符串，常用的是''和``

// 单引号（双引号）会和自己最近的单引号进行匹配，如果在单引号中写单引号就会出现问题，此时可以使用转义字符
// let str = '我是'字符串''
// 因为就近匹配的关系————'我是'就单独成为了一个字符串，而后面的单引号构成了一个空串
let str1 = '我是\'字符串\'' // 使用转义字符可以解决问题
let str2 = '我是"字符串"'   // 在单引号中使用双引号也不会报错
let str3 = "我是\"字符串\""
let str4 = "我是'字符串'"
let str5 = `我是字符串\`也是\``
let str6 = `我是'字符串'`


// 和Java类似，JavaScript也重载了+运算符：不但可以加法运算，而且可以拼接字符串
// 当使用+运算符并且一个操作数是字符串时，会优先考虑字符串拼接从而得到一个字符串
// let username = "用户名"
// let password = "密码"
// console.log(username + password)
// console.log(username + "root");
// console.log(password + 123456)
// console.log(username + undefined);
// console.log(username + null);
// console.log(username + true);

// let username = prompt("请输入您的用户名")
// let password = prompt("请输入您的密码")
// document.writeln("<h2>您的用户名是：" + username + "</h2>")
// document.writeln("<h2>您的密码是：" + password + "</h2>")

// 但是这样使用+运算符进行字符串拼接稍显麻烦并且不够优雅，所以说推荐使用模板字符串进行拼接
// 使用``包裹字符串，然后在${}中写想要拼接的字符串即可
// let username = prompt("请输入您的用户名")
// let password = prompt("请输入您的密码")
// document.writeln(`<h2>您的用户名是${username}</h2>`)
// document.writeln(`<h2>您的用户名是${password}</h2>`)
// 这样在面对复杂的拼接时可以更加得心应手，并且书写也更加的优雅，建议字符串拼接都使用模板字符串

// 不同数据类型的显式转换和隐式转换
// 隐式转换
let a = "4"
let b = 5
console.log(a + b); // 45 当一个字符串类型 + 任意类型，会将其他类型数据转换为字符串类型进行拼接
console.log(a - b); // 在进行运算操作时刻，操作符如果不是+，而是其他的运算符，会将其他类型的数据尝试转换为数字类型，再进行数学运算
console.log(a * b); // 20
console.log(parseInt(a / b)); // 0.8
console.log(a % b); // 4
console.log(a ** b); // 1024 
let c = false // false转换为数字类型是0，true是1
console.log(a - c)

// 
let d = "一"
console.log(1 / d); // 只有纯数字构成的字符串才可以被转换为数字类型进行计算，否则将会产生NaN问题







