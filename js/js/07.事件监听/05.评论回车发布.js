const tx = document.querySelector(`#tx`)
const total = document.querySelector(`.total`)
tx.addEventListener(`focus`, function () {
  total.style.opacity = `1`
})

tx.addEventListener(`blur`, function () {
  total.style.opacity = `0`
})

tx.addEventListener(`input`, function () {
  total.innerHTML = `${tx.value.length}/200字`
})

tx.addEventListener(`keyup`, function () {
  console.log(`键盘抬起来了`);
})

tx.addEventListener(`keydown`, function () {
  console.log(`键盘按下去了`);
})
