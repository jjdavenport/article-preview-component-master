const button = document.getElementById("btn");
const row = document.querySelector(".row");
const hidden = document.querySelector(".hidden");
const backButton = document.getElementById("back-btn");
const btnPath = document.getElementById("btn-path");

backButton.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width < 560) {
    hidden.classList.toggle("hidden-active");
    row.classList.toggle("row-hide");
  } else {
    hidden.classList.toggle("hidden-active");
  }
});

button.addEventListener("click", () => {
  const width = window.innerWidth;
  buttonClicked = true;
  if (width < 560) {
    hidden.classList.toggle("hidden-active");
    row.classList.toggle("row-hide");
  } else {
    button.classList.toggle("mobile");
    button.classList.toggle("desktop");
    hidden.classList.toggle("hidden-active");
    btnPath.classList.toggle("path-desktop");
  }
});

button.addEventListener("mouseover", () => {
  btnPath.setAttribute("fill", "#fff");
});

button.addEventListener("mouseout", () => {
  btnPath.setAttribute("fill", "#6E8098");
});
