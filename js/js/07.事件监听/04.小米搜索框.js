const search = document.querySelector(`input`)
const list = document.querySelector(`.result-list`)

search.addEventListener(`focus`, function () {
  list.style.display = `block`
  search.classList.add(`search`)
})

search.addEventListener(`blur`, function () {
  list.style.display = `none`
  search.classList.remove(`search`)
})