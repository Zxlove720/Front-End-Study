// 假如元素需要修改的属性过多，在JavaScript通过对象属性进行修改就有些复杂，可以通过CSS写一个新类，然后通过
// JavaScript修改元素的类即可
const box = document.querySelector(`.box`)
// 如果元素本来有class，此时就会覆盖掉原来的类
box.className = `new`
// 也可以保留多个类，此时就遵循CSS的覆盖规则
box.className = `new box`
