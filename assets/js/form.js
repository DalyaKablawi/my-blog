const formEl = document.querySelector("#newpost");
const usernameEl = document.querySelector("#exampleFormControlInput1");
const titleEl = document.querySelector("#exampleFormControlInput2");
const entryEl = document.querySelector("#exampleFormControlTextarea1");


formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const userData = {
    username: usernameEl.value,
    title: titleEl.value,
    entry: entryEl.value,
  };
  const dataString = JSON.stringify(userData);
  localStorage.setItem("Blog Post Entry", dataString);
  if (usernameEl.value === "" || titleEl.value === "" || entryEl.value === "") {
    alert("Please complete the form!");
    return;
  }
  window.location.href = "blog.html";

});
