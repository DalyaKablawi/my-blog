const formEl = document.getElementById("newpostform");
const usernameEl = document.querySelector("#exampleFormControlInput1");
const titleEl = document.querySelector("#exampleFormControlInput2");
const entryEl = document.querySelector("#exampleFormControlTextarea1");

/*This form handler, upon submission, ensures all fields are filled in (alerting users to complete the form if not) and stores the data in an object. The objects are pushed into an empty array, stringified then 
stored in local storage for later retrieval. The user is then automatically directed to the blog page.*/
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
