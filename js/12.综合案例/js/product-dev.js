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
    // 4.将图片详情中的图片换成鼠标所处的图片
    large.style.backgroundImage = `url(${e.target.src})`
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

// 5.黑色遮罩层跟随鼠标
// 5.1鼠标进入图片展示框，黑色遮罩层显示
const layer = document.querySelector(`.layer`)
middle.addEventListener(`mouseenter`, function () {
  layer.style.display = `block`
})
// 5.2鼠标移出图片展示框，黑色遮罩层隐藏
middle.addEventListener(`mouseleave`, function () {
  layer.style.display = `none`
})

middle.addEventListener(`mousemove`, function (e) {
  // e.pageX可以获取鼠标在页面中的x坐标；e.pageY可以获取鼠标在页面中的y坐标
  // element.getBoundingClientRect()可以获取对象，对象中的属性包含了元素在视口中的位置和尺寸
  // getBoundingClientRect().top/bottom 元素上（下）边界到视口顶（底）部的距离
  // getBoundingClientRect().left/right 元素左（右）边界到视口左（右）的距离
  // getBoundingClientRect().width/height 可以获取元素的宽高，但是也可以根据left right等计算
  // 可以通过getBoundingClientRect()方法获取展示框在页面中的位置
  // 5.3鼠标在图片展示框中的坐标 = 鼠标在页面中的坐标 - 展示框在页面中的坐标
  // 但是会存在bug，getBoundingClientRect()获取的距离都是相对于视口的，不是整个文档，当页面需要滚动时（一般是上下滚动）就会出现bug
  // 此时需要减去文档顶部向下滚动的距离（被卷去的距离）
  let mouseX = e.pageX - middle.getBoundingClientRect().left
  let mouseY = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop

  console.log(mouseX, mouseY)
  // 5.4需要限定黑色遮罩层的移动范围（0 - 400px）
  if ((mouseX >= 0 && mouseX <= 400) && (mouseY >= 0 && mouseY <= 400)) {
    let layerX = 0
    let layerY = 0
    if (mouseX < 100) {
      layerX = 0
    }
    if (mouseX >= 100 && mouseX <= 300) {
      layerX = mouseX - 100
    }
    if (mouseX > 300) {
      layerX = 200
    }
    if (mouseY < 100) {
      layerY = 0
    }
    if (mouseY >= 100 && mouseY <= 300) {
      layerY = mouseY - 100
    }
    if (mouseY > 300) {
      layerY = 200
    }
    // 5.5让黑色遮罩层跟随鼠标移动
    layer.style.left = layerX + `px`
    layer.style.top = layerY + `px`
    // 5.6让图片详情中的图片跟着遮罩层移动，从而实现放大效果，展示框中的图片大小是400 * 400；图片详情中的图片大小是800*800
    // 所以说图片详情中的图片位置移动是遮罩层位置移动的2倍
    large.style.backgroundPositionX = -2 * layerX + `px`
    large.style.backgroundPositionY = -2 * layerY + `px`
  }
})



