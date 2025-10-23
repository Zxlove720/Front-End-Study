let obj = {
  username: "jack",
  age: 18,
  hobby: "java"
}

// 对象遍历的方法

// 1.通过对象.属性进行逐个属性遍历
// 这种方式和java的对象属性调用相同，比较容易理解
console.log(obj.username)
console.log(obj.age)
console.log(obj.hobby)

// 2.通过 对象["属性"]进行属性遍历
// 这种方式和数组访问类似，注意[]中的属性必须是string
console.log(obj["username"])
console.log(obj["age"])
console.log(obj["hobby"])

// 3.通过for in获取属性进行遍历
let array = [1, 2, 3, 4, 5]
// 通过for in 遍历一个数组，可以获得数组的索引。但是返回的数组索引类型是string
for (let k in array) {
  console.log(k)
  console.log(typeof (k))
}
// 通过for in 遍历一个对象，可以获得对象的属性。但是返回的对象属性类型是string
for (let k in obj) {
  console.log(k)
  console.log(typeof k)
  // 由于获取的对象属性是string类型的，如果使用对象.属性就会出错
  // console.log(obj.k) 
  // 所以只能使用对象["属性"]进行遍历
  console.log(obj[k])
}


let students = [
  { name: "小明", age: 18, gender: "男", hometown: "重庆" },
  { name: "小红", age: 18, gender: "女", hometown: "重庆" },
  { name: "小花", age: 18, gender: "女", hometown: "重庆" },
  { name: "小亮", age: 18, gender: "男", hometown: "重庆" }
]

document.write(`
  <table>
  <caption>学生信息表</caption>
  <thead>
  <tr>
  <th>用户名</th>
  <th>年龄</th>
  <th>性别</th>
  <th>籍贯</th>
  </tr>
  </thead>
  <tbody>
  `)

for (let i in students) {
  let student = students[i]
  document.write(`<tr>`)
  for (let j in student) {
    document.write(`
      <td>${student[j]}</td>
      `)
  }
  document.write(`</tr>`)
}
document.write(`
  </tbody>
  </table>
  `)
