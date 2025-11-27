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
    // 手机号不合法
    message.innerText = `手机号格式不合法`
    return false
  }
  // 手机号合法
  message.innerText = ``
  return true
}

// 验证验证码
const code = document.querySelector(`.xtx-form [name=code]`)
code.addEventListener(`change`, verifyCode)
function verifyCode() {
  // 编写正则表达式
  const regex = /^\d{6}$/
  const message = code.nextElementSibling
  // 根据正则表达式进行判断用户名是否合法
  if (!regex.test(code.value)) {
    // 验证码不合法
    message.innerText = `验证码格式不合法`
    return false
  }
  // 验证码合法
  message.innerText = ``
  return true
}

// 验证密码
const password = document.querySelector(`.xtx-form [name=password]`)
password.addEventListener(`change`, verifyPassword)
password.addEventListener(`change`, verifyConfirm)
function verifyPassword() {
  // 编写正则表达式
  const regex = /^[a-zA-Z0-9-_]{6,20}$/
  const message = password.nextElementSibling
  // 根据正则表达式进行判断用户名是否合法
  if (!regex.test(password.value)) {
    // 密码不合法
    message.innerText = `密码格式不合法`
    return false
  }
  // 密码合法
  message.innerText = ``
  return true
}

// 确认密码
const confirm = document.querySelector(`.xtx-form [name=confirm]`)
confirm.addEventListener(`change`, verifyConfirm)
function verifyConfirm() {
  const message = confirm.nextElementSibling
  // 判断两次输入密码是否相同
  if (!(confirm.value === password.value)) {
    // 两次输入密码不同
    message.innerText = `两次输入密码不同`
    return false
  }
  // 两次输入密码相同
  message.innerText = ``
  return true
}

// 同意协议
const queren = document.querySelector(`.xtx-form-item .icon-queren`)
queren.addEventListener(`click`, function () {
  queren.classList.toggle(`icon-queren2`)
})

// 注册按钮
const submit = document.querySelector(`.xtx-form-item .submit`)
submit.addEventListener(`click`, function (e) {
  // 检查表单各项数据是否已经填写完毕
  if (!verifyUsername()) {
    e.preventDefault()
  }
  if (!verifyPhone()) {
    e.preventDefault()
  }
  if (!verifyCode()) {
    e.preventDefault()
  }
  if (!verifyPassword()) {
    e.preventDefault()
  }
  if (!verifyConfirm()) {
    e.preventDefault()
  }
  // 验证用户协议是否已经同意
  if (!queren.classList.contains(`icon-queren2`)) {
    // 用户未同意协议
    e.preventDefault()
    return alert(`请先阅读并同意用户协议`)
  }
})

