let fn = function () {
  console.log(`这是一个匿名函数`)
}

fn();

(function () {
  console.log(`这是一个立即函数`)
}());

(function () {
  console.log(`这是立即函数的另外一种写法`)
})();
