// 创建一个新的DOM节点
const div = document.createElement(`div`)
// 插入到对应位置
// 插入时基于父元素完成的
// appendChild()是将元素追加到父元素的最后
// document.body.appendChild(div)

// insertBefore()是将元素插入到父元素中的指定子元素之前
document.body.insertBefore(div, document.querySelector(`a`))
// 常用
// 将元素插入到父元素所有子元素中的第一个前面（将元素插入到所有子元素前）
document.body.insertBefore(div, document.body.children[0])