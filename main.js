const button = document.getElementById("btn");
const row = document.querySelector(".row");
const hidden = document.querySelector(".hidden");
const backButton = document.getElementById("back-btn");

button.addEventListener("click", () => {
  hidden.classList.toggle("hidden-active");
  row.classList.toggle("row-hide");
});

backButton.addEventListener("click", () => {
  row.classList.toggle("row-hide");
  hidden.classList.toggle("hidden-active");
});
