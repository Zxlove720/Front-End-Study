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


// 登录前判断用户是否同意协议
const check = document.querySelector(`.agree [name=agree]`)
const login = document.querySelector(`.button .dl`)
login.addEventListener(`click`, function (e) {
  e.preventDefault()
  // 判断用户是否同意协议
  if (!check.checked) {
    alert(`请先阅读同意协议`)
    return
  }
  // 用户已经阅读同意协议，将用户名保存到localStorage中并跳转首页
  const username = document.querySelector(`[name=username]`)
  localStorage.setItem(`username`, username.value)
  location.href = `../index.html`
})

