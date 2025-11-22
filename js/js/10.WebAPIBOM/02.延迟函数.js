// 延迟函数和间歇函数的调用都和时间有关，但是延迟函数只会在时间结束后执行一次，而间歇函数会随周期反复执行
let timer = setTimeout(function () {
  alert(`这是延迟函数`)
}, 3000)

let i = setInterval(function () {
  console.log(`这是间歇函数`)
}, 1000)