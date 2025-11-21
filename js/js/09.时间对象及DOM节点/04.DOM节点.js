(function () {
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
})();

(function () {
  const father = document.querySelector(`.father`)
  // 父节点获取所有子节点（包括属性和文本节点）
  const children = father.childNodes
  console.log(children);
  // 父节点获取所有元素子节点，该方法使用较多
  const childList = father.children
  console.log(childList);
})();

(function () {
  const son2 = document.querySelector(`.son2`)
  // nextElementSibling 获取该元素的下一个兄弟元素节点
  console.log(son2.nextElementSibling)
  // nextSibling 获取该元素下一个元素节点，包括任何节点
  console.log(son2.nextSibling)
  // previousElementSibling 获取该元素的前一个兄弟元素节点
  console.log(son2.previousElementSibling)
})()
