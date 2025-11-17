// 给a的父元素注册点击事件，然后通过事件委托的方式实现切换
const ul = document.querySelector(`ul`)
const aList = document.querySelectorAll(`.tab-nav a`)

ul.addEventListener(`click`, function (e) {
  if (e.target.tagName === `A`) {
    document.querySelector(`.tab-nav .active`).classList.remove(`active`)
    e.target.classList.add(`active`)
    const id = +e.target.dataset.id
    document.querySelector(`.tab-content .active`).classList.remove(`active`)
    document.querySelector(`.tab-content .item:nth-child(${id + 1})`).classList.add(`active`)
  }
})

