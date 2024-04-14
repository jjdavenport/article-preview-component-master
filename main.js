const button = document.getElementById("btn");
const row = document.querySelector(".row");
const hidden = document.querySelector(".hidden");
const backButton = document.getElementById("back-btn");

button.addEventListener("click", () => {
  row.style = "display: none";
  hidden.style = "display: block";
});

backButton.addEventListener("click", () => {
  hidden.style = "display: none";
  row.style = "display: flex";
});
