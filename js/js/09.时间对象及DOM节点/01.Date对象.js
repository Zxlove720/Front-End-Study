const date = new Date()
console.log(date)
const date1 = new Date(`2025-11-23`)
console.log(date1)
const date2 = new Date(`2025-09-18`)
console.log(date2);


console.log(date.getFullYear())
// 特别注意，date.getMonth的值是0-11，所以说正常使用应该+1
console.log(date.getMonth() + 1)
console.log(date.getDate())
console.log(`星期${date.getDay()}`)
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

console.log(`-----------------------------------`);


console.log(date1.getFullYear())
// 特别注意，date.getMonth的值是0-11，所以说正常使用应该+1
console.log(date1.getMonth() + 1)
console.log(date1.getDate())
// 特别注意，date.getDay可以获取星期几，但是取值是0-6，星期日就是0，其他是正常的
console.log(`星期${date1.getDay()}`)
console.log(date1.getHours())
console.log(date1.getMinutes())
console.log(date1.getSeconds())

document.write(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}
 ${date.getHours()}:${date.getMinutes()}`)
