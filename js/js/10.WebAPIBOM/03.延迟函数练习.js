// 模仿广告定时关闭
const box = document.querySelector(`.box`)
let timer = setTimeout(function () {
  box.style.display = `none`
  console.log(`广告关闭了`);
}, 5000)

const close = document.querySelector(`.close`)
close.addEventListener(`click`, function () {
  box.style.display = `none`
  clearTimeout(timer)
})