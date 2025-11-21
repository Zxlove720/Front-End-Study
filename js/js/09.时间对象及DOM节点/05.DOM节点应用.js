const boxList = document.querySelectorAll(`.box1`)
for (let i = 0; i < boxList.length; i++) {
  boxList[i].addEventListener(`click`, function () {
    this.parentNode.style.display = `none`
  })
}