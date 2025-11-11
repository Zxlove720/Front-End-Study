// // 获取元素
// const img = document.querySelector(`img`)
// // 设置属性
// img.src = `./images/3.webp`
// img.alt = `三重刘德华`
// img.title = `三重刘德华`

// 随机图片
const img = document.querySelector(`img`)
const randomNumber = Math.floor(Math.random() * 6 + 1)
img.src = `./images/${randomNumber}.webp`
img.title = `${randomNumber}重刘德华`
