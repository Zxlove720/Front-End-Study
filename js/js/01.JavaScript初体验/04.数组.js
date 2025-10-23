// 和Java一样，JavaScript也有数组，同样是从索引0开始，同样是使用[]声明数组，大体和Java中的数组相似
let array = [1, 2, 3, 4, 5]
document.write(array)
console.log(array[0])
alert(array.length)
// 数组越界不会报错，只是会出现undefined
console.log(array[5])
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
