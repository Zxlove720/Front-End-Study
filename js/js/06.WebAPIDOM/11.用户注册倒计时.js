const button = document.querySelector(`.btn`)
let i = 5
let timer = setInterval(function () {
  i--
  button.innerHTML = `我已经阅读用户协议(${i})`
  console.log(i)
  if (i === 0) {
    clearInterval(timer)
    button.disabled = false
    button.innerHTML = `我已经阅读用户协议`
  }
}, 1000)
