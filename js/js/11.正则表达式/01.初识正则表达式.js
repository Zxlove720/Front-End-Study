// 正则表达式语法 /正则表达式/
const regex = /JAVA/g // 这个正则表达式是必须含有JAVA

// 在/ /中写正则表达式，不需要引号
// 正则表达式方法
// test(String)，返回boolean，可以判断参数中的字符串是否至少符合一次正则表达式规范
console.log(regex.test(`JAVA是最好的语言`))

// exec(String)，返回数组，数组[0]是参数字符串中匹配到的文本，index是匹配开始的位置，input是匹配的原始字符串
console.log(regex.exec(`JAVA是最好的语言JAVA是基于C++的`))
// console.log(regex.exec(`JAVA是最好的语言JAVA是基于C++的`))

