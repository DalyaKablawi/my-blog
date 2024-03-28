const modeButton = document.getElementById("mode-button");
const body = document.body;
const blogPostsContainer = document.querySelector("#blog-posts-container");
// function changeMode() {
//   if (body.className.includes("light-mode")) {
//     body.className = body.className.replace("light-mode", "dark-mode");
//   } else {
//     body.className = body.className.replace("dark-mode", "light-mode");
//   }
// }

// modeButton.addEventListener("click", changeMode);

function addPost() {
  const userDataString = localStorage.getItem("Blog Post Entry");
  const dataObject = JSON.parse(userDataString);
  while (blogPostsContainer.firstChild) {
    blogPostsContainer.removeChild(blogPostsContainer.firstChild);
  }
  if (dataObject && dataObject.length > 0) {
    for (element of dataObject) {
      const blogPostParent = document.createElement("div");
      blogPostParent.setAttribute("class", "blog-entry");

      const titleElement = document.createElement("h2");
      titleElement.textContent = dataObject.title;

      const contentElement = document.createElement("p");
      contentElement.textContent = dataObject.entry;

      const userElement = document.createElement("p");
      userElement.textContent = dataObject.username;

      blogPostParent.appendChild(titleElement);
      blogPostParent.appendChild(contentElement);
      blogPostParent.appendChild(userElement);

      blogPostsContainer.appendChild(blogPostParent);
    }
  }
}

addPost();
