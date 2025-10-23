let price = +prompt("请输入商品单价")
let count = +prompt("请输入购买数量")
let address = prompt("请输入收货地址")
let total = price * count

document.write(`
  <table>
    <caption>订单表</caption>
    <thead>
      <th>商品名称</th>
      <th>商品单价</th>
      <th>购买数量</th>
      <th>商品总价</th>
      <th>收货地址</th>
    </thead>
    <tbody>
      <td>Iphone17</td>
      <td>${price}</td>
      <td>${count}</td>
      <td>${total}</td>
      <td>${address}</td>
    </tbody>
  </table>
  `)