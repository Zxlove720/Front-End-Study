// 1.实现右侧轮播图切换
// 1.1鼠标移动则对应图片边框高亮
const small = document.querySelector(`.picture .small`)
const middle = document.querySelector(`.picture .middle`)
const large = document.querySelector(`.picture .large`)
// 1.2使用事件委托完成
small.addEventListener(`mouseover`, function (e) {
  if (e.target.tagName === `IMG`) {
    // 1.3先删除原有的active类
    this.querySelector(`.active`).classList.remove(`active`)
    // 1.4再给现在鼠标所处的元素(img)的父元素(li)添加active类
    e.target.parentNode.classList.add(`active`)
    // 2.将图片展示框中的图片换成鼠标所处的图片
    middle.querySelector(`img`).src = e.target.src
  }
})

// 3.鼠标经过图片展示框，显示图片详情
// 3.1封装显示和隐藏函数

let timer = -1
function show() {
  // 先清除定时器

  clearTimeout(timer)
  large.style.display = `block`
}

function hide() {
  // 如果只使用定时器，假如鼠标在展示框边界来回滑动，可能出现鼠标刚刚出边界，定时器启动，
  // 然后鼠标马上滑入展示框，此时定时器正好结束，执行函数，导致鼠标在展示框内而图片详情隐藏，
  // 所以说在show函数中需要先清除定时器
  timer = setTimeout(function () {
    large.style.display = `none`
  }, 100)
}

middle.addEventListener(`mouseenter`, show)
middle.addEventListener(`mouseleave`, hide)

