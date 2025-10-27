// function getRandomColor(flag) {
//   let prefix = "#"
//   let color = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
//   if (flag) {
//     for (let i = 0; i < 6; i++) {
//       prefix = prefix + color[Math.floor(Math.random() * color.length)]
//     }
//     return prefix
//   } else {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     return `rgb(${r}, ${g}, ${b})`
//   }
// }
// let choice = [true, false]
// const div = document.querySelector("div")
// div.style.backgroundColor = getRandomColor(choice[Math.floor(Math.random() * choice.length)])
// console.log(typeof '1' + 1)
// console.log(typeof Number("11"))