const button = document.getElementById("btn");
const row = document.querySelector(".row");
const hidden = document.querySelector(".hidden");
const backButton = document.getElementById("back-btn");

button.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width < 560) {
    hidden.classList.toggle("hidden-active");
    row.classList.toggle("row-hide");
  } else {
    hidden.classList.toggle("hidden-active");
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
