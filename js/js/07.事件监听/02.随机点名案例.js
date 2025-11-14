// 数据数组
const arr = ['马超', '黄忠', '赵云', '关羽', '张飞']

// 获取元素
const start = document.querySelector(`.start`)
const end = document.querySelector(`.end`)
const qs = document.querySelector(`.qs`)
let randomNumber = -1
let timer = -1
start.addEventListener(`click`, function () {
  start.disabled = true
  end.disabled = false
  // 开启间歇函数模拟点名
  if (arr.length <= 1) {
    start.disabled = true
    end.disabled = true
  }
  timer = setInterval(function () {
    if (arr.length <= 1) {
      clearInterval(timer)
    }
    console.log("123");
    randomNumber = parseInt(Math.random() * arr.length)
    qs.innerHTML = arr[randomNumber]
  }, 50)

})

end.addEventListener(`click`, function () {
  clearInterval(timer)
  end.disabled = true
  start.disabled = false
  // 移除被抽的数据
  arr.splice(randomNumber, 1)
})

