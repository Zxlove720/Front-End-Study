// 验证码模块
(function () {
  const code = document.querySelector(`.xtx-form-item .code`)
  let flag = true
  code.addEventListener(`click`, function () {
    if (flag) {
      flag = false
      let i = 60
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

// 验证模块
// 验证用户名
const username = document.querySelector(`.xtx-form [name=username]`)
username.addEventListener(`change`, verifyUsername)
function verifyUsername() {
  // 编写正则表达式
  const regex = /^[a-zA-Z][a-zA-Z0-9]{4,9}$/
  const message = username.nextElementSibling
  // 根据正则表达式进行判断用户名是否合法
  if (!regex.test(username.value)) {
    // 用户名不合法
    message.innerText = `用户名必须是英文字母开头的5-10位英文数字组合`
    return false
  }
  // 用户名合法
  message.innerText = ``
  return true
}

// 验证手机号
const phone = document.querySelector(`.xtx-form [name=phone]`)
phone.addEventListener(`change`, verifyPhone)
function verifyPhone() {
  // 编写正则表达式
  const regex = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  const message = phone.nextElementSibling
  // 根据正则表达式进行判断用户名是否合法
  if (!regex.test(phone.value)) {
    // 用户名不合法
    message.innerText = `手机号不合法`
    return false
  }
  // 用户名合法
  message.innerText = ``
  return true
}


