// 假如元素需要修改的属性过多，在JavaScript通过对象属性进行修改就有些复杂，可以通过CSS写一个新类，然后通过
// JavaScript修改元素的类即可
const box = document.querySelector(`.box`)
// 获取到元素的classList，然后用add方法追加一个心类
box.classList.add(`new`)
box.classList.remove(`box`)
box.classList.toggle(`new`)
