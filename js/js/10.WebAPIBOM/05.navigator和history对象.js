// navigator对象可以获取浏览器及操作系统信息
// 主要用于浏览器适配及判断移动端访问自动跳转移动端网页
console.log(window.navigator)

// history对象是记录浏览器历史记录，和浏览器地址栏操作对应（前进、后退）
// 主要方法有
// back()后退1个页面
// forward()前进1个页面
// go() 1为前进1个页面；-1为后退一个页面

const forward = document.querySelector(`.forward`)
const back = document.querySelector(`.back`)

forward.addEventListener(`click`, function () {
  // window.history.forward()
  window.history.go(1)
})

back.addEventListener(`click`, function () {
  // window.history.back()
  window.history.go(-1)
})
