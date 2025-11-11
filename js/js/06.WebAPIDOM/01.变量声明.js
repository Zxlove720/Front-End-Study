const student = {
  name: "jack",
  age: 18
}
student.grade = 100
console.log(student);
// 上述代码看似要报错，但其实不会报错，这是因为student是引用数据类型，是一个对象，
// 其中存储的是这个对象在内存中的地址，地址没有改变，所以说const修饰不会报错。
// 所以说十分推荐对象和数组都使用const进行声明！这也是主流的做法。

