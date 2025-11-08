// ### 练习题1：
// 点名: 每次刷新网页运行, 在控制台 随机输出一位同学的名字 ["老赵", "老李", "小传", "小黑"]\
// ，如果输出了，则数组中删除这个名字
let person = ["老赵", "老李", "小传", "小黑"]
let count = 0
while (true) {
  if (person.length === 0) {
    break
  }
  let randomIndex = Math.floor(Math.random() * person.length)
  console.log(`第${count + 1}次抽，索引是${randomIndex}，抽到的是${person[randomIndex]}`)
  person.splice(randomIndex, 1)
  count++
}
console.log(count)

// ### 练习题2：
// 声明对象
// 目的: 复习对象的声明
// 要求:
// 1. 声明一个变量per, 类型为对象类型
// 2. 该对象的属性为性别,年龄,爱好(3个)
// 3. 该对象的方法有 说话, 吃饭(2个)
// 4. 在控制台分别调用该对象的属性和方法
// per = {
//   gender: 'male',
//   age: 18,
//   hobby: 'Java',
//   eat: function () {
//     console.log(`吃饭`)
//   },
//   speak: function () {
//     console.log(`说话`)
//   }
// }
// console.log(per.gender);
// console.log(per.eat());


// ### 练习题3：
// 调用对象的方法
// 目的: 复习对象的使用
// 要求:
// 1. 对象声明完毕后, 调用对象中的吃饭的方法
// 2. 提示: 对象中的方法本质是函数, 调用需要加()
// 3. 方法也可以传递参数的
per = {
  gender: 'male',
  age: 18,
  hobby: 'Java',
  eat: function () {
    console.log(`吃饭`)
  },
  speak: function () {
    console.log(`说话`)
  },
  sum: function (a, b) {
    return a + b
  }
}
console.log(per.sum(1, 2));
console.log(per[`gender`]);

// ### 练习题4：

// 猜数字游戏，设定次数，最多猜8次

// ### 练习题5：

// 完成课堂随机生成颜色的案例。