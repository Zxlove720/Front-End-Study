// 事件对象顾名思义是一个对象，其中存储了这个事件的相关信息
const input = document.querySelector(`input`)
input.addEventListener(`keyup`, function (e) {
  console.log(e.key)
  console.log(e)

})