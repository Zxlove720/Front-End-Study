// 验证码模块
(function () {
  const code = document.querySelector(`.xtx-form-item .code`)
  let flag = true
  code.addEventListener(`click`, function () {
    if (flag) {
      flag = false
      let i = 15
      // 点击之后立即触发一次
      code.innerHTML = `${i}S后重新获取`
      let timer = setInterval(function () {
        i--
        code.innerHTML = `${i < 10 ? '0' + i : i}S后重新获取`
        if (i === 0) {
          clearInterval(timer)
          code.innerHTML = `发送验证码`
          flag = true
        }
      }, 1000)
    }
  })
})();


