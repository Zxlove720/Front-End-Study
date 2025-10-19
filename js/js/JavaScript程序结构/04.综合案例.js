let month = +prompt("请输入有几个季度需要统计")
let sum = []
for (let i = 1; i <= month; i++) {
  sum.push(+prompt(`请输入第${i}季度的收入`))
}
document.write(`<div class="box">`)
for (let i = 0; i < sum.length; i++) {
  document.write(
    `<div style="height: ${sum[i]}px;">
      <span>${sum[i]}</span>
      <h4>第${i + 1}季度</h4>
    </div>`
  )
}
document.write(`</div>`)