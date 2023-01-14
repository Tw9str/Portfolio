let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/Tw9str/repos");
req.send();

req.onreadystatechange = () => {
  if (req.readyState === 4 && req.status === 200) {
    let repos = JSON.parse(req.response);
    repos.forEach((repo) => {
      let projects = document.querySelector(".portfolio .projects");
      let project = document.createElement("a");
      let bg = document.createElement("img");
      let details = document.createElement("div");
      let title = document.createElement("h1");
      let des = document.createElement("p");
      project.className = "project";
      details.className = "details";
      project.href = repo.homepage;
      project.target = "_blank";
      bg.src = repo.homepage + "demo.png";
      bg.alt = "website demo";
      title.innerText = repo.name;
      des.innerText = repo.description;
      details.appendChild(title);
      details.appendChild(des);
      project.appendChild(bg);
      project.appendChild(details);
      projects.appendChild(project);
    });
  }
};

let mysticData = new XMLHttpRequest();

mysticData.open("GET", "https://api.github.com/users/PingMystic/repos");
mysticData.send();

mysticData.onreadystatechange = () => {
  if (mysticData.readyState === 4 && mysticData.status === 200) {
    let repos = JSON.parse(mysticData.response);
    repos.forEach((repo) => {
      let projects = document.querySelector(".portfolio .projects");
      let project = document.createElement("a");
      let bg = document.createElement("img");
      let details = document.createElement("div");
      let title = document.createElement("h1");
      let des = document.createElement("p");
      project.className = "project";
      details.className = "details";
      project.href = repo.homepage;
      project.target = "_blank";
      bg.src = repo.homepage + "demo.png";
      bg.alt = "website demo";
      title.innerText = repo.name;
      des.innerText = repo.description;
      details.appendChild(title);
      details.appendChild(des);
      project.appendChild(bg);
      project.appendChild(details);
      projects.appendChild(project);
    });
  }
};

let blitzData = new XMLHttpRequest();

blitzData.open("GET", "https://api.github.com/users/Blitz03/repos");
blitzData.send();

blitzData.onreadystatechange = () => {
  if (blitzData.readyState === 4 && blitzData.status === 200) {
    let repos = JSON.parse(blitzData.response);
    repos.forEach((repo) => {
      let projects = document.querySelector(".portfolio .projects");
      let project = document.createElement("a");
      let bg = document.createElement("img");
      let details = document.createElement("div");
      let title = document.createElement("h1");
      let des = document.createElement("p");
      project.className = "project";
      details.className = "details";
      project.href = repo.homepage;
      project.target = "_blank";
      bg.src = repo.homepage + "demo.png";
      bg.alt = "website demo";
      title.innerText = repo.name;
      des.innerText = repo.description;
      details.appendChild(title);
      details.appendChild(des);
      project.appendChild(bg);
      project.appendChild(details);
      projects.appendChild(project);
    });
  }
};
