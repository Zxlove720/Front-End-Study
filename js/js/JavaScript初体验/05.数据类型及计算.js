// 和Java类似，JavaScript也有两种数据类型————基本数据类型和引用数据类型（类）
// 基本数据类型有数字型（number）、字符型（string）、boolean型、undefined型（未定义）、null型（空）

// 但是和Java等强类型语言不同，JavaScript是弱类型语言，只有当数据赋值给变量之后，才能知道具体是什么数据类型
// Java： int a = 10
// 即使没有给a赋值，大家都可以知道a一定是一个整型，里面只能存储一个整数

// JavaScript： let a = 10
// 只有给a赋值了之后，才可以知道a是一个number数据类型的变量，在赋值之前，a可以存储任意的数据类型

// 并且Java的基础数据类型不进行初始化会报错，JavaScript的基础数据类型则可以正常运行，只是数据类型变为undefined
let a
console.log(a)

const PI = 3.14
let r = prompt("请输入圆的半径")
document.write("圆的半径是：" + PI * r ** 2)

