const checkAll = document.querySelector(`#checkAll`)
const checkBox = document.querySelectorAll(`.ck`)
checkAll.addEventListener(`click`, function () {
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = checkAll.checked
  }
})