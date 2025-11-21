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

function getTime() {
  const date = new Date()
  const year = date.getFullYear()
  let month = date.getMonth()
  month = month >= 9 ? month + 1 : '0' + (month + 1)
  let day = date.getDate()
  day = day >= 10 ? day : '0' + day
  let hour = date.getHours()
  hour = hour >= 10 ? hour : '0' + hour
  let minute = date.getMinutes()
  minute = minute >= 10 ? minute : '0' + minute
  let second = date.getSeconds()
  second = second >= 10 ? second : '0' + second
  box.innerHTML = (`${year}-${month}-${day}
 ${hour}:${minute}:${second}`)
}

const box = document.querySelector(`.box`)
getTime()
const timer = setInterval(function () {
  getTime()
}, 1000)

// 几种简单的获取有格式时间的方法（格式是常规的）
// 获取时间（日期 + 时间）
console.log(date.toLocaleString())
// 获取时间（只有日期）
console.log(date.toLocaleDateString())
// 获取时间（只有时间）
console.log(date.toLocaleTimeString());


