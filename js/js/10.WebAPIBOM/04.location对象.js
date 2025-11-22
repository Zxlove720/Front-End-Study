// location对象保存着当前页面URL的全部组成信息

// 其中href属性常用于进行跳转
console.log(window.location)
console.log(window.location.href)
// location.href = `https://www.baidu.com`

// (function () {
//   let i = 5
//   const div = document.querySelector(`div`)
//   let timer = setInterval(function () {
//     i--
//     div.innerHTML = `
//   支付成功还有<span>${i}</span>s自动跳转到首页，点击可以立即跳转
// `
//     if (i === 0) {
//       clearInterval(timer)
//       window.location = `https://www.baidu.com`
//     }
//   }, 1000)

//   div.addEventListener(`click`, function () {
//     clearInterval(timer)
//     window.location = `https://www.baidu.com`
//   })
// })();


// search属性可以获取地址中的?后的属性及值
console.log(location.search)

// hash属性可以获取可以获取地址中的#后面的部分，后期可以用于VUE路由
console.log(location.hash)

// reload()方法可以刷新页面，参数可以传递boolean值，true为强制刷新（ctrl + F5）
const flash = document.querySelector(`.flash`)
flash.addEventListener(`click`, function () {
  // location.reload()
  // 强制刷新
  location.reload(true)
})











