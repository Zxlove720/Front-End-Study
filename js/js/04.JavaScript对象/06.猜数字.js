let randomNumber = Math.floor(Math.random() * 10 + 1)
let flag = true
let inputNumber
while (flag) {
  inputNumber = +prompt("请输入1 - 10的数字")
  if (inputNumber < randomNumber) {
    alert(`猜小了`)
  }
  if (inputNumber > randomNumber) {
    alert(`猜大了`)
  }
  if (inputNumber === randomNumber) {
    flag = false
    document.writeln(`恭喜你猜对了，数字是${randomNumber}`)
  }
}
