// 事件监听三要素
// 1.事件源：哪个DOM元素的事件被触发了
const inner = document.querySelector(`.inner`)
// 2.事件类型：用什么方式触发事件
inner.addEventListener(`click`, function () {
  // 3.事件调用函数：事件触发之后要干什么
  const box = document.querySelector(`.box`)
  box.style.display = `none`
})
