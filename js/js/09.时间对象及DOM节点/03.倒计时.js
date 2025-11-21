const hourDiv = document.querySelector(`#hour`)
const minuteDiv = document.querySelector(`#minute`)
const secondDiv = document.querySelector(`#second`)

let timer = setInterval(function () {
  // 获取当前时间戳
  const now = Date.now()
  // 获取目标时间的时间戳
  const end = +new Date(`2025-11-21T16:10:00`)
  // 获取二者差值
  const time = end - now
  console.log(time)
  // 获取时分秒的差值
  const hour = parseInt(time / 1000 / 3600 % 24)
  const minute = parseInt(time / 1000 / 60 % 60)
  const second = parseInt(time / 1000 % 60)
  // 替换
  console.log(second);

  hourDiv.innerHTML = hour
  minuteDiv.innerHTML = minute
  secondDiv.innerHTML = second
}, 1000)



