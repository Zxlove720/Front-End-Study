// const aList = document.querySelectorAll(`.tab-nav a`)
// const divList = document.querySelectorAll(`.tab-content div`)
// for (let i = 0; i < aList.length; i++) {
//   aList[i].addEventListener(`mouseenter`, function () {
//     document.querySelector(`.tab-nav .active`).classList.remove(`active`)
//     this.classList.add(`active`)
//     // 处理内容区
//     document.querySelector(`.tab-content .active`).classList.remove(`active`)
//     divList[i].classList.add(`active`)
//   })
// }


const aList = document.querySelectorAll(`.tab-nav a`)
for (let i = 0; i < aList.length; i++) {
  aList[i].addEventListener(`mouseenter`, function () {
    document.querySelector(`.tab-nav .active`).classList.remove(`active`)
    aList[i].classList.add(`active`)
    // 处理内容区
    document.querySelector(`.tab-content .active`).classList.remove(`active`)
    document.querySelector(`.tab-content div:nth-child(${i + 1})`).classList.add(`active`)
  })
}