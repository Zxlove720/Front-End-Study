// 使用事件对象中的stopPropagation方法阻止事件冒泡
// document.addEventListener(`click`, function () {
//   alert(`document`)
// })

// document.querySelector(`.grandpa`).addEventListener(`click`, function (e) {
//   alert(`grandpa`)
//   e.stopPropagation()
// })

// document.querySelector(`.father`).addEventListener(`click`, function (e) {
//   alert(`father`)
//   e.stopPropagation()
// })

// document.querySelector(`.son`).addEventListener(`click`, function (e) {
//   alert(`son`)
//   e.stopPropagation() // 使用事件对象中的stopPropagation方法可以阻止该事件冒泡
// })

document.querySelector(`.father`).addEventListener(`mouseover`, function (event) {
  console.log(`鼠标进来了。最初触发事件的元素是：`, event.target)
  event.stopPropagation()
})

document.querySelector(`.father`).addEventListener(`mouseout`, function (event) {
  console.log(`鼠标出去了。最初触发事件的元素是：`, event.target)
  event.stopPropagation()
})