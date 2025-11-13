// 删除数组 splice(起始索引, 删除个数)
// let array = [1, 2, 3, 4, 5]
// console.log(array)
// array.splice(2) // 从索引2开始全部删除
// console.log(array)

// splice不但可以删除元素，也可以添加元素
// splice(起始索引, 替换个数, 替换元素)
// 但是不推荐这样做
// array.splice(0, 0, "pink")
// console.log(array[0])
// console.log(array);

// console.log(document);
// console.log(typeof document);

// // 相当于HTML标签
// console.log(document.documentElement)
// // 相当于body标签
// console.log(document.body)


// // innerText和innerHTML
// const div = document.querySelector(`div`)
// // div.innerText = `文本！`
// div.innerText = `<h1>文本</h1>` // 不会解析文本中的标签
// div.innerHTML = `<h1>文本</h1>` // 会解析文本中的标签，一般使用innerHTML即可
