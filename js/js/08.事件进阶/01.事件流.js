// 冒泡（默认是冒泡）
// 会从子元素的事件开始逐步向父元素的事件执行，就像泡泡从下往上冒
// document.addEventListener(`click`, function () {
//   alert(`document`)
// })

// document.body.addEventListener(`click`, function () {
//   alert(`body`)
// })

// document.querySelector(`.grandpa`).addEventListener(`click`, function () {
//   alert(`grandpa`)
// })

// document.querySelector(`.father`).addEventListener(`click`, function () {
//   alert(`father`)
// })

// document.querySelector(`.son`).addEventListener(`click`, function () {
//   alert(`son`)
// })


// 捕获
// 会从父元素的事件逐步向子元素的事件执行
document.addEventListener(`click`, function () {
  alert(`document`)
}, true)

document.body.addEventListener(`click`, function () {
  alert(`body`)
}, true)

document.querySelector(`.grandpa`).addEventListener(`click`, function () {
  alert(`grandpa`)
}, true)

document.querySelector(`.father`).addEventListener(`click`, function () {
  alert(`father`)
}, true)

document.querySelector(`.son`).addEventListener(`click`, function () {
  alert(`son`)
}, true)


