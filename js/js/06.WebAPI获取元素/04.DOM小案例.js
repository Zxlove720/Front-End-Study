const personArr = [`刘德华`, `张学友`, `郭富城`, `黎明`]
const one = document.querySelector(`#one`)
let randomIndex = Math.floor(Math.random() * personArr.length)
one.innerHTML = personArr[randomIndex]
personArr.splice(randomIndex, 1)

const two = document.querySelector(`#two`)
randomIndex = Math.floor(Math.random() * personArr.length)
two.innerHTML = personArr[randomIndex]
personArr.splice(randomIndex, 1)

const three = document.querySelector(`#three`)
randomIndex = Math.floor(Math.random() * personArr.length)
three.innerHTML = personArr[randomIndex]
personArr.splice(randomIndex, 1)