const modeButton = document.getElementById("mode-button");
const body = document.body;

function changeMode() {
  if (body.className.includes("light-mode")) {
    body.className = body.className.replace("light-mode", "dark-mode");
  } else {
    body.className = body.className.replace("dark-mode", "light-mode");
  }
}

modeButton.addEventListener("click", changeMode);
