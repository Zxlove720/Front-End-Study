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
    // localStorage中有信息，完成渲染
    login.innerHTML = `<a>${username}</a>`
    register.innerHTML = `<a>退出登录</a>`
  } else {
    login.innerHTML = `<a href="./login.html">请先登录</a>`
    register.innerHTML = `<a href="./register.html">免费注册</a>`
  }
}

// 退出登录，删除localStorage中的数据，并且再次渲染
register.addEventListener('click', function (e) {
  const username = localStorage.getItem('username')
  if (username) {
    e.preventDefault()
    localStorage.removeItem('username')

    render()
    location.reload()
  }
  // 未登录状态允许正常跳转
})
