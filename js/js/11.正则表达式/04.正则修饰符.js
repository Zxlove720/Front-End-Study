console.log(/^JAVA$/.test(`JAVA`))
// 在正则表达式后面使用修饰符i(ignore)可以忽略大小写
console.log(/^JAVA$/i.test(`Java`))
// 在正则表达式后面使用修饰符g(global)可以进行全局匹配
console.log(/JAVA/g.test(`javaJAVAjaVA`))
// 字符串的match方法和正则表达式的exec方法类似
// 修饰符g会进行全局匹配
console.log(`javaJAVAjaVa`.match(/JAVA/ig))

// 替换符合正则表达式的内容
// replace()方法
const regex = /前端/g
const string = `前端开发是正确的，前端开发可以月薪过万`
const newString = string.replace(regex, `JAVA`)
console.log(newString);
