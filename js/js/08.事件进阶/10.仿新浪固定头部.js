const header = document.querySelector(`.header`)
const sk = document.querySelector(`.sk`)
window.addEventListener(`scroll`, function () {
  console.log(document.documentElement.scrollTop);
  header.style.top = this.document.
    documentElement.scrollTop > sk.offsetTop ? 0 : `-80px`
})