// const password = document.querySelector(`input`)
// console.log(password.value)
// password.value = "123456"
// console.log(password.value)
// password.type = "text"
// password.disabled = true

const checkBox = document.querySelectorAll(`input`)
for (let i = 0; i < checkBox.length; i++) {
  checkBox[i].checked = false
}