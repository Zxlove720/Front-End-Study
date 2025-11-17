const checkAll = document.querySelector(`#checkAll`)
const checkBox = document.querySelectorAll(`.ck`)
checkAll.addEventListener(`click`, function () {
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = checkAll.checked
  }
})

for (let i = 0; i < checkBox.length; i++) {
  checkBox[i].addEventListener(`click`, function () {
    let checkedCount = 0
    for (let j = 0; j < checkBox.length; j++) {
      if (checkBox[j].checked) {
        checkedCount++
      }
    }
    checkAll.checked = (checkBox.length === checkedCount)
  })
}