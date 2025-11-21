// 三种获取时间戳的方法

// 1.创建对象调用方法 
(function () {
  // 标准UTC时间
  const date1 = new Date(`2004-10-14T00:00:00`)
  // 非标准的本地时间
  const date2 = new Date(`2004/10/14 00:00:00`)
  // 完全非标准时间
  const date3 = new Date(`2004.10.14 0:0:0`)
  console.log(date1.getTime());
  // JavaScript引擎有宽容解析能力，所以说对于一些非标准的时间也可以解析
})();

// 2.创建对象，强制转换为数字型，转换后就是时间戳
(function () {
  console.log(+new Date())
})();

// 3.直接使用类方法，但是不能指定时间，只能获取现在的
(function () {
  console.log(Date.now());
})()


