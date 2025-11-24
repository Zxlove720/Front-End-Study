// 元字符是正则表达式中具有特殊含义的字符，提高正则表达式匹配的灵活性和匹配功能

// 边界符 表示位置、开头和结尾；必须使用什么开头，必须使用什么结尾
// ^表示匹配行首文本（必须以什么开头），$表示匹配行尾的文本（必须以什么结尾）
// (function () {
//   const regex1 = /A$/
//   console.log(regex1.test(`JAVA`));
//   const regex2 = /^J/
//   console.log(regex2.test(`JAVA`))
//   // /^$/是精确匹配，只能匹配^$中的内容
//   const regex3 = /^JAVA$/
//   console.log(regex3.test(`JAVA`));
// })();

// 量词 表示重复次数
(function () {
  // *出现0或多次
  const regex1 = /^(JAVA)*$/
  // +出现1或多次
  const regex2 = /^(JAVA)+$/
  // ?出现0或1次
  const regex3 = /^(JAVA)?$/
  // {n}重复n次
  const regex4 = /^(JAVA){2}$/
  // {n,}重复n或更多次
  const regex5 = /^(JAVA){2,}$/
  // {n,m}重复n-m次，n和m之间不能有空格
  const regex6 = /^(JAVA){2,3}$/

  // console.log(regex1.test(``));
  // console.log(regex1.test(`JAVA,JAVA`));

  // console.log(regex2.test(``));
  // console.log(regex2.test(`JAVA`));
  // console.log(regex2.test(`JAVA,JAVA`));

  // console.log(regex3.test(``));
  // console.log(regex3.test(`JAVA`));
  // console.log(regex3.test(`JAVA,JAVA`));

  // console.log(regex4.test(`JAVA`));
  // console.log(regex4.test(`JAVAJAVA`));
  // console.log(regex4.test(`JAVAJAVAJAVA`));

  // console.log(regex5.test(`JAVA`));
  // console.log(regex5.test(`JAVAJAVA`));
  // console.log(regex5.test(`JAVAJAVAJAVA`));

  console.log(regex6.test(`JAVA`));
  console.log(regex6.test(`JAVAJAVA`));
  console.log(regex6.test(`JAVAJAVAJAVA`));
  console.log(regex6.test(`JAVAJAVAJAVAJAVA`));
  console.log(regex6.test(`JAVAJAVAJAVAJAVAJAVA`));



})()

// 字符类 简化