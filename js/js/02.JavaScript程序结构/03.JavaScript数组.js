// C
// push方法
// let array = [1, 2, 3, 4, 5]
// // push方法会在数组的末尾新增元素，并且有返回值，返回值是数组新增元素之后的长度
// console.log(array.push(6));
// console.log(array) // 输出1,2,3,4,5,6
// // push方法可以新增一个或者多个元素
// console.log(array.push(7, 8, 9, 10)) // 返回值是10，代表新增元素之后现在数组的长度是10
// console.log(array) // 输出1,2,3,4,5,6,7,8,9,10

// // unshift方法
// let arr = [2, 3, 4, 5]
// // unshift方法会在数组的开头新增元素，并且有返回值，返回值是数组新增元素之后的长度
// arr.unshift(1)
// console.log(arr) // 输出1,2,3,4,5
// arr.unshift(-1, 0)
// console.log(arr.unshift(-2))



// R
// 索引直接访问，和Java一样。**并且JavaScript数组也有length属性来记录当前数组的长度：**
// let array = [1, 2, 3, 4, 5]
// // 取得数组中最后一个元素
// console.log(array[array.length - 1])
// 并且JavaScript中数组越界访问不会报错，只会得到一个undefined值
// console.log(array[5]) // 输出undefined



// U
// // 因为数组可以通过索引直接访问，那么修改元素就十分简单，**直接通过索引取得想要修改的元素，然后修改即可：**
// let array = [1, 2, 3, 4, 5]
// array[4] = 6
// console.log(array) // 输出1,2,3,4,6



// D
// // pop方法
// let array = [1, 2, 3, 4, 5]
// // pop方法会删除数组末尾的元素，并且将删除的元素返回
// console.log(array.pop()) // 输出5，删除了最后一个元素5，并且将其返回
// console.log(array) // 输出1,2,3,4

// // shift方法
// let arr = [1, 2, 3, 4, 5]
// // shift方法删除数组的首个元素，并且将删除的元素返回
// console.log(arr.shift(1)) // 输出1，删除了首个元素1，并且将其返回
// console.log(arr) // 输出2,3,4,5

// splice()
// splice(start, deleteCount) start是开始删除的起始索引，deleteCount是从该索引开始往后删除几个元素
// 如果deleteCount的参数为0，那么就会从start开始删除后面的所有元素
let array = [1, 2, 3, 4, 5]
array.splice(0, 2) // 从0索引开始，往后删除两个元素，会删除1和2
console.log(array) // 输出3,4,5

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(2) // 因为没有deleteCount这个参数，所以说会从2索引开始，删除后面的所有元素，整个数组只会剩下1和2
console.log(arr) // 输出1,2

// 常用的删除指定元素的方法
let arr2 = [1, 2, 3, 4, 5]
let index = +prompt("请输入你想要删除元素的索引")
arr2.splice(index, 1)
console.log(arr2);
