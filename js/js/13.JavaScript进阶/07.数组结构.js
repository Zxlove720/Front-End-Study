const array = [1, 2, 3, 4, 5]
// 数组解构的本质就是变量赋值
const [one, two, three, four, five] = array
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);

// 使用数组解构交换两个数的值
let a = 99
let b = 66
console.log(a, b)
  ;[b, a] = [a, b]
console.log(b, a)

