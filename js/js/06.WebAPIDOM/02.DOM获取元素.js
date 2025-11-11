// 通过CSS选择器的方式获取一个元素
// const div = document.querySelector(`div`)
// console.log(div)
// const div1 = document.querySelector(`div`)
// const div2 = document.querySelector(`.box`)
// console.log(div1 === div2)
// console.log(typeof div1)

// 通过CSS选择器获取多个元素
const liList = document.querySelectorAll(`ul li`)
console.log(liList)
console.log(typeof liList)
// 必须遍历才可以使用这些元素
for (let i = 0; i < liList.length; i++) {
  console.log(liList[i])
}
// 根据id获取一个元素
document.getElementById(`id`)
// 根据标签获取一类元素
document.getElementByTagName(`div`)
// 根据类名获取元素
document.getElementByClassName(`box`)