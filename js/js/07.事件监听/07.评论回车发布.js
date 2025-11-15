// 1.获取修改的元素
const tx = document.querySelector(`#tx`)
const button = document.querySelector(`button`)
const total = document.querySelector(`.total`)
const item = document.querySelector(`.item`)
const text = document.querySelector(`.text`)
tx.addEventListener(`focus`, function () {
  total.style.opacity = `1`
})

tx.addEventListener(`blur`, function () {
  total.style.opacity = `0`
})

tx.addEventListener(`input`, function () {
  if (tx.value.trim().length > 0) {
    button.style.background = `#00aeec`
  }
  total.innerHTML = `${tx.value.length}/200字`
})

tx.addEventListener(`keyup`, function (e) {
  if (e.key === `Enter`) {
    if (tx.value.trim()) {
      item.style.display = `block`
      text.innerHTML = tx.value
    } else {
      alert(`不能发送空内容`)
    }
    tx.value = ``
    button.style.background = `#999`
    total.innerHTML = `0/200字`
  }
})

