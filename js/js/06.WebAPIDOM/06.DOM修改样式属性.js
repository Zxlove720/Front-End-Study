//  获取元素
//const body = document.querySelector(`body`)
// 因为body标签在整个HTML文件中只有一个，所以说可以直接使用document.body获取
const body = document.body
const randomNumber = Math.floor(Math.random() * 10 + 1)
body.style.background = `url(./images/desktop_${randomNumber}.jpg) no-repeat top center / cover`