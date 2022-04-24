const closeBtn = document.querySelector(".fixed-btn--close");
const openBtn = document.querySelector(".fixed-btn--open");
const fixedBox = document.querySelector(".fixed-box");

function handelOpenBtn() {
  fixedBox.classList.remove("hidden");
  closeBtn.classList.remove("hidden");
  openBtn.classList.add("hidden");
}

function handelCloseBtn() {
  fixedBox.classList.add("hidden");
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
}

closeBtn.addEventListener("click", handelCloseBtn);
openBtn.addEventListener("click", handelOpenBtn);
