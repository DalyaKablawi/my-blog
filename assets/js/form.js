const form = document.querySelector("#newpost");
const username = document.querySelector("#exampleFormControlInput1");
const title = document.querySelector("#exampleFormControlInput2");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.setItem("Username", username.value);
  localStorage.setItem("Entry Title", title.value);
});
