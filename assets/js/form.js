const formEl = document.getElementById("newpostform");
const usernameEl = document.querySelector("#exampleFormControlInput1");
const titleEl = document.querySelector("#exampleFormControlInput2");
const entryEl = document.querySelector("#exampleFormControlTextarea1");

console.log(formEl);
formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  if (usernameEl.value === "" || titleEl.value === "" || entryEl.value === "") {
    alert("Please complete the form!");
    return;
  }

  const newPost = {
    username: usernameEl.value,
    title: titleEl.value,
    entry: entryEl.value,
  };
  const userDataArrayString = localStorage.getItem("Blog Post Entries");
  const userDataArray = userDataArrayString
    ? JSON.parse(userDataArrayString)
    : [];

  userDataArray.push(newPost);

  const dataString = JSON.stringify(userDataArray);
  localStorage.setItem("Blog Post Entries", dataString);
  window.location.href = "blog.html";
});
