// 使用事件委托完成tab栏切换
const tab = document.querySelector(`.tab-nav`)
const tabPaneList = document.querySelectorAll(`.tab-pane`)
tab.addEventListener(`click`, function (e) {
  if (e.target.tagName === `A`) {
    // 消除原有的active类
    tab.querySelector(`.active`).classList.remove(`active`)
    // 给当前点击的元素添加active类
    e.target.classList.add(`active`)
    // 因为tab栏内容部分无法准确区分，所有使用for循环的方式进行控制
    // 点击后先使用for循环隐藏所有tab栏内容
    for (let i = 0; i < tabPaneList.length; i++) {
      tabPaneList[i].style.display = `none`
    }
    // 通过点击元素中自定义属性确定哪一个内容应该展示
    tabPaneList[e.target.dataset.id].style.display = `block`
  }
})


