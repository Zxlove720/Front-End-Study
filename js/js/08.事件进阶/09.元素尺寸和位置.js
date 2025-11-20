const box = document.querySelector(`.box`)
// 只管元素本身的宽高（内容 + padding），其他不管
console.log(box.clientWidth);
console.log(box.clientHeight);
// 元素本身的宽高和border值
console.log(box.offsetWidth);
console.log(box.offsetHeight);
// 元素距离最近的定位元素的距离只读
console.log(box.offsetLeft);

// 注意clientLeft(clientTop)是元素的左（上）边框的宽度，不是位置
console.log(box.clientLeft);
console.log(box.clientTop);
