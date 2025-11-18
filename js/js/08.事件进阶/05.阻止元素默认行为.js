// a元素的默认行为是点击后跳转到对应链接
const a = document.querySelector(`a`)
a.addEventListener(`click`, function (e) {
  e.preventDefault() // 这是用于消除元素默认行为的函数
  console.log(e.defaultPrevented) // 这是用于检查元素默认行为是否被消除的属性，是boolean值
})

const input = document.querySelector(`input`)
input.addEventListener(`click`, function (e) {
  e.preventDefault() // 消除元素默认行为
  console.log(e.defaultPrevented);
}) 