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
  const userDataString = localStorage.getItem("Blog Post Entries");

  const dataArray = JSON.parse(userDataString);
  if (dataArray && dataArray.length > 0) {
    for (i = 0; i < dataArray.length; i++) {
      const blogPostParent = document.createElement("div");
      blogPostParent.setAttribute("class", "blog-entry");
      blogPostParent.setAttribute(
        "style",
        "background-color: #E0FDCD; margin-top: 10px; padding: 10px; border:5px solid black;"
      );

      const titleElement = document.createElement("h2");
      titleElement.textContent = dataArray[i].title;
      titleElement.setAttribute("style", "text-decoration: underline;");

      const contentElement = document.createElement("p");
      contentElement.textContent = dataArray[i].entry;

      const userElement = document.createElement("p");
      userElement.textContent = `Entry by: ${dataArray[i].username}`;
      userElement.setAttribute("style", "font-style: italic");

      blogPostParent.appendChild(titleElement);
      blogPostParent.appendChild(contentElement);
      blogPostParent.appendChild(userElement);

      blogPostsContainer.appendChild(blogPostParent);
    }
  }
}

addPost();
