//This function finds the button by its ID and once clicked, a function is triggered to toggle the class to dark mode, whose CSS depicts changes in styling of the page.
const modeToggleBtn = document.getElementById("modeToggle");
modeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
