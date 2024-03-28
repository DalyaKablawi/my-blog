const form = document.querySelector("#newpost");
const username = document.querySelector("#exampleFormControlInput1");
const title = document.querySelector("#exampleFormControlInput2");
const entry = document.querySelector("#exampleFormControlTextarea1");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.setItem("Username", username.value);
  localStorage.setItem("Entry Title", title.value);
  if (username.value === "" || title.value === "" || entry.value === "") {
    alert("Please complete the form!");
    return;
  }
  window.location.href = "blog.html";
});
