// DOM树中每一个内容都称为一个DOM节点
// 1.元素节点   各类标签    主要使用的也是元素节点，获得了元素其他都可以获得
// 2.属性节点   标签的属性
// 3.文本节点   标签的文本

// 查找节点（都是通过属性查找的）
// 通过各个节点的关系查找节点
const son1 = document.querySelector(`.son1`)
// parentNode返回该节点的最近一级的父节点
const father = son1.parentNode
console.log(father)


