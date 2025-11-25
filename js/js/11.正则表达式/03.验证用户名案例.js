// 用户名验证为6-16位的数字或字母
const regex = /^[\da-zA-Z]{6,16}$/
const input = document.querySelector(`input`)
input.addEventListener(`blur`, function () {
  if (regex.test(this.value)) {
    input.className = `right`
  } else {
    input.className = `error`
  }
})