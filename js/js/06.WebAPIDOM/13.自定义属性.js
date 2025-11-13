// 通过dataset属性可以获得标签自定义属性集合，然后再通过对象属性访问获取自定义属性值
const divList = document.querySelectorAll(`div`)
for (let i = 0; i < divList.length; i++) {
  console.log(divList[i].dataset.id)
}