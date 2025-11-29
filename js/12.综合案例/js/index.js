// 根据localStorage中的数据进行渲染
// 获取要渲染的元素
const login = document.querySelector(`.xtx_navs li`)
const register = login.nextElementSibling
render()
// 渲染函数
function render() {
  // 获取localStorage中的数据
  const username = localStorage.getItem(`username`)
  // localStorage中没有信息
  if (username) {

    return
  }
  // localStorage中有信息，完成渲染
  login.innerHTML = username
  register.innerHTML = `退出登录`
}

// 退出登录，删除localStorage中的数据，并且再次渲染
register.addEventListener(`click`, function () {
  localStorage.removeItem(`username`)
  render()
})
