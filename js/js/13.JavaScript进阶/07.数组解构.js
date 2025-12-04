// const array = [1, 2, 3, 4, 5]
// // 数组解构的本质就是变量赋值
// const [one, two, three, four, five] = array
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);

// // 使用数组解构交换两个数的值
// let a = 99
// let b = 66
// console.log(a, b);
// // 如果是[a, b]数组作为一行代码的开头，这一行的前面必须使用;不然就会把[a, b]数组当成是上一行没写完的
// [b, a] = [a, b]
// console.log(b, a)

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i; j++) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]]
//       }
//     }
//   }
// }
// const sort = [5, 4, 3, 2, 1]
// bubbleSort(sort)
// console.log(sort)

// 变量少，单元值多
// const array = [0, 1, 2, 3, 4, 5]
// const [zero, one, two, ...number] = array
// console.log(zero)
// console.log(one)
// console.log(two)
// console.log(number)

// 变量多，单元值少
// const array = [0, 1, 2]
// const [zero, one, two, three = 3] = array
// console.log(zero)
// console.log(one)
// console.log(two)
// console.log(three)

// 忽略某些值
// const array = [0, 1, 2, 3, 4]
// const [, one, two, three, four, five = 5] = array
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
// console.log(five)

// 多维数组解构
const array = [1, 2, 3, [4, 5, [6, 7, 8, [9]]]]
const [, , , [four, five, [six, seven, eight, [nine]]]] = array
console.log(four)
console.log(five)
console.log(six)
console.log(seven)
console.log(eight)
console.log(nine)

