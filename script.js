const projectsButton = document.getElementById("moreProjects");

function newPage() {
  let url = document.getElementById("list").value;
  if (url != "none") {
    window.location = url;
  }
}

function moreProjectsButton() {
  window.location.href = "./projects.html";
}

projectsButton.addEventListener("click", moreProjectsButton);
