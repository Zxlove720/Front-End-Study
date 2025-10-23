// 和Java类似，JavaScript也有两种数据类型————基本数据类型和引用数据类型（类）
// 基本数据类型有数字型（number）、字符型（string）、boolean型、undefined型（未定义）、null型（空）

// 但是和Java等强类型语言不同，JavaScript是弱类型语言，只有当数据赋值给变量之后，才能知道具体是什么数据类型
// Java： int a = 10
// 即使没有给a赋值，大家都可以知道a一定是一个整型，里面只能存储一个整数

// JavaScript： let a = 10
// 只有给a赋值了之后，才可以知道a是一个number数据类型的变量，在赋值之前，a可以存储任意的数据类型

// 并且Java的基础数据类型不进行初始化会报错，JavaScript的基础数据类型则可以正常运行，只是数据类型变为undefined


// let a
// console.log(a)
// const PI = 3.14
// let r = prompt("请输入圆的半径")
// document.write("圆的半径是：" + PI * r ** 2)


// NaN Not a Number
// NaN代表一个计算错误，是一个不正确的或者一个未定义的数学操作所得的结果
// 比如一个字符串类型和数字类型进行计算，无法得到一个正确的结果

// 在进行字符串和数字运算时，+会进行字符串拼接，和Java一样；但是其他运算符号会先将字符串转换为数字（纯数字的字符串）再进行运算
// 如果字符串无法转换为有效数字，那么结果将是NaN

console.log("1" * 1);
// NaN和任何数字数据类型进行运算都是NaN
console.log(NaN + 2);
console.log(1 / 0);
// 虽然NaN表示非数字，但是其数据类型（typeof）是number，这表明其是JavaScript数字系统中的特殊值





