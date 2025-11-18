// window.addEventListener(`load`, function () {
//   const box = document.querySelector(`.box`)
//   box.addEventListener(`click`, function (e) {
//     box.style.backgroundColor = `skyblue`
//   })
// })

document.addEventListener(`DOMContentLoaded`, function () {
  const box = document.querySelector(`.box`)
  box.addEventListener(`click`, function (e) {
    box.style.backgroundColor = `skyblue`
  })
})

// window.addEventListener(`load`)

// document.addEventListener(`DOMContentLoaded`)

// 这二者都是页面加载事件，
// window-load需要等待页面全部资源加载完毕才触发——包括CSS样式表和图片资源等
// document-DOMContentLoaded只需要等待DOM树构建完成之后就可以触发
// DOMContentLoaded可以让用户与页面更快的交互，提高体验感