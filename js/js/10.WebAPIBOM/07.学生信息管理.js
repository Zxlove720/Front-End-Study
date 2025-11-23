// 1.获取填写的表单数据并加入数组存储
// 1.0从localStorage中获取studentList，如果没有则使用一个空数组
function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

render()
// 1.1获取表单
const info = document.querySelector(`.info`)
info.addEventListener(`submit`, function (e) {
  // 1.2取消表单提交默认行为
  e.preventDefault()
  const studentList = getFromLocalStorage(`studentList`)
  // 1.3判断用户数据是否为空
  const dataList = document.querySelectorAll(`form [name]`)
  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i].value.trim() === '') {
      return alert(`${dataList[i].name}不能为空`)
    }
  }
  // 1.4数据全不为空，将数据封装为对象然后存储到数组中
  const student = {
    studentId: studentList.length + 1,
    name: dataList[0].value,
    age: dataList[1].value,
    gender: dataList[2].value,
    salary: dataList[3].value,
    city: dataList[4].value
  }
  studentList.push(student)
  // 1.5清空表单数据
  this.reset()
  // 1.6将数组数据存储到localStorage
  saveToLocalStorage(`studentList`, studentList)
  // 1.7进行渲染
  render()
})

// 2.渲染，从localStorage中取出studentList反序列化为数组使用，完成渲染
function render() {
  // 2.1使用map()方法将数组中的数据渲染成需要的格式
  const studentList = getFromLocalStorage(`studentList`)
  const list = studentList.map(function (element, index) {
    return `
      <tr>
        <td>${element.studentId}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.gender}</td>
        <td>${element.salary}</td>
        <td>${element.city}</td>
        <td>
          <a href="javascript:" data-id="${index}">删除</a>
        </td>
      </tr> 
    `
  })
  // 2.2使用join()方法将数组中的所有元素拼接为一个字符串
  const studentString = list.join(``)
  // 2.3在tbody中的innerHTML中使用这个字符串完成渲染
  const tbody = document.querySelector(`tbody`)
  tbody.innerHTML = studentString
}

// 3.删除，从localStorage中删除student
(function () {
  // 3.1使用事件委托，将点击事件委托给tbody然后执行删除逻辑
  const tbody = document.querySelector(`tbody`)
  tbody.addEventListener(`click`, function (e) {
    if (e.target.tagName === `A`) {
      // 3.2执行删除逻辑
      const studentList = getFromLocalStorage(`studentList`)
      studentList.splice(+e.target.dataset.id, 1)
      // 3.3删除后写回localStorage
      saveToLocalStorage(`studentList`, studentList)
      // 3.4重新渲染
      render()
    }
  })
})();






