// 本地存储分为两个区域
// localStorage
// 键值对存储，并且只能存储字符串，对于对象必须先处理再存储浏览器关闭也不丢失
// 存
localStorage.setItem(`username`, `wzb`)
// 取
console.log(localStorage.getItem(`username`))
// 改 setItem()方法如果没有对应的键则存储，如果有则进行改变
localStorage.setItem(`username`, `zxl`)
console.log(localStorage.getItem(`username`))
// 删
localStorage.removeItem(`username`)
console.log(localStorage.getItem(`username`))
// 删除localStorage中的全部内容（慎用）
localStorage.clear()
// 在浏览器的开发者工具中也可以操作localStorage中存储的数据，一般不用

// 操作对象
const user = {
  username: `张三`,
  age: 20,
  gender: `male`
}
// 因为localStorage中只能存储字符串，所以说对于对象不能直接进行存储
// localStorage.setItem(`user`, user)
// console.log(typeof localStorage.getItem(`user`))
// console.log(localStorage.getItem(`user`))

// 需要将对象序列化为JSON字符串进行存储，在使用时将JSON字符串反序列化为对象使用
// JSON.stringify可以将对象序列化为JSON字符串
localStorage.setItem(`user`, JSON.stringify(user))

console.log(typeof localStorage.getItem(`user`))
console.log(localStorage.getItem(`user`))
// JSON.parse可以将JSON字符串反序列化为对象
console.log(typeof JSON.parse(localStorage.getItem(`user`)))
console.log(JSON.parse(localStorage.getItem(`user`)))




// sessionStorage
// 生命周期是浏览器的生命周期，浏览器关闭则丢失