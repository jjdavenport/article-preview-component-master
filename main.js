const button = document.getElementById("btn");
const row = document.querySelector(".row");
const hidden = document.querySelector(".hidden");
const backButton = document.getElementById("back-btn");
const btnPath = document.getElementById("btn-path");

btnPath.addEventListener("mouseover", () => {
  btnPath.classList.add("path-fill");
});

btnPath.addEventListener("mousedown", () => {
  btnPath.classList.remove("path-fill");
});

button.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width < 560) {
    hidden.classList.toggle("hidden-active");
    row.classList.toggle("row-hide");
  } else {
    button.classList.toggle("mobile");
    button.classList.toggle("desktop");
    hidden.classList.toggle("hidden-active");
    btnPath.classList.toggle("desktop");
  }
});

backButton.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width < 560) {
    hidden.classList.toggle("hidden-active");
    row.classList.toggle("row-hide");
  } else {
    hidden.classList.toggle("hidden-active");
  }
});
