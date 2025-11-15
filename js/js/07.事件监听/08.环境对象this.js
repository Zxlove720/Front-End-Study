function fn() {
  console.log(this);
}

fn()

const box = document.querySelector(`.box`)
box.addEventListener(`click`, function () {
  console.log(this);
  this.style.backgroundColor = `pink`
})