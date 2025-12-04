// 语法和数组解构相同
// 特别注意：变量名必须和对象属性值相同
const user = {
  username: `jack`,
  gender: `male`,
  age: 18
}

// const array = [1, 2, 3, 4, 5]
// let one = 1
// let two = 2
//   ;[one, two, three] = array
// console.log(one)
// console.log(two)
// console.log(three)


// let username = 1
// let gender = `female`
// let age = 10;
// ({ uname, gender, age } = user)

// // 如果变量名和对象属性名不一样，那么无法进行解构 
// console.log(uname)
// console.log(gender)
// console.log(age)


// 可以通过:给变量绑定属性达到改名的效果
// const { age, gender, username: uname } = user
// console.log(uname)
// console.log(gender)
// console.log(age)

// // 数组对象解构
// const objArray = [{ id: 1, price: 12.0 }, { id: 2, price: 13.0 }]
// const [{ id, price }] = objArray
// console.log(id)
// console.log(price)

// 多级数组对象解构
const pig = {
  name: `pig`,
  family: {
    mother: `mother`,
    father: `father`,
    brother: `brother`
  },
  age: 10
}
const { name, family: { mother, father, brother }, age } = pig
console.log(name)
console.log(mother)
console.log(father)
console.log(brother)
console.log(age)

