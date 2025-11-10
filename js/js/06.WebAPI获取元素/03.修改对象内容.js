// innerText
const div = document.querySelector(`div`)
console.log(div.innerText);
div.innerHTML = "我不是一个简单的盒子"
div.innerText = "<strong>我不是一个简单的盒子</strong>" // innerText不支持解析标签，所以说无法使用
// innerHTMl
// innerHTML和innerText几乎一致，只是innerHTMl支持解析标签
div.innerHTML = "<strong>我不是一个简单的盒子</strong>"