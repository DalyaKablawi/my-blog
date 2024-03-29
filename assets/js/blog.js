const modeButton = document.getElementById("mode-button");
const body = document.body;
const blogPostsContainer = document.querySelector("#blog-posts-container");
const modeToggleBtn = document.getElementById("modeToggle");
modeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

/*This function declaration allows entries stored in local storage to be parsed into an array of objects. Then, for each object an element is created and the corresponding element of the object is selected and appended to it. 
Then, all new elements are appended to a container which exists in the HTML file*/
function addPost() {
  const userDataString = localStorage.getItem("Blog Post Entries");

  const dataArray = JSON.parse(userDataString);
  if (dataArray && dataArray.length > 0) {
    for (i = 0; i < dataArray.length; i++) {
      const blogPostParent = document.createElement("div");
      blogPostParent.setAttribute("class", "blog-entry");
      blogPostParent.setAttribute(
        "style",
        "background-color: #407088; margin-top: 10px; padding: 10px; border:5px solid black;"
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
