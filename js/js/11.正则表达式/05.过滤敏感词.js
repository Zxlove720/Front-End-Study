const text = document.querySelector(`textarea`)
const button = document.querySelector(`button`)
const div = document.querySelector(`div`)
button.addEventListener(`click`, function () {
  // 获取text中的文本，进行敏感词替换
  const regex = /激情/g
  const newText = text.value.replace(regex, `*`)
  div.innerHTML = newText
})