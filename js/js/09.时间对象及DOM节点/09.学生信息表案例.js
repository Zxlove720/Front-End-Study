// 渲染函数
function render() {
  // 获取表格
  const tbody = document.querySelector(`tbody`)
  tbody.innerHTML = ``
  // 根据数组长度进行渲染
  for (let i = 0; i < studentList.length; i++) {
    // 创建新的tr元素
    const tr = document.createElement(`tr`)
    // 将student对象值渲染到tr中
    tr.innerHTML = `
        <td>${studentList[i].studentId}</td>
        <td>${studentList[i].name}</td>
        <td>${studentList[i].age}</td>
        <td>${studentList[i].gender}</td>
        <td>${studentList[i].salary}</td>
        <td>${studentList[i].city}</td>
        <td>
          <a href="javascript:" data-id="${i}">删除</a>
        </td>
    `
    // 将tr渲染到tbody中
    tbody.appendChild(tr)
  }
}

// 创建空数组存储学生信息
let studentList = []
// 获取表单元素
const info = document.querySelector(`.info`)
// 添加提交事件，并消除表单提交默认行为
info.addEventListener(`submit`, function (e) {
  e.preventDefault()
  // 获得表单内容
  const itemList = document.querySelectorAll(`form [name]`)
  // 进行表单输入内容非空判断
  for (let i = 0; i < itemList.length; i++) {
    console.log(itemList[i].value);

    if (itemList[i].value.trim() === ``) {
      return alert(`${itemList[i].name}不能为空`)
    }
  }

  // 从表单中获取学生信息
  // const name = document.querySelector(`.name`)
  // const age = document.querySelector(`.age`)
  // const gender = document.querySelector(`.gender`)
  // const salary = document.querySelector(`.salary`)
  // const city = document.querySelector(`.city`)


  // 创建对象存储学生信息
  const student = {
    studentId: studentList.length + 1,
    name: itemList[0].value,
    age: itemList[1].value,
    gender: itemList[2].value,
    salary: itemList[3].value,
    city: itemList[4].value
  }
  // 存储到数组中
  studentList.push(student)
  // 清空表单内容
  this.reset()
  render()
})

// 使用事件委托删除单元格
const tbody = document.querySelector(`tbody`)
tbody.addEventListener(`click`, function (e) {
  // 只有点击的是A标签才进行事件委托删除数据
  if (e.target.tagName === `A`) {
    console.log(studentList);
    // 获取元素自定义属性
    const index = +e.target.dataset.id
    studentList.splice(index, 1)
    console.log(studentList);
    render()
  }
})


