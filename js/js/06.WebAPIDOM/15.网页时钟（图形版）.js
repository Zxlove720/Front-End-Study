/*
      知识点：
        1. 创建日期对象 获取当前时间
        2. 多次定时器，重复获取时间，让指针动起来
    */

// 查找页面的元素，定时器调用的函数外面，查找一次即可
const secondHand = document.querySelector('.ss'); // 秒针元素，例如类名为 .ss
const minuteHand = document.querySelector('.mm'); // 分针元素
const hourHand = document.querySelector('.hh'); // 时针元素
// 封装时钟效果，定时器定时调用的函数
// 通过定时器每隔一秒钟再调用一次。
let du = 0
setInterval(function () {
  // 1. 获取当前精确时间
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 将24小时制转换为12小时制，并计算当前小时数（考虑分钟和秒的贡献）
  const currentHours = hours % 12 + minutes / 60 + seconds / 3600;

  // 2. 硬算各指针相对于12点整的旋转角度
  // 秒针角度：每秒6度
  const secondAngle = seconds * 6;
  // 分针角度：每分钟6度，加上秒针带来的微动（每秒0.1度）
  const minuteAngle = minutes * 6 + seconds * 0.1;
  // 时针角度：每小时30度，加上分钟和秒的微动
  const hourAngle = currentHours * 30;

  // 3. 将计算出的角度应用于指针的CSS变换属性
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
}, 1000);